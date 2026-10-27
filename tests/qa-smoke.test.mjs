// QA suite: pages, SEO metadata, structured data, accessibility basics and the enquiry API.
// Run against a live server: `npm run build && npm start` (or `npm run dev`), then
// `node --test tests/qa-smoke.test.mjs`. Set BASE_URL to test another deployment.
import { test, describe } from "node:test";
import assert from "node:assert/strict";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const PAGES = ["/", "/about", "/products", "/promise", "/contact"];

const cache = new Map();
async function page(path) {
  if (!cache.has(path)) {
    const res = await fetch(BASE + path);
    cache.set(path, { status: res.status, html: await res.text() });
  }
  return cache.get(path);
}

const meta = (html, attr, key) =>
  html.match(new RegExp(`<meta[^>]*${attr}="${key}"[^>]*content="([^"]*)"`, "i"))?.[1];

const jsonLd = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap((m) => [JSON.parse(m[1])].flat());

describe("pages", () => {
  for (const path of PAGES) {
    test(`${path} returns 200 with a title`, async () => {
      const { status, html } = await page(path);
      assert.equal(status, 200);
      assert.match(html, /<title>[^<]+<\/title>/i);
    });
  }

  test("unknown page returns 404", async () => {
    const res = await fetch(BASE + "/this-page-does-not-exist");
    assert.equal(res.status, 404);
  });
});

describe("SEO", () => {
  const titles = new Set();

  for (const path of PAGES) {
    test(`${path} has unique title, description, canonical and Open Graph tags`, async () => {
      const { html } = await page(path);
      const title = html.match(/<title>([^<]+)<\/title>/)[1];
      assert.ok(!titles.has(title), `duplicate title: ${title}`);
      titles.add(title);

      const description = meta(html, "name", "description");
      assert.ok(description && description.length >= 50 && description.length <= 170,
        `description length ${description?.length}`);

      const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
      assert.ok(canonical, "missing canonical");
      assert.ok(canonical.replace(/\/$/, "").endsWith(path.replace(/\/$/, "")), canonical);

      for (const key of ["og:title", "og:description", "og:image"]) {
        assert.ok(meta(html, "property", key), `missing ${key}`);
      }
      assert.equal(meta(html, "name", "twitter:card"), "summary_large_image");
      assert.match(html, /<html[^>]*lang="en-IN"/);
    });

    test(`${path} has exactly one h1 and every image has alt text`, async () => {
      const { html } = await page(path);
      assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
      const imgs = html.match(/<img\b[^>]*>/g) ?? [];
      for (const img of imgs) assert.match(img, /\salt="[^"]*"/, img.slice(0, 120));
    });

    test(`${path} has valid JSON-LD`, async () => {
      const types = jsonLd((await page(path)).html).map((d) => d["@type"]);
      assert.ok(types.includes("Organization"));
      assert.ok(types.includes("WebSite"));
      if (path !== "/") assert.ok(types.includes("BreadcrumbList"));
    });
  }

  test("products page lists every product as schema.org Product", async () => {
    const list = jsonLd((await page("/products")).html).find((d) => d["@type"] === "ItemList");
    assert.ok(list);
    assert.ok(list.itemListElement.length >= 6);
    for (const { item } of list.itemListElement) {
      assert.equal(item["@type"], "Product");
      assert.ok(item.name && item.image && item.brand);
    }
  });

  test("sitemap.xml lists all pages", async () => {
    const res = await fetch(BASE + "/sitemap.xml");
    assert.equal(res.status, 200);
    const xml = await res.text();
    for (const path of PAGES.slice(1)) assert.ok(xml.includes(`${path}</loc>`), path);
  });

  test("robots.txt allows crawling and points to the sitemap", async () => {
    const txt = await (await fetch(BASE + "/robots.txt")).text();
    assert.match(txt, /Allow: \//);
    assert.match(txt, /Disallow: \/api\//);
    assert.match(txt, /Sitemap: .*\/sitemap\.xml/);
  });

  test("web manifest and Open Graph image are served", async () => {
    const manifest = await (await fetch(BASE + "/manifest.webmanifest")).json();
    assert.equal(manifest.short_name, "FARMAM");
    const og = await fetch(BASE + "/opengraph-image");
    assert.equal(og.status, 200);
    assert.equal(og.headers.get("content-type"), "image/png");
  });
});

describe("enquiry API", () => {
  const post = (body) =>
    fetch(BASE + "/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });

  const valid = {
    fullName: "QA Tester",
    email: "qa@example.com",
    message: "Please share bulk pricing for Bajri Atta.",
    consent: true,
  };

  test("accepts a valid enquiry", async () => {
    const res = await post(valid);
    assert.equal(res.status, 200);
    assert.equal((await res.json()).success, true);
  });

  for (const [name, body] of [
    ["malformed JSON", "{nope"],
    ["missing name", { ...valid, fullName: "" }],
    ["invalid email", { ...valid, email: "not-an-email" }],
    ["short message", { ...valid, message: "hi" }],
    ["no consent", { ...valid, consent: false }],
  ]) {
    test(`rejects ${name} with 400`, async () => {
      const res = await post(body);
      assert.equal(res.status, 400);
      assert.equal((await res.json()).success, false);
    });
  }
});
