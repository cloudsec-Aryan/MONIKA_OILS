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
        "bg-cream/50 py-12 sm:py-16",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
              Products
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Why families pick Monika</h2>
            <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
              Best quality benefits for each bottle — tap a product to see why it belongs in your kitchen.
            </p>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-brand-red hover:underline">
            View all oils →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {items.map(({ spot, product }, index) => (
              <button
                key={spot.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition sm:gap-4 sm:p-4",
                  active === index
                    ? "border-brand-red/35 bg-white shadow-[0_16px_40px_rgba(181,31,31,0.12)]"
                    : "border-[#E8D7B3] bg-white/70 hover:border-brand-red/20 hover:bg-white",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-12 sm:w-12 sm:text-sm",
                    active === index
                      ? "bg-brand-red text-white"
                      : "bg-[#FFF1D6] text-brand-red",
                  )}
                >
                  {spot.label}
                </span>
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-cream sm:h-16 sm:w-16">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    className="object-contain p-1.5"
                    sizes="64px"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink sm:text-base">
                    {product.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted sm:text-sm">
                    {spot.whyTitle}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <article className="overflow-hidden rounded-[1.75rem] border border-[#E8D7B3] bg-white shadow-[0_20px_50px_rgba(36,36,36,0.08)]">
            <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[240px] bg-[linear-gradient(160deg,#fff8e7,#fff,#ffe8b8)] sm:min-h-full">
                <Image
                  key={current.product.id}
                  src={current.product.image}
                  alt={current.product.name}
                  fill
                  className="object-contain p-6 transition duration-500 sm:p-8"
                  sizes="(max-width: 768px) 90vw, 360px"
                />
              </div>
              <div className="flex flex-col p-5 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mustard-deep">
                  {current.spot.label} · Best quality
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  {current.spot.whyTitle}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{current.spot.why}</p>
                <ul className="mt-5 space-y-2.5">
                  {current.spot.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2.5 text-sm leading-6 text-ink">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <p className="text-lg font-bold text-brand-red">
                    {formatINR(variant.price)}
                    <span className="ml-2 text-sm font-medium text-muted line-through">
                      {formatINR(variant.mrp)}
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => addToCart(current.product.id, variant.weight)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
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
        </div>
      </Container>
    </section>
  );
}
