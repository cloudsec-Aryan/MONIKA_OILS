"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { useStore } from "@/context/StoreProvider";
import { formatINR, getVariant } from "@/lib/utils";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products.filter((product) =>
      [product.name, product.shortDescription, product.category].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close search"
        onClick={() => setSearchOpen(false)}
      />
      <div className="relative mx-auto mt-16 w-[min(640px,calc(100%-2rem))] overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-cream-dark px-4 py-3">
          <Search size={18} className="text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search mustard oil, combos, sesame..."
            className="w-full bg-transparent text-sm outline-none"
          />
          <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <ul className="max-h-96 overflow-auto p-2">
          {results.map((product) => {
            const variant = getVariant(product);
            return (
              <li key={product.id}>
                <Link
                  href={`/product/${product.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-3 rounded-2xl p-2 hover:bg-cream"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-medium">{product.name}</p>
                    <p className="text-sm text-brand-red">{formatINR(variant.price)}</p>
                  </div>
                </Link>
              </li>
            );
          })}
          {!results.length ? (
            <li className="px-4 py-8 text-center text-sm text-muted">
              No matching products.
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
