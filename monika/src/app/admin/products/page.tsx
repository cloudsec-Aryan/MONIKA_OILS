"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel, StatusPill } from "@/components/admin/AdminUi";
import { products } from "@/data/products";

export default function AdminProductsPage() {
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((product) =>
      [product.name, product.category, product.productType].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Catalog</p>
            <h2 className="mt-1 text-2xl font-semibold">Products</h2>
            <p className="mt-1 text-sm text-muted">
              Frontend preview of the live Monika oils catalog.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setToast("Add product form will connect to backend later.");
              window.setTimeout(() => setToast(""), 2500);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-red/25"
          >
            <Plus size={16} />
            Add product
          </button>
        </div>

        <AdminPanel
          title={`${filtered.length} products`}
          action={
            <label className="flex items-center gap-2 rounded-full border border-cream-dark bg-cream/50 px-3 py-2 text-sm">
              <Search size={14} className="text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products"
                className="w-40 bg-transparent outline-none sm:w-56"
              />
            </label>
          }
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-xs uppercase tracking-[0.12em] text-muted">
                  <th className="pb-3 pr-4 font-semibold">Product</th>
                  <th className="pb-3 pr-4 font-semibold">Category</th>
                  <th className="pb-3 pr-4 font-semibold">Price</th>
                  <th className="pb-3 pr-4 font-semibold">Rating</th>
                  <th className="pb-3 font-semibold">Flags</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr key={product.id} className="border-b border-cream-dark/60 last:border-0">
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-cream">
                          <Image
                            src={product.image}
                            alt=""
                            fill
                            className="object-contain p-1"
                            sizes="48px"
                          />
                        </span>
                        <div>
                          <p className="font-medium text-ink">{product.name}</p>
                          <p className="text-xs text-muted">{product.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 pr-4 capitalize text-muted">{product.category}</td>
                    <td className="py-3.5 pr-4 font-medium">
                      ₹{product.variants[0].price}
                      <span className="ml-1 text-xs text-muted">/ {product.variants[0].weight}</span>
                    </td>
                    <td className="py-3.5 pr-4">{product.rating}</td>
                    <td className="py-3.5">
                      <div className="flex flex-wrap gap-1.5">
                        {product.featured ? <StatusPill status="Featured" /> : null}
                        {product.bestseller ? <StatusPill status="Active" /> : null}
                        {!product.featured && !product.bestseller ? (
                          <StatusPill status="Live" />
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminPanel>

        {toast ? (
          <div className="fixed bottom-6 right-6 z-50 rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lg">
            {toast}
          </div>
        ) : null}
      </div>
    </AdminShell>
  );
}
