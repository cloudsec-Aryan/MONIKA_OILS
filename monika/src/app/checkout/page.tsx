"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";
import { cartSubtotal, formatINR } from "@/lib/utils";

export default function CheckoutPage() {
  const { cart } = useStore();
  const subtotal = cartSubtotal(cart);

  return (
    <Container className="max-w-xl py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
        Checkout preview
      </p>
      <h1 className="mt-3 font-serif text-4xl">We are almost ready to take orders</h1>
      <p className="mt-4 text-muted leading-7">
        This storefront is frontend-only. Cart total {formatINR(subtotal)} is stored
        on your device. Payments, addresses, and order numbers will be added
        when the backend and payment gateway are connected. No card details are
        collected here.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/cart" className="rounded-full border px-5 py-3 text-sm font-semibold">
          Back to cart
        </Link>
        <Link href="/shop" className="rounded-full bg-mustard px-5 py-3 text-sm font-semibold">
          Keep shopping
        </Link>
      </div>
    </Container>
  );
}
