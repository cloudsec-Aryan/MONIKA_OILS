"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useStore } from "@/context/StoreProvider";
import { cartLineTotal, cartSubtotal, formatINR, getProduct, getVariant } from "@/lib/utils";
import { QuantitySelector } from "@/components/ui/QuantitySelector";

export function CartDrawer() {
  const { cart, drawerOpen, closeDrawer, lastAdded, setQuantity, removeFromCart } =
    useStore();
  const subtotal = cartSubtotal(cart);

  return (
    <div
      className={`fixed inset-0 z-50 ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!drawerOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-ink/40 transition ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeDrawer}
        aria-label="Close cart"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(420px,100%)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream-dark px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Added to your cart ✓
            </p>
            <h2 className="font-serif text-2xl">Your Basket</h2>
          </div>
          <button type="button" onClick={closeDrawer} aria-label="Close cart">
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          {lastAdded ? (
            <p className="mb-4 rounded-xl bg-cream px-3 py-2 text-sm">
              Latest: {getProduct(lastAdded.productId)?.name}
            </p>
          ) : null}
          {cart.length === 0 ? (
            <p className="py-12 text-center text-muted">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;
                const variant = getVariant(product, item.weight);
                return (
                  <li key={`${item.productId}-${item.weight}`} className="flex gap-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={72}
                      height={72}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{product.name}</p>
                      <p className="text-xs text-muted">{item.weight}</p>
                      <p className="text-sm font-semibold text-brand-red">
                        {formatINR(cartLineTotal(item))}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(value) =>
                            setQuantity(item.productId, item.weight, value)
                          }
                        />
                        <button
                          type="button"
                          className="text-xs text-muted underline"
                          onClick={() => removeFromCart(item.productId, item.weight)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="text-sm">{formatINR(variant.price)}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="border-t border-cream-dark p-5">
          <div className="mb-4 flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">{formatINR(subtotal)}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/cart"
              onClick={closeDrawer}
              className="rounded-full border border-ink px-4 py-3 text-center text-sm font-semibold"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="rounded-full bg-brand-red px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
