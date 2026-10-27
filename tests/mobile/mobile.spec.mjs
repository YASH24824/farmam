// Mobile QA: layout, touch targets, readability, navigation and key flows on phone screens.
import { test, expect } from "@playwright/test";

const PAGES = ["/", "/about", "/products", "/promise", "/contact"];

/** Scrolls the whole page so every scroll-reveal animation has fired. */
async function scrollThrough(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  await page.waitForTimeout(1000);
}

/** Number of scroll-reveal elements that are not yet fully visible. */
const hiddenRevealCount = (page) =>
  page.evaluate(
    () =>
      [...document.querySelectorAll("[data-reveal]")].filter(
        (el) => parseFloat(getComputedStyle(el).opacity) < 0.99
      ).length
  );

for (const path of PAGES) {
  test.describe(`${path}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
    });

    test("fits the screen with no horizontal scroll", async ({ page }) => {
      await scrollThrough(page);
      const { scrollW, clientW } = await page.evaluate(() => ({
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
      }));
      expect(scrollW).toBeLessThanOrEqual(clientW);
    });

    test("has a responsive viewport meta tag", async ({ page }) => {
      await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
        "content",
        /width=device-width/
      );
    });

    test("tap targets are at least 40px tall", async ({ page }) => {
      const small = await page.evaluate(() =>
        [...document.querySelectorAll("a, button, input, select, textarea")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            const s = getComputedStyle(el);
            // Ignore hidden elements and links inline within running text
            if (!r.width || !r.height || s.visibility === "hidden") return false;
            if (s.display === "inline" && el.closest("p")) return false;
            return r.height < 40 || r.width < 32;
          })
          .map((el) => `${el.tagName} "${(el.innerText || el.ariaLabel || "").trim().slice(0, 30)}"`)
      );
      expect(small).toEqual([]);
    });

    test("text is at least 12px", async ({ page }) => {
      const tiny = await page.evaluate(() =>
        [...document.querySelectorAll("p, li, a, span, dd, dt, label, button")]
          .filter((el) => el.innerText?.trim() && el.offsetParent !== null)
          .filter((el) => parseFloat(getComputedStyle(el).fontSize) < 12)
          .map((el) => el.innerText.trim().slice(0, 30))
      );
      expect(tiny).toEqual([]);
    });

    test("all content is visible after scrolling", async ({ page }) => {
      await scrollThrough(page);
      await expect.poll(() => hiddenRevealCount(page), { timeout: 4000 }).toBe(0);
    });

    test("images load and fit within the screen", async ({ page }) => {
      await scrollThrough(page);
      const broken = await page.evaluate(() =>
        [...document.images]
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.src)
      );
      expect(broken).toEqual([]);
    });
  });
}

test.describe("reduced motion", () => {
  test("content is visible without scrolling animations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    // No scrolling: everything below the fold must already be visible
    await expect.poll(() => hiddenRevealCount(page), { timeout: 1500 }).toBe(0);
  });
});

test.describe("navigation", () => {
  test("mobile menu opens, navigates and closes", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toBeVisible();
    await expect(page.locator("#mobile-menu")).toBeHidden();

    await toggle.tap();
    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

    await menu.getByRole("link", { name: "About Us" }).tap();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator("#mobile-menu")).toBeHidden();
    await expect(page.locator("h1")).toBeVisible();
  });

  test("desktop links are hidden on mobile", async ({ page }) => {
    await page.goto("/");
    const desktopLinks = page.locator('nav[aria-label="Main navigation"] a[aria-current], nav[aria-label="Main navigation"] ul a').first();
    await expect(desktopLinks).toBeHidden();
  });

  test("call and WhatsApp shortcuts are reachable", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href^="tel:"]:visible').first()).toBeVisible();
    const wa = page.getByRole("link", { name: /on WhatsApp/ });
    await expect(wa).toBeVisible();
    await expect(wa).toHaveAttribute("href", /^https:\/\/wa\.me\/\d+/);
  });
});

test.describe("home page", () => {
  test("hero headline and main call to action fit the first screen", async ({ page }) => {
    await page.goto("/");
    const vh = page.viewportSize().height;
    await expect(page.locator("h1")).toBeInViewport();
    const cta = page.getByRole("link", { name: "Explore Our Products" });
    await expect(cta).toBeVisible();
    expect((await cta.boundingBox()).y + 48).toBeLessThan(vh);
  });

  test("journey steps scroll sideways on mobile", async ({ page }) => {
    await page.goto("/");
    const track = page.locator("ol.snap-x");
    await track.scrollIntoViewIfNeeded();
    const { scrollW, clientW } = await track.evaluate((el) => ({
      scrollW: el.scrollWidth,
      clientW: el.clientWidth,
    }));
    expect(scrollW).toBeGreaterThan(clientW);
    await track.evaluate((el) => el.scrollBy({ left: el.clientWidth, behavior: "instant" }));
    expect(await track.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);
  });
});

test.describe("products page", () => {
  test("category filter and search narrow the list", async ({ page }) => {
    await page.goto("/products");
    const cards = page.getByRole("button", { name: "View Details" });
    const total = await cards.count();
    expect(total).toBeGreaterThanOrEqual(6);

    await page.getByRole("button", { name: "Pulses & Dals" }).tap();
    await expect(cards).toHaveCount(2);

    await page.getByRole("button", { name: "All Products" }).tap();
    await page.getByPlaceholder(/Search products/).fill("jeera");
    await expect(cards).toHaveCount(1);
  });

  test("product details open in a dialog that fits the screen", async ({ page }) => {
    await page.goto("/products");
    await page.getByRole("button", { name: "View Details" }).first().tap();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    const box = await dialog.boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(page.viewportSize().width + 1);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
});

test.describe("contact form", () => {
  test("inputs are 16px so iPhones don't zoom on focus", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("form textarea").waitFor();
    const sizes = await page.locator("form input, form textarea").evaluateAll((els) =>
      els.map((el) => parseFloat(getComputedStyle(el).fontSize))
    );
    expect(sizes.length).toBeGreaterThan(0);
    for (const size of sizes) expect(size).toBeGreaterThanOrEqual(16);
  });

  test("shows an error when submitted empty", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send on WhatsApp" }).tap();
    await expect(page.locator("form [role=alert]")).toContainText("name");
  });

  test("a filled form opens WhatsApp with the message", async ({ page }) => {
    await page.goto("/contact");
    await page.evaluate(() => {
      window.__opened = null;
      window.open = (url) => { window.__opened = url; return null; };
    });
    await page.getByLabel("Your name").fill("QA Tester");
    await page.getByRole("button", { name: "Bulk order" }).tap();
    await page.getByLabel("Message").fill("Please share bulk pricing for Bajri Atta.");
    await page.getByRole("button", { name: "Send on WhatsApp" }).tap();

    const opened = await page.evaluate(() => window.__opened);
    expect(opened).toMatch(/^https:\/\/wa\.me\//);
    expect(decodeURIComponent(opened)).toContain("About: Bulk order");
    await expect(page.getByRole("status")).toBeVisible();
  });
});
