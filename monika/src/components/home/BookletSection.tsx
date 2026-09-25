"use client";

import { BookOpen, Download, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { booklet } from "@/data/booklet";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function BookletSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden py-12 sm:py-16",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#E8D7B3] bg-gradient-to-br from-[#1a0f0f] via-[#2a1414] to-[#3a1a12] p-6 text-white shadow-[0_28px_60px_rgba(36,36,36,0.22)] sm:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-mustard/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-brand-red/40 blur-3xl"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-mustard">
                <BookOpen size={14} />
                Kitchen booklet
              </p>
              <h2 className="mt-3 text-2xl leading-tight sm:text-4xl">{booklet.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                {booklet.subtitle}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {booklet.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={booklet.fileUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-mustard px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  <Download size={16} />
                  Download PDF
                </a>
                <p className="text-xs text-white/55">
                  {booklet.pages} pages · Updated {booklet.updatedAt}
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="booklet-float relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#fff8e7] to-[#f3e6c4] p-5 text-ink shadow-2xl">
                <div className="flex items-center justify-between">
                  <FileText className="text-brand-red" size={22} />
                  <span className="rounded-full bg-brand-red/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-red">
                    PDF
                  </span>
                </div>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-deep">
                  Monika Oils
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">Kitchen Booklet</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Oils · Pack sizes · Press story · Haryana delivery notes
                </p>
                <div className="absolute inset-x-5 bottom-5 space-y-2">
                  {[72, 58, 84].map((w) => (
                    <div
                      key={w}
                      className="h-2 rounded-full bg-[#E8D7B3]/80"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
