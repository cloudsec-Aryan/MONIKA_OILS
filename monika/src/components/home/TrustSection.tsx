import { Droplets, Flower2, ShieldCheck, PackageCheck, Soup, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  {
    icon: Droplets,
    title: "100% Pure",
    text: "Pure edible oil made with carefully selected mustard seeds.",
  },
  {
    icon: Flower2,
    title: "Authentic Aroma",
    text: "Traditional mustard aroma and natural taste.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    text: "Carefully processed and quality checked.",
  },
  {
    icon: PackageCheck,
    title: "Hygienically Packed",
    text: "Packed carefully to maintain freshness.",
  },
  {
    icon: Soup,
    title: "Rich Natural Taste",
    text: "Perfect for everyday Indian cooking.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Quality",
    text: "Made with consistency and quality in mind.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <item.icon className="text-brand-red" />
              <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
