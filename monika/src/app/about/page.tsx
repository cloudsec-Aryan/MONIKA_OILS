import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { silentFeatures } from "@/data/homepage";

export const metadata: Metadata = {
  title: "About Us | Monika",
  description:
    "Monika started with one expeller under Vikash and Deepak. Today we deliver quality edible oils across Haryana.",
};

const timeline = [
  { step: "One expeller", text: "A quiet start — seed in, honest oil out." },
  { step: "Vikash & Deepak", text: "Supervised milling with quality as the only loud claim." },
  { step: "Clean packing", text: "Sealed bottles ready for the family table." },
  { step: "All Haryana", text: "Home delivery across the state." },
  { step: "Your kitchen", text: "Tadka, pickle, sabzi — everyday Indian cooking." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16">
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
            About Us
          </p>
          <h1 className="mt-3 font-serif text-5xl">From one expeller to all of Haryana.</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Monika began with a single expeller, supervised and led by Vikash and Deepak. That
            same care in seed selection, clean pressing, and hygienic packing now delivers quality
            edible oils to kitchens across Haryana. We believe better oil begins with better seeds —
            and ends on a family table.
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
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:last:col-span-2 lg:last:col-span-2"
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </Container>

      <Container className="pb-10">
        <h2 className="text-center font-serif text-3xl">Our path</h2>
        <ol className="mt-10 grid gap-3 sm:grid-cols-5">
          {timeline.map((item, index) => (
            <li key={item.step} className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <span className="text-xs font-semibold text-mustard-deep">0{index + 1}</span>
              <p className="mt-2 font-serif text-xl">{item.step}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="pb-16">
        <h2 className="font-serif text-3xl">Silent features · good quality</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          We work with the language of the mill — seed lot, aroma, colour, packing — not with loud
          medical claims. Mustard oil is food. Monika&apos;s job is to keep that food honest.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {silentFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-cream-dark bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
          >
            Shop oils
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-cream-dark bg-white px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </>
  );
}
