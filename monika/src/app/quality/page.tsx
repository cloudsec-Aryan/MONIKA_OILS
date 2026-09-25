import type { Metadata } from "next";
import Image from "next/image";
import { SeedToBottle } from "@/components/home/SeedToBottle";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "The Monika Difference",
  description:
    "What sets Monika food quality apart — careful seed selection, clean processing, and hygienic packing for Indian kitchens.",
};

const pillars = [
  {
    title: "Quality first",
    body: "Careful seed selection and disciplined processing sit at the centre of every bottle — the same measured approach trusted mills use across Haryana.",
  },
  {
    title: "Clean & hygienic processing",
    body: "Cleanliness is treated as a manufacturing standard, not an afterthought. Orderly lines keep flavour true to the seed.",
  },
  {
    title: "Honest packing",
    body: "Bottle integrity, cap seal, and batch identity help every litre travel safely from mill to pantry.",
  },
  {
    title: "Kitchen-ready taste",
    body: "Whether it is tadka, pickle, or everyday sabzi, Monika oils are built for real Indian cooking — aroma first, consistency next.",
  },
  {
    title: "Trust & transparency",
    body: "Clear product stories over short-term claims. We speak seed lot, aroma, and packing — food language families understand.",
  },
];

export default function QualityPage() {
  return (
    <>
      <Container className="py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
          The Monika Difference
        </p>
        <h1 className="mt-3 font-serif text-5xl">A measured approach to quality</h1>
        <p className="mt-4 max-w-2xl text-muted leading-7">
          Purity, for Monika, means the oil in the bottle should taste of the seed it came from —
          mustard, groundnut, or sesame — after careful processing and clean packing. From one
          expeller under Vikash and Deepak to deliveries across Haryana, that is the Monika
          difference.
        </p>
      </Container>

      <Container className="grid gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-3xl border border-cream-dark bg-white p-6 shadow-sm"
          >
            <h2 className="font-serif text-2xl">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{pillar.body}</p>
          </article>
        ))}
      </Container>

      <SeedToBottle />

      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/oil-extraction.png"
            alt="Traditional oil extraction"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl">What we watch for</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
            <li>Seed appearance, moisture, and grade before crushing.</li>
            <li>Clean equipment and orderly filling lines.</li>
            <li>Bottle integrity, cap seal, and batch identity on pack.</li>
            <li>Storage that keeps oil away from harsh light and heat.</li>
            <li>Silent features — good quality without loud marketing noise.</li>
          </ul>
        </div>
      </Container>
    </>
  );
}
