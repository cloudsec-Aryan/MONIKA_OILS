import Link from "next/link";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/product/ProductGrid";

export function FeaturedProducts({
  title = "Explore Our Products",
  subtitle = "Everyday goodness for every Indian kitchen.",
  filter = "featured",
}: {
  title?: string;
  subtitle?: string;
  filter?: "featured" | "bestseller";
}) {
  const list = products
    .filter((product) => (filter === "featured" ? product.featured : product.bestseller))
    .slice(0, 8);

  return (
    <section className="bg-cream/60 py-16">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-2 text-muted">{subtitle}</p>
          </div>
          <Link href="/shop" className="hidden text-sm font-semibold text-brand-red sm:inline">
            View all
          </Link>
        </div>
        <ProductGrid products={list} />
      </Container>
    </section>
  );
}
