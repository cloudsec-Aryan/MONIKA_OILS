"use client";

import Link from "next/link";
import { MapPin, ShieldCheck, Sprout, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { silentFeatures } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const icons = [ShieldCheck, Sprout, MapPin, Users];

export function StoryFeatures() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden py-14 sm:py-20",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(181,31,31,0.07),transparent_50%),radial-gradient(ellipse_at_10%_100%,rgba(244,180,0,0.14),transparent_45%)]" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
              About Us
            </p>
            <h2 className="mt-3 max-w-xl text-2xl leading-tight text-ink sm:text-4xl">
              Started with one expeller. Led by Vikash &amp; Deepak. Delivered across Haryana.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Monika began as a quiet mill — a single expeller, supervised with care by Vikash and
              Deepak. That same discipline in seed selection, clean pressing, and honest packing now
              reaches kitchens in every corner of Haryana. No loud promises. Just good quality oil
              you can put on the family table.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
              >
                Full story
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#E8D7B3] bg-white/80 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand-red/30"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {silentFeatures.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article
                  key={feature.title}
                  className={cn(
                    "rounded-2xl border border-[#E8D7B3]/90 bg-white/85 p-5 shadow-[0_14px_36px_rgba(36,36,36,0.06)] backdrop-blur-sm",
                    visible && "animate-fade-up",
                  )}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1D6] text-brand-red">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
