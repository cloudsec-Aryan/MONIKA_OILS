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
    <section className="py-6 sm:py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#E8D7B3] bg-white p-3 shadow-[0_10px_28px_rgba(181,31,31,0.05)] transition hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-[0_18px_40px_rgba(181,31,31,0.1)] sm:rounded-3xl sm:p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF1D6] sm:h-11 sm:w-11">
                <item.icon className="h-4 w-4 text-brand-red sm:h-5 sm:w-5" />
              </span>
              <h3 className="mt-2 text-[13px] font-semibold leading-tight text-ink sm:mt-4 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-muted sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-6">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
