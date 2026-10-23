import { test, expect } from "@playwright/test";

test("ShopSphere AI homepage renders the storefront", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/ShopSphere AI/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Shopping that knows/i })
  ).toBeVisible();
  await expect(page.getByLabel("Search products")).toBeVisible();
});

test("search filters the product grid", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");

  await expect(page.getByTestId("product-card")).toHaveCount(12);

  const search = page.getByLabel("Search products");
  await search.click();
  await search.pressSequentially("headphones", { delay: 50 });

  await expect(page.getByTestId("product-card")).toHaveCount(1);
});

test("category buttons filter the product grid", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /^Audio/ }).click();
  await expect(page.getByTestId("product-card")).toHaveCount(3);
});

test("adding a product updates the cart badge", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Add Aurora Wireless Headphones/ }).click();
  await expect(page.getByRole("button", { name: "Open cart" })).toContainText("1");
});