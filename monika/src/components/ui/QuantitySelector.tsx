"use client";

import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-cream-dark bg-white">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex h-9 w-9 items-center justify-center text-ink transition hover:text-brand-red"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus size={14} />
      </button>
      <span className="min-w-6 text-center text-sm font-semibold">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="flex h-9 w-9 items-center justify-center text-ink transition hover:text-brand-red"
        onClick={() => onChange(value + 1)}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
