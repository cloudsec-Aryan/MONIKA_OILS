import Link from "next/link";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { cn } from "@/lib/utils";

export function FeaturedProducts({
  title = "Explore Our Products",
  subtitle = "Everyday goodness for every Indian kitchen.",
  filter = "featured",
  className,
}: {
  title?: string;
  subtitle?: string;
  filter?: "featured" | "bestseller";
  className?: string;
}) {
  const list = products
    .filter((product) => (filter === "featured" ? product.featured : product.bestseller))
    .slice(0, 8);

  return (
    <section className={cn("bg-cream/60 py-10 sm:py-16", className)}>
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
