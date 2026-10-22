import { ArrowRight, ShieldCheck, Truck, Wand2 } from "lucide-react";

const perks = [
  { icon: Wand2, label: "AI-picked for you" },
  { icon: Truck, label: "Free shipping over $75" },
  { icon: ShieldCheck, label: "30-day easy returns" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(124,58,237,0.55),transparent),radial-gradient(50%_60%_at_0%_100%,rgba(14,165,233,0.35),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-violet-200">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          New season, smarter shopping
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Shopping that knows{" "}
          <span className="bg-linear-to-r from-violet-300 to-sky-300 bg-clip-text text-transparent">
            what you love
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base text-neutral-300 sm:text-lg">
          Discover audio, wearables, home and fitness picks, personalized to your taste by ShopSphere AI.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition hover:bg-violet-100"
          >
            Shop now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#categories"
            className="inline-flex h-11 items-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Browse categories
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
          {perks.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-violet-300" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}