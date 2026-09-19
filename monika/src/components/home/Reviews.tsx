"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section className="bg-cream py-16">
      <Container className="max-w-3xl text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">Loved in Indian Kitchens</h2>
        <blockquote className="mt-10 rounded-3xl bg-white px-8 py-10 shadow-sm">
          <StarRating rating={review.rating} size={18} />
          <p className="mt-5 font-serif text-2xl leading-snug text-ink">
            “{review.text}”
          </p>
          <footer className="mt-6 text-sm">
            <strong>{review.name}</strong>
            <span className="text-muted"> · {review.city}</span>
            <div className="mt-1 text-xs text-muted">{review.product}</div>
          </footer>
        </blockquote>
        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-full border border-cream-dark bg-white p-2"
            aria-label="Previous review"
            onClick={() => setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="rounded-full border border-cream-dark bg-white p-2"
            aria-label="Next review"
            onClick={() => setIndex((current) => (current + 1) % reviews.length)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
