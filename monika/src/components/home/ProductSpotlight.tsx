"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";
import { productSpotlights } from "@/data/homepage";
import { products } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import { cn, formatINR, getVariant } from "@/lib/utils";

export function ProductSpotlight() {
  const { addToCart } = useStore();
  const { ref, visible } = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);

  const items = productSpotlights
    .map((spot) => {
      const product = products.find((p) => p.id === spot.id);
      return product ? { spot, product } : null;
    })
    .filter(Boolean) as Array<{
    spot: (typeof productSpotlights)[number];
    product: (typeof products)[number];
  }>;

  const current = items[active] ?? items[0];
  if (!current) return null;

  const variant = getVariant(current.product, current.product.variants[0].weight);

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-[#fffaf1] py-16 sm:py-20",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(244,180,0,0.16),transparent_42%),radial-gradient(ellipse_at_90%_100%,rgba(181,31,31,0.07),transparent_40%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
              Products
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">
              Why families pick Monika
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              Best quality benefits for each bottle — tap a product to see why it belongs in your kitchen.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 text-sm font-semibold text-brand-red hover:underline"
          >
            View all oils →
          </Link>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {items.map(({ spot, product }, index) => (
            <button
              key={spot.id}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition",
                active === index
                  ? "border-brand-red bg-white shadow-[0_14px_32px_rgba(181,31,31,0.12)]"
                  : "border-[#E8D7B3] bg-white/70 hover:border-brand-red/25 hover:bg-white",
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  active === index ? "bg-brand-red text-white" : "bg-[#FFF1D6] text-brand-red",
                )}
              >
                {spot.label}
              </span>
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-cream">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink">{spot.shortName}</span>
                <span className="mt-0.5 block truncate text-xs text-muted">{spot.whyTitle}</span>
              </span>
            </button>
          ))}
        </div>

        <article className="overflow-hidden rounded-[1.75rem] border border-[#E8D7B3] bg-white shadow-[0_22px_50px_rgba(36,36,36,0.08)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[280px] bg-[linear-gradient(165deg,#fff4d4_0%,#fffdf8_48%,#ffe7b0_100%)] sm:min-h-[340px] lg:min-h-[480px]">
              <Image
                key={current.product.id}
                src={current.product.image}
                alt={current.product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 440px"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mustard-deep">
                {current.spot.label} · Best quality
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink sm:text-[1.75rem]">
                {current.spot.whyTitle}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted sm:text-[15px]">
                {current.spot.why}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3.5">
                {current.spot.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm leading-6 text-ink">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-[#F0E2C4] pt-6">
                <p className="text-2xl font-bold text-brand-red">
                  {formatINR(variant.price)}
                  <span className="ml-2 text-sm font-medium text-muted line-through">
                    {formatINR(variant.mrp)}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => addToCart(current.product.id, variant.weight)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
                >
                  <ShoppingBag size={15} />
                  Add {variant.weight}
                </button>
                <Link
                  href={`/product/${current.product.slug}`}
                  className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
