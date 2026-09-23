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
    title: "Chosen ingredients",
    body: "Oilseeds are graded for appearance, moisture, and kitchen character before they reach the mill — so the bottle starts with better raw material.",
  },
  {
    title: "Clean processing",
    body: "Equipment and filling lines are kept orderly so flavour stays true to the seed, without unnecessary clutter in the process story.",
  },
  {
    title: "Honest packing",
    body: "Bottle integrity, cap seal, and batch identity on pack help every litre travel safely from mill to your pantry.",
  },
  {
    title: "Kitchen-ready taste",
    body: "Whether it is tadka, pickle, or everyday sabzi, Monika oils are built for real Indian cooking — aroma first, consistency next.",
  },
];

export default function QualityPage() {
  return (
    <>
      <Container className="py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
          Food quality
        </p>
        <h1 className="mt-3 font-serif text-5xl">The Monika Difference</h1>
        <p className="mt-4 max-w-2xl text-muted leading-7">
          Purity, for Monika, means the oil in the bottle should taste of the
          seed it came from — mustard, groundnut, or sesame — after careful
          processing and clean packing. That is the Monika difference in every
          Indian kitchen that trusts our food quality.
        </p>
      </Container>

      <Container className="grid gap-5 pb-10 sm:grid-cols-2">
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
          </ul>
        </div>
      </Container>
    </>
  );
}
