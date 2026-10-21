import { test, expect } from "@playwright/test";

test("ShopSphere AI homepage opens successfully", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/Create Next App|ShopSphere/i);
});