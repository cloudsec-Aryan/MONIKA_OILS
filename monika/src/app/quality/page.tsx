import type { Metadata } from "next";
import Image from "next/image";
import { SeedToBottle } from "@/components/home/SeedToBottle";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Quality & Purity",
  description:
    "How Monika moves from selected seeds to hygienically packed edible oil for Indian kitchens.",
};

export default function QualityPage() {
  return (
    <>
      <Container className="py-14">
        <h1 className="font-serif text-5xl">Quality & Purity</h1>
        <p className="mt-4 max-w-2xl text-muted leading-7">
          Purity, for Monika, means the oil in the bottle should taste of the
          seed it came from — mustard, groundnut, or sesame — after careful
          processing and clean packing. We do not use medical or certification
          language that has not been independently published for this brand.
        </p>
      </Container>
      <SeedToBottle />
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="/images/oil-extraction.png" alt="Traditional oil extraction" fill className="object-cover" />
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
