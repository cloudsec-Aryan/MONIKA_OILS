"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, Zap } from "lucide-react";
import type { Product } from "@/types";
import { formatINR, getVariant } from "@/lib/utils";
import { StarRating } from "@/components/ui/StarRating";
import { useStore } from "@/context/StoreProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const router = useRouter();
  const variant = getVariant(product, product.variants[0].weight);
  const wished = wishlist.includes(product.id);
  const weight = product.variants[0].weight;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8D7B3] bg-white shadow-[0_10px_28px_rgba(181,31,31,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-brand-red/25 hover:shadow-[0_22px_50px_rgba(181,31,31,0.12)] sm:rounded-3xl">
      <Link
        href={`/product/${product.slug}`}
        className="relative block overflow-hidden bg-[linear-gradient(180deg,#fff8e7_0%,#fff_70%)]"
      >
        <div className="relative mx-auto aspect-square w-full max-w-[220px] sm:max-w-none">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-105 sm:p-5"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <span className="absolute left-2 top-2 rounded-full bg-ink/85 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur sm:left-3 sm:top-3 sm:text-[10px]">
          Haryana delivery
        </span>
      </Link>
      <button
        type="button"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition hover:scale-105 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
        onClick={() => toggleWishlist(product.id)}
      >
        <Heart
          size={15}
          className={wished ? "fill-brand-red text-brand-red" : "text-ink"}
        />
      </button>
      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-1.5 sm:px-4 sm:pb-4 sm:pt-2">
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-[2.4em] text-[13px] font-semibold leading-snug text-ink sm:min-h-0 sm:text-[17px]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 hidden text-sm leading-6 text-muted sm:block">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[10px] text-muted sm:text-xs">{product.rating}</span>
        </div>
        <div className="mt-1.5 flex flex-wrap items-baseline gap-1.5 sm:mt-2">
          <span className="text-[15px] font-bold text-brand-red sm:text-xl">
            {formatINR(variant.price)}
          </span>
          <span className="text-[11px] text-muted line-through sm:text-sm">
            {formatINR(variant.mrp)}
          </span>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-1.5 pt-2.5 sm:gap-2 sm:pt-4">
          <button
            type="button"
            className="inline-flex min-h-9 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-mustard px-1.5 text-[11px] font-semibold text-ink shadow-sm shadow-mustard/30 transition hover:bg-mustard-deep sm:min-h-11 sm:gap-1.5 sm:px-3 sm:text-sm"
            onClick={() => addToCart(product.id, weight)}
          >
            <ShoppingBag size={13} />
            Add
          </button>
          <button
            type="button"
            className="inline-flex min-h-9 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-brand-red px-1.5 text-[11px] font-semibold text-white shadow-sm shadow-brand-red/30 transition hover:bg-brand-red-dark sm:min-h-11 sm:gap-1.5 sm:px-3 sm:text-sm"
            onClick={() => {
              addToCart(product.id, weight);
              router.push("/checkout");
            }}
          >
            <Zap size={13} fill="currentColor" />
            Buy
          </button>
        </div>
      </div>
    </article>
  );
}
