import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Countdown } from "@/components/ui/Countdown";

export function OfferBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-red-dark via-brand-red to-mustard-deep">
      <Container className="flex flex-col items-center justify-between gap-6 py-8 text-center lg:flex-row lg:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mustard">
            Limited Time Offer
          </p>
          <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
            Get 10% OFF on Every Product
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Offer ends in:
          </p>
        </div>
        <Countdown />
        <Link
          href="/offers"
          className="rounded-full bg-mustard px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
        >
          Shop Offers →
        </Link>
      </Container>
    </section>
  );
}
