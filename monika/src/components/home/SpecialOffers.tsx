import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const combos = [
  {
    title: "Family Pack",
    text: "5L Mustard Oil",
    image: "/images/product-family-pack.png",
    href: "/product/family-value-pack",
  },
  {
    title: "Kitchen Combo",
    text: "Mustard Oil + Groundnut Oil",
    image: "/images/product-combo.png",
    href: "/product/kitchen-combo",
  },
  {
    title: "Value Pack",
    text: "Multiple Mustard Oil Bottles",
    image: "/images/product-value-pack.png",
    href: "/product/mustard-oil-value-pack",
  },
];

export function SpecialOffers() {
  return (
    <section className="py-16">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red to-mustard-deep p-8 text-white sm:p-12">
          <h2 className="font-serif text-3xl sm:text-5xl">Stock Your Kitchen & Save More</h2>
          <p className="mt-3 text-lg">10% OFF on Every Product</p>
          <Link
            href="/offers"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
          >
            View All Offers
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {combos.map((combo) => (
            <Link
              key={combo.title}
              href={combo.href}
              className="group overflow-hidden rounded-3xl border border-cream-dark bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image src={combo.image} alt={combo.title} fill className="object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl">{combo.title}</h3>
                <p className="mt-1 text-sm text-muted">{combo.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
