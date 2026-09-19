"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";
import { formatINR, getVariant } from "@/lib/utils";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, moveWishlistToCart, hydrated } = useStore();
  const items = products.filter((product) => wishlist.includes(product.id));

  return (
    <Container className="py-10">
      <h1 className="font-serif text-4xl">Wishlist</h1>
      {!hydrated ? (
        <p className="mt-10 text-sm text-muted">Loading your saved bottles...</p>
      ) : items.length === 0 ? (
        <div className="mt-12 rounded-3xl bg-cream px-6 py-20 text-center">
          <p className="font-serif text-2xl">Your wishlist is waiting for something delicious.</p>
          <Link href="/shop" className="mt-4 inline-block text-sm font-semibold text-brand-red">
            Browse oils
          </Link>
        </div>
      ) : (
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((product) => {
            const variant = getVariant(product);
            return (
              <li key={product.id} className="flex gap-4 rounded-2xl border border-cream-dark bg-white p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <Link href={`/product/${product.slug}`} className="font-serif text-xl">
                    {product.name}
                  </Link>
                  <p className="text-brand-red">{formatINR(variant.price)}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="rounded-full bg-mustard px-4 py-2 text-xs font-semibold"
                      onClick={() => moveWishlistToCart(product.id)}
                    >
                      Move to cart
                    </button>
                    <button
                      type="button"
                      className="text-xs underline"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
}
