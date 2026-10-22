import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Categories</h2>
          <p className="mt-2 text-neutral-500">Coming next.</p>
        </section>
        <section id="products" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Featured products</h2>
          <p className="mt-2 text-neutral-500">Coming next.</p>
        </section>
      </main>
    </>
  );
}