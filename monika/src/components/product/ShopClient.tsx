"use client";

import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { categories, productTypes, products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/types";

type SortKey = "popular" | "newest" | "price-asc" | "price-desc" | "rating";

export function ShopClient() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const [type, setType] = useState("all");
  const [weight, setWeight] = useState("all");
  const [rating, setRating] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState<SortKey>("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list: Product[] = products.filter((product) => {
      const matchesQuery = [product.name, product.shortDescription]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "all" || product.category === category;
      const matchesType = type === "all" || product.productType === type;
      const matchesWeight =
        weight === "all" || product.variants.some((variant) => variant.weight === weight);
      const price = product.variants[0].price;
      const disc = product.variants[0].discount;
      return (
        matchesQuery &&
        matchesCategory &&
        matchesType &&
        matchesWeight &&
        product.rating >= rating &&
        disc >= discount &&
        price <= maxPrice
      );
    });

    list = [...list].sort((a, b) => {
      if (sort === "newest") return Number(b.newest) - Number(a.newest);
      if (sort === "price-asc") return a.variants[0].price - b.variants[0].price;
      if (sort === "price-desc") return b.variants[0].price - a.variants[0].price;
      if (sort === "rating") return b.rating - a.rating;
      return (b.popular ?? 0) - (a.popular ?? 0);
    });
    return list;
  }, [query, category, type, weight, rating, discount, maxPrice, sort]);

  const filters = (
    <div className="space-y-5 text-sm">
      <label className="block">
        <span className="font-semibold">Search products</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-2 w-full rounded-xl border border-cream-dark px-3 py-2"
          placeholder="Mustard, combo, sesame..."
        />
      </label>
      <label className="block">
        <span className="font-semibold">Category</span>
        <select
          className="mt-2 w-full rounded-xl border border-cream-dark px-3 py-2"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="all">All</option>
          {categories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="font-semibold">Product Type</span>
        <select
          className="mt-2 w-full rounded-xl border border-cream-dark px-3 py-2"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="all">All</option>
          {productTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="font-semibold">Weight</span>
        <select
          className="mt-2 w-full rounded-xl border border-cream-dark px-3 py-2"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        >
          <option value="all">All sizes</option>
          <option>500ml</option>
          <option>1L</option>
          <option>2L</option>
          <option>5L</option>
        </select>
      </label>
      <label className="block">
        <span className="font-semibold">Max price: ₹{maxPrice}</span>
        <input
          type="range"
          min={100}
          max={2000}
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          className="mt-3 w-full"
        />
      </label>
      <label className="block">
        <span className="font-semibold">Minimum rating</span>
        <select
          className="mt-2 w-full rounded-xl border border-cream-dark px-3 py-2"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          <option value={0}>Any</option>
          <option value={4}>4+</option>
          <option value={4.5}>4.5+</option>
          <option value={4.8}>4.8+</option>
        </select>
      </label>
      <label className="block">
        <span className="font-semibold">Minimum discount</span>
        <select
          className="mt-2 w-full rounded-xl border border-cream-dark px-3 py-2"
          value={discount}
          onChange={(event) => setDiscount(Number(event.target.value))}
        >
          <option value={0}>Any</option>
          <option value={15}>15%+</option>
          <option value={18}>18%+</option>
          <option value={20}>20%+</option>
        </select>
      </label>
    </div>
  );

  return (
    <Container className="py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-4xl">Shop</h1>
          <p className="mt-2 text-muted">Mustard oil and kitchen companions, ready for the pantry.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-cream-dark px-4 py-2 text-sm lg:hidden"
            onClick={() => setFiltersOpen(true)}
          >
            <Filter size={16} /> Filters
          </button>
          <select
            className="rounded-full border border-cream-dark px-4 py-2 text-sm"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
          >
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Best Rated</option>
          </select>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden rounded-3xl border border-cream-dark bg-white p-5 lg:block">
          {filters}
        </aside>
        <ProductGrid products={filtered} />
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden ${filtersOpen ? "" : "pointer-events-none"}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-ink/40 ${filtersOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-auto rounded-t-3xl bg-white p-5 transition ${
            filtersOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <X />
            </button>
          </div>
          {filters}
        </div>
      </div>
    </Container>
  );
}
