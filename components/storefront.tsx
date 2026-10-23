"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CategoryStrip, type CategoryFilter } from "@/components/catagory-strip";
import { ProductCard } from "@/components/product-card";
import { CartDrawer, type CartItem } from "@/components/cart-drawer";
import { products, type Product } from "@/lib/products";

export function Storefront() {
  const [query, setQuery] = useState("");
  useEffect(() => {
  document.documentElement.dataset.hydrated = "true";
}, []);
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const addToCart = useCallback((product: Product) => {
    setCart((current) => {
      const existing = current.find((i) => i.product.id === product.id);
      if (existing) {
        return current.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  }, []);

  const changeQuantity = useCallback((productId: string, delta: number) => {
    setCart((current) =>
      current
        .map((i) => (i.product.id === productId ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((current) => current.filter((i) => i.product.id !== productId));
  }, []);

  const closeCart = useCallback(() => setCartOpen(false), []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <Navbar
        query={query}
        onQueryChange={setQuery}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />
      <main>
        <Hero />
        <CategoryStrip active={category} onChange={setCategory} />

        <section id="products" className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-24 pt-10 sm:px-6">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Featured products</h2>
            <p className="text-sm text-neutral-500">
              {visible.length} {visible.length === 1 ? "item" : "items"}
            </p>
          </div>

          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={addToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-neutral-300 p-12 text-center">
              <p className="font-medium">No products match your search.</p>
              <p className="mt-1 text-sm text-neutral-500">
                Try a different keyword or choose another category.
              </p>
            </div>
          )}
        </section>
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={closeCart}
        items={cart}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
      />
    </>
  );
}