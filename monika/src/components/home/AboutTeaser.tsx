"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { aboutTeaser } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function AboutTeaser() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden py-10 sm:py-14",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(244,180,0,0.12),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(181,31,31,0.08),transparent_50%)]" />
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
              {aboutTeaser.kicker}
            </p>
            <h2 className="mt-3 max-w-xl text-2xl leading-tight text-ink sm:text-4xl">
              {aboutTeaser.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {aboutTeaser.text}
            </p>
            <Link
              href={aboutTeaser.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red"
            >
              {aboutTeaser.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              ["1", "Expeller", "Where it began"],
              ["2", "Leaders", "Vikash & Deepak"],
              ["All", "Haryana", "Home delivery"],
              ["∞", "Kitchens", "Everyday cooking"],
            ].map(([value, label, hint], i) => (
              <article
                key={label}
                className={cn(
                  "rounded-2xl border border-[#E8D7B3]/90 bg-white/80 p-4 shadow-[0_12px_32px_rgba(36,36,36,0.06)] backdrop-blur-sm sm:p-5",
                  visible && "animate-fade-up",
                )}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <p className="font-serif text-3xl text-mustard-deep sm:text-4xl">{value}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{label}</p>
                <p className="mt-1 text-xs text-muted">{hint}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
