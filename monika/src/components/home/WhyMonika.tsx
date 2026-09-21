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
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mustard-deep">
            Why Families Choose Monika
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-4xl">
            A bottle you can put on the family table
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
          {reasons.map(([num, title, text]) => (
            <article
              key={num}
              className="rounded-2xl border border-[#E8D7B3] bg-white p-3.5 shadow-[0_10px_28px_rgba(181,31,31,0.05)] transition hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-[0_18px_40px_rgba(181,31,31,0.1)] sm:rounded-3xl sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-mustard-deep sm:text-4xl">{num}</span>
                <Sparkles className="text-brand-red" size={16} />
              </div>
              <h3 className="mt-3 font-serif text-base sm:mt-4 sm:text-2xl">{title}</h3>
              <p className="mt-1.5 text-[11px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
