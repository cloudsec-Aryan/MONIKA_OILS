import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

const reasons = [
  ["01", "Pure Ingredients", "Selected oilseeds, graded before they reach the mill."],
  ["02", "Authentic Taste", "Mustard character that belongs in Indian kitchens."],
  ["03", "Rich Aroma", "Aroma that opens as soon as the tadka hits the pan."],
  ["04", "Quality Focus", "Checks at processing, filling, and packing."],
  ["05", "Hygienic Packaging", "Sealed bottles designed to travel well."],
  ["06", "Everyday Value", "Family sizes and combos priced for regular cooking."],
];

export function WhyMonika() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mustard-deep">
            Why Families Choose Monika
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            A bottle you can put on the family table
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([num, title, text]) => (
            <article
              key={num}
              className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(36,36,36,0.05)] transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-mustard-deep">{num}</span>
                <Sparkles className="text-brand-red" size={18} />
              </div>
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
