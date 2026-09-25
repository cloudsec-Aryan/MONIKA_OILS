"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Calculator, ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const familySizes = [
  { label: "2–3", litres: 1.5 },
  { label: "4–5", litres: 2.5 },
  { label: "6+", litres: 4 },
] as const;

const cookStyles = [
  { label: "Light (mostly tadka)", factor: 0.75 },
  { label: "Everyday Indian kitchen", factor: 1 },
  { label: "Heavy fry + pickle", factor: 1.35 },
] as const;

export function RefillEstimator() {
  const { toast } = useStore();
  const { ref, visible } = useReveal<HTMLElement>();
  const [family, setFamily] = useState(1);
  const [style, setStyle] = useState(1);

  const litres = useMemo(() => {
    const base = familySizes[family]?.litres ?? 2.5;
    const factor = cookStyles[style]?.factor ?? 1;
    return Math.round(base * factor * 10) / 10;
  }, [family, style]);

  const packHint =
    litres <= 1.5 ? "1L bottle" : litres <= 3 ? "2L pack" : "5L family pack";

  return (
    <section
      ref={ref}
      className={cn(
        "py-12 sm:py-16",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <Container>
        <div className="overflow-hidden rounded-[1.75rem] border border-[#E8D7B3] bg-white shadow-[0_18px_48px_rgba(36,36,36,0.07)]">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="bg-gradient-to-br from-cream via-white to-[#fff1d6] p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                <Calculator size={14} />
                Unique kitchen logic
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl">How much oil does your kitchen need?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                A quick Monika refill guide for Haryana homes — pick family size and cooking style.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Family size
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {familySizes.map((item, i) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setFamily(i)}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-semibold transition",
                          family === i
                            ? "bg-brand-red text-white"
                            : "border border-[#E8D7B3] bg-white text-ink hover:border-brand-red/30",
                        )}
                      >
                        {item.label} people
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Cooking style
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cookStyles.map((item, i) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setStyle(i)}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-semibold transition",
                          style === i
                            ? "bg-ink text-white"
                            : "border border-[#E8D7B3] bg-white text-ink hover:border-brand-red/30",
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-sm text-muted">Suggested monthly mustard oil</p>
              <p className="mt-2 font-serif text-5xl text-brand-red sm:text-6xl">
                ~{litres}
                <span className="ml-2 text-2xl text-ink">L</span>
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Best match for you: <strong className="text-ink">{packHint}</strong>. Stock once,
                cook for the month — delivered across Haryana.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop?sort=value"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
                >
                  <ShoppingBag size={15} />
                  Shop {packHint}
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    toast(`Pantry note saved: ~${litres}L / month · try ${packHint}`)
                  }
                  className="rounded-full border border-[#E8D7B3] px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand-red/30"
                >
                  Save pantry note
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
