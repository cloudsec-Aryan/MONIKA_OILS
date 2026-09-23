import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Monika Foods",
  description: "Explore Monika foods — kitchen staples crafted with the same care as our oils.",
};

export default function FoodsPage() {
  return (
    <Container className="py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
        Products
      </p>
      <h1 className="mt-3 font-serif text-5xl">Foods</h1>
      <p className="mt-4 max-w-2xl text-muted leading-7">
        Monika Foods brings the same seed-to-kitchen care to pantry staples that
        pair with our oils. More packs are on the way — meanwhile explore our
        edible oil range.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/food-sabzi.png"
            alt="Indian kitchen food prepared with Monika oils"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center rounded-3xl border border-cream-dark bg-white p-8">
          <h2 className="font-serif text-3xl">Coming to your pantry</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            From everyday cooking companions to festive favourites, Monika Foods
            will grow beside our oils. Check back soon, or shop oils today.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex w-fit rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
          >
            Shop Oils
          </Link>
        </div>
      </div>
    </Container>
  );
}
