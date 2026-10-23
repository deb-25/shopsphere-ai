"use client";

import { Search, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  cartCount: number;
};

export function Navbar({ query, onQueryChange, cartCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-600 to-indigo-600 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg">
            ShopSphere <span className="text-violet-600">AI</span>
          </span>
        </a>

        <div className="relative mx-auto hidden w-full max-w-xl md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search headphones, watches, backpacks..."
            aria-label="Search products"
            className="h-10 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-10 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Button variant="ghost" size="icon" aria-label="Open cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}