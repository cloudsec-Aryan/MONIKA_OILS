"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const visible = [0, 1, 2].map((offset) => reviews[(index + offset) % reviews.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8E7] via-white to-[#F8E7E4] py-16">
      <div className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-mustard/25 blur-3xl" />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
            Family kitchens across India
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Loved in Indian Kitchens</h2>
          <p className="mt-3 text-sm text-muted">
            Real notes from homes that cook with Monika every day.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {visible.map((review, i) => (
            <blockquote
              key={`${review.id}-${i}`}
              className={cn(
                "relative overflow-hidden rounded-3xl border border-cream-dark/70 bg-white p-6 shadow-[0_16px_40px_rgba(181,31,31,0.08)]",
                i > 0 && "hidden md:block",
              )}
            >
              <Quote className="absolute right-5 top-5 text-brand-red/15" size={42} />
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-muted">{review.city}</p>
                </div>
              </div>
              <div className="mt-3">
                <StarRating rating={review.rating} size={16} />
              </div>
              <p className="mt-4 text-base leading-7 text-ink">“{review.text}”</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-red">
                {review.product}
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((review, i) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Show review from ${review.name}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-7 bg-brand-red" : "w-2 bg-ink/20",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
