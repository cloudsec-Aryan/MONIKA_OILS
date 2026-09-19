"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { useStore } from "@/context/StoreProvider";
import {
  cartMrp,
  cartSubtotal,
  COUPONS,
  formatINR,
  getProduct,
  getVariant,
} from "@/lib/utils";

export default function CartPage() {
  const { cart, setQuantity, removeFromCart, toast, hydrated } = useStore();
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const subtotal = cartSubtotal(cart);
  const mrp = cartMrp(cart);
  const productDiscount = mrp - subtotal;
  const coupon = applied ? COUPONS[applied] : null;
  let extra = 0;
  let delivery = subtotal >= 999 || coupon?.type === "delivery" ? 0 : 49;
  if (coupon?.type === "percent") extra = Math.round(subtotal * (coupon.value / 100));
  if (coupon?.type === "flat") extra = coupon.value;
  if (coupon?.type === "delivery") delivery = 0;
  const total = Math.max(0, subtotal - extra + delivery);

  return (
    <Container className="py-10">
      <h1 className="font-serif text-4xl">Cart</h1>
      { !hydrated ? (
        <p className="mt-10 text-sm text-muted">Loading your basket...</p>
      ) : cart.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-cream px-6 py-16 text-center">
          <p className="text-muted">Your cart is empty. Add a bottle to get started.</p>
          <Link href="/shop" className="mt-4 inline-block font-semibold text-brand-red">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <ul className="space-y-4">
            {cart.map((item) => {
              const product = getProduct(item.productId);
              if (!product) return null;
              const variant = getVariant(product, item.weight);
              return (
                <li
                  key={`${item.productId}-${item.weight}`}
                  className="flex gap-4 rounded-2xl border border-cream-dark bg-white p-4"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <Link href={`/product/${product.slug}`} className="font-serif text-xl">
                      {product.name}
                    </Link>
                    <p className="text-sm text-muted">{item.weight}</p>
                    <p className="font-semibold text-brand-red">{formatINR(variant.price)}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(value) => setQuantity(item.productId, item.weight, value)}
                      />
                      <button
                        type="button"
                        className="text-sm text-muted underline"
                        onClick={() => removeFromCart(item.productId, item.weight)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <aside className="h-fit rounded-3xl border border-cream-dark bg-white p-6">
            <h2 className="font-serif text-2xl">Order Summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>{formatINR(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-brand-red">
                <dt>Discount</dt>
                <dd>-{formatINR(productDiscount + extra)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Delivery</dt>
                <dd>{delivery === 0 ? "Free" : formatINR(delivery)}</dd>
              </div>
              <div className="flex justify-between border-t border-cream-dark pt-3 text-base font-semibold">
                <dt>Total</dt>
                <dd>{formatINR(total)}</dd>
              </div>
            </dl>
            <div className="mt-4 flex gap-2">
              <input
                value={code}
                onChange={(event) => setCode(event.target.value.toUpperCase())}
                placeholder="Enter coupon code"
                className="flex-1 rounded-full border border-cream-dark px-4 py-2 text-sm"
              />
              <button
                type="button"
                className="rounded-full bg-ink px-4 py-2 text-sm text-white"
                onClick={() => {
                  const next = COUPONS[code];
                  if (!next) {
                    toast("Coupon not recognised");
                    return;
                  }
                  setApplied(code);
                  toast(next.label);
                }}
              >
                Apply
              </button>
            </div>
            <p className="mt-2 text-xs text-muted">Try MONIKA10, WELCOME50, or FAMILY.</p>
            <Link
              href="/checkout"
              className="mt-5 block rounded-full bg-brand-red py-3 text-center text-sm font-semibold text-white"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      )}
    </Container>
  );
}
