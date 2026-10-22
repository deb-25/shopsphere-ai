import { test, expect } from "@playwright/test";

test("ShopSphere AI homepage renders the storefront", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/ShopSphere AI/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Shopping that knows/i })
  ).toBeVisible();
  await expect(page.getByLabel("Search products")).toBeVisible();
});