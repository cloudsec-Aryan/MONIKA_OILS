import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Monika",
  description:
    "Monika brings quality edible oils to Indian households with authentic taste, careful sourcing, and hygienic packaging.",
};

const timeline = [
  "From Seed",
  "Processing",
  "Quality",
  "Packaging",
  "Your Kitchen",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16">
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
            About Monika
          </p>
          <h1 className="mt-3 font-serif text-5xl">Tradition You Can Taste.</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Monika focuses on bringing quality edible oils to Indian households
            with an emphasis on authentic taste, careful sourcing, quality
            processing and hygienic packaging. The brand is built for everyday
            kitchens — the tadka that starts dinner, the pickle jar that lasts
            the season, the oil that families reach for without thinking twice.
          </p>
        </Container>
      </section>
      <Container className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["/images/mustard-field.png", "Mustard fields"],
          ["/images/mustard-flowers.png", "Mustard flowers"],
          ["/images/mustard-seeds.png", "Mustard seeds"],
          ["/images/indian-kitchen.png", "Traditional Indian cooking"],
          ["/images/oil-extraction.png", "Oil extraction"],
        ].map(([src, alt]) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:last:col-span-2 lg:last:col-span-2">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </Container>
      <Container className="pb-16">
        <h2 className="text-center font-serif text-3xl">From Seed → Processing → Quality → Packaging → Your Kitchen</h2>
        <ol className="mt-10 grid gap-3 sm:grid-cols-5">
          {timeline.map((step, index) => (
            <li key={step} className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-semibold text-mustard-deep">0{index + 1}</span>
              <p className="mt-2 font-serif text-xl">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <p className="text-sm leading-7 text-muted">
            We work with the language of the mill and the mandi — seed lot,
            aroma, colour, packing — not with medical claims. Mustard oil is
            food. Monika’s job is to keep that food honest: selected seeds,
            attentive processing, bottles that arrive clean and ready for the
            stove.
          </p>
          <p className="text-sm leading-7 text-muted">
            Alongside kachi ghani and pure mustard oil, the range includes
            groundnut and sesame oils so a single pantry can cook across
            regions. Combos exist for households that want to stock once and
            cook for weeks.
          </p>
        </div>
      </Container>
    </>
  );
}
