"use client";

import { useEffect } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";

export type CartItem = { product: Product; quantity: number };

const FREE_SHIPPING_THRESHOLD = 75;

type Props = {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onChangeQuantity: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
};

export function CartDrawer({ open, onClose, items, onChangeQuantity, onRemove }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div role="dialog" aria-modal="true" aria-label="Shopping cart" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <ShoppingBag className="h-10 w-10 text-neutral-300" />
            <p className="font-medium">Your cart is empty</p>
            <p className="text-sm text-neutral-500">Add something you love and it will show up here.</p>
          </div>
        ) : (
          <>
            <div className="border-b border-neutral-100 px-5 py-3 text-sm">
              <p className="text-neutral-600">
                {remaining > 0
                  ? `Add ${formatPrice(remaining)} more for free shipping`
                  : "You've unlocked free shipping"}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-violet-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-neutral-100 overflow-y-auto px-5">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-4">
                  <div
                    className="h-16 w-16 shrink-0 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]})`,
                    }}
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium leading-snug">{product.name}</p>
                    <p className="text-sm text-neutral-500">{formatPrice(product.price)}</p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-neutral-200">
                        <button
                          type="button"
                          onClick={() => onChangeQuantity(product.id, -1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="rounded-full p-1.5 transition hover:bg-neutral-100"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-medium">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => onChangeQuantity(product.id, 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="rounded-full p-1.5 transition hover:bg-neutral-100"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="rounded-full p-1.5 text-neutral-400 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-neutral-200 p-5">
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Subtotal</span>
                <span data-testid="cart-subtotal">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">Taxes and shipping are calculated at checkout.</p>
              <button
                type="button"
                className="mt-4 h-11 w-full rounded-full bg-neutral-950 text-sm font-medium text-white transition hover:bg-violet-600"
              >
                Checkout (demo)
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}