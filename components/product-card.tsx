import { Plus, Star } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: Props) {
  const [from, to] = product.gradient;

  return (
    <article
      data-testid="product-card"
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative flex aspect-4/3 items-center justify-center"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <span className="text-5xl font-semibold text-white/80">{product.name[0]}</span>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-neutral-900">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-violet-600">
          {product.category}
        </p>
        <h3 className="mt-1 font-semibold leading-snug">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-500">{product.description}</p>

        <div className="mt-3 flex items-center gap-1 text-sm text-neutral-600">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="font-medium">{product.rating.toFixed(1)}</span>
          <span className="text-neutral-400">({product.reviews.toLocaleString("en-US")})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            aria-label={`Add ${product.name} to cart`}
            className="inline-flex h-9 items-center gap-1 rounded-full bg-neutral-950 px-4 text-sm font-medium text-white transition hover:bg-violet-600"
          >
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </article>
  );
}