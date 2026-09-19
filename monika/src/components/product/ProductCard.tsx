"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";
import { formatINR, getVariant } from "@/lib/utils";
import { StarRating } from "@/components/ui/StarRating";
import { useStore } from "@/context/StoreProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const router = useRouter();
  const [weight, setWeight] = useState(product.variants[0].weight);
  const variant = getVariant(product, weight);
  const wished = wishlist.includes(product.id);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark/80 bg-white shadow-[0_8px_30px_rgba(36,36,36,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(36,36,36,0.08)]">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          {variant.discount}% OFF
        </span>
      </Link>
      <button
        type="button"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:scale-105"
        onClick={() => toggleWishlist(product.id)}
      >
        <Heart
          size={16}
          className={wished ? "fill-brand-red text-brand-red" : "text-ink"}
        />
      </button>
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif text-base font-semibold leading-snug text-ink sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-xs text-muted sm:text-sm">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted">{product.rating}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="text-lg font-semibold text-brand-red">
            {formatINR(variant.price)}
          </span>
          <span className="text-sm text-muted line-through">
            {formatINR(variant.mrp)}
          </span>
        </div>
        <label className="mt-3 text-[11px] font-medium uppercase tracking-wider text-muted">
          Weight
          <select
            className="mt-1 w-full rounded-lg border border-cream-dark bg-cream/40 px-2 py-1.5 text-sm text-ink outline-none focus:border-mustard"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          >
            {product.variants.map((item) => (
              <option key={item.weight} value={item.weight}>
                {item.weight}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="rounded-full bg-mustard px-3 py-2 text-xs font-semibold text-ink transition hover:bg-mustard-deep sm:text-sm"
            onClick={() => addToCart(product.id, weight)}
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="rounded-full bg-brand-red px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-red-dark sm:text-sm"
            onClick={() => {
              addToCart(product.id, weight);
              router.push("/checkout");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
