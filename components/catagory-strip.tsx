"use client";

import { categories, products, type Category } from "@/lib/products";

export type CategoryFilter = "All" | Category;

type Props = {
  active: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
};

export function CategoryStrip({ active, onChange }: Props) {
  const options: CategoryFilter[] = ["All", ...categories];

  return (
    <section id="categories" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-16 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight">Shop by category</h2>
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {options.map((option) => {
          const count =
            option === "All"
              ? products.length
              : products.filter((p) => p.category === option).length;
          const isActive = option === active;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-violet-300 hover:bg-violet-50"
              }`}
            >
              {option} <span className={isActive ? "text-violet-200" : "text-neutral-400"}>{count}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}