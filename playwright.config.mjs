import { defineConfig, devices } from "@playwright/test";

// Mobile QA: runs tests/mobile against a phone-sized Chrome.
// Start the site first (`npm run build && npm start`), or set BASE_URL.
const chrome = { channel: "chrome" };

export default defineConfig({
  testDir: "tests/mobile",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: process.env.BASE_URL ?? "http://localhost:3000" },
  projects: [
    { name: "iPhone 13", use: { ...devices["iPhone 13"], ...chrome, defaultBrowserType: "chromium" } },
    { name: "Pixel 7", use: { ...devices["Pixel 7"], ...chrome } },
    { name: "Small Android (360)", use: { ...devices["Galaxy S9+"], ...chrome, viewport: { width: 360, height: 740 } } },
  ],
});
