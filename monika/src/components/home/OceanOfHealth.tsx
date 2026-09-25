"use client";

import Link from "next/link";
import { Waves } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { oceanSlogan } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function OceanOfHealth() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden py-14 sm:py-20",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <div className="ocean-stage absolute inset-0" aria-hidden>
        <div className="ocean-wave ocean-wave-a" />
        <div className="ocean-wave ocean-wave-b" />
        <div className="ocean-wave ocean-wave-c" />
        <div className="ocean-shimmer" />
      </div>

      <Container className="relative z-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
          <Waves size={14} />
          {oceanSlogan.kicker}
        </span>
        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-3xl leading-tight text-white drop-shadow-md sm:text-5xl sm:leading-[1.15]">
          {oceanSlogan.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
          {oceanSlogan.text}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/shop"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-red shadow-lg shadow-black/20 transition hover:bg-mustard hover:text-ink"
          >
            Explore products
          </Link>
          <Link
            href="/quality"
            className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            The Monika Difference
          </Link>
        </div>
      </Container>
    </section>
  );
}
