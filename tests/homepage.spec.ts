import { test, expect, type Page } from "@playwright/test";

// Opens the page and waits until React has hydrated and clicks work.
// Opening and closing the cart is safe to retry, so it can't change test state.
async function gotoReady(page: Page) {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-hydrated", "true", {
    timeout: 20000,
  });
}

test("ShopSphere AI homepage renders the storefront", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/ShopSphere AI/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Shopping that knows/i })
  ).toBeVisible();
  await expect(page.getByLabel("Search products")).toBeVisible();
});

test("search filters the product grid", async ({ page }) => {
  await gotoReady(page);

  await expect(page.getByTestId("product-card")).toHaveCount(12);

  await page.getByLabel("Search products").fill("headphones");
  await expect(page.getByTestId("product-card")).toHaveCount(1);
});

test("category buttons filter the product grid", async ({ page }) => {
  await gotoReady(page);

  const audio = page.getByRole("button", { name: /^Audio/ });
  await audio.click();

  await expect(audio).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByTestId("product-card")).toHaveCount(3);
});

test("adding a product updates the cart badge", async ({ page }) => {
  await gotoReady(page);

  await page
    .getByRole("button", { name: /Add Aurora Wireless Headphones/ })
    .click();

  await expect(page.getByRole("button", { name: "Open cart" })).toContainText("1");
});

test("cart drawer shows items and subtotal", async ({ page }) => {
  await gotoReady(page);

  const add = page.getByRole("button", { name: /Add Aurora Wireless Headphones/ });
  await add.click();
  await add.click();

  await page.getByRole("button", { name: "Open cart" }).click();

  const cart = page.getByRole("dialog", { name: "Shopping cart" });
  await expect(cart).toContainText("Aurora Wireless Headphones");
  await expect(cart.getByTestId("cart-subtotal")).toHaveText("$378");

  await cart
    .getByRole("button", { name: /Remove Aurora Wireless Headphones/ })
    .click();
  await expect(cart).toContainText("Your cart is empty");
});

test("search box is visible on a phone-sized screen", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  await expect(page.getByLabel("Search products")).toBeVisible();
});