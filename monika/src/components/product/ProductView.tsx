"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { ProductGallery } from "@/components/product/ProductGallery";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Accordion } from "@/components/ui/Accordion";
import { StarRating } from "@/components/ui/StarRating";
import { formatINR, getVariant } from "@/lib/utils";
import { useStore } from "@/context/StoreProvider";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export function ProductView({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [weight, setWeight] = useState(product.variants[0].weight);
  const [qty, setQty] = useState(1);
  const variant = getVariant(product, weight);
  const related = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <Container className="py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.gallery} name={product.name} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
            {product.shortDescription}
          </p>
          <h1 className="mt-3 font-serif text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted">({product.reviews} reviews)</span>
          </div>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-semibold text-brand-red">
              {formatINR(variant.price)}
            </span>
            <span className="text-muted line-through">MRP {formatINR(variant.mrp)}</span>
            <span className="rounded-full bg-mustard px-2 py-0.5 text-xs font-semibold">
              {variant.discount}% OFF
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-muted">{product.description}</p>
          <div className="mt-6">
            <p className="text-sm font-semibold">Weight selection</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((item) => (
                <button
                  key={item.weight}
                  type="button"
                  onClick={() => setWeight(item.weight)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    weight === item.weight
                      ? "bg-ink text-white"
                      : "border border-cream-dark bg-white"
                  }`}
                >
                  {item.weight}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold">Quantity</p>
            <div className="mt-2">
              <QuantitySelector value={qty} onChange={setQty} />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-mustard px-6 text-sm font-semibold text-ink shadow-md shadow-mustard/30 transition hover:bg-mustard-deep"
              onClick={() => addToCart(product.id, weight, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-sm font-semibold text-white shadow-md shadow-brand-red/30 transition hover:bg-brand-red-dark"
              onClick={() => {
                addToCart(product.id, weight, qty);
                router.push("/checkout");
              }}
            >
              Buy Now
            </button>
            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-cream-dark bg-white px-5 text-sm sm:col-span-2"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart
                size={16}
                className={
                  wishlist.includes(product.id)
                    ? "fill-brand-red text-brand-red"
                    : ""
                }
              />
              Add to Wishlist
            </button>
          </div>
          <div className="mt-8">
            <Accordion
              items={[
                { id: "h", title: "Product Highlights", content: (
                  <ul className="list-disc pl-4">
                    {product.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) },
                { id: "i", title: "Ingredients", content: product.ingredients },
                { id: "u", title: "How to Use", content: product.howToUse },
                { id: "s", title: "Storage Instructions", content: product.storage },
                { id: "p", title: "Product Information", content: product.information },
                { id: "sh", title: "Shipping Information", content: product.shipping },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="mb-6 font-serif text-3xl">You may also like</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
