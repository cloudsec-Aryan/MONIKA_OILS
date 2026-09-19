import { products } from "@/data/products";
import type { CartItem, Product, ProductVariant } from "@/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getVariant(
  product: Product,
  weight?: string,
): ProductVariant {
  return (
    product.variants.find((variant) => variant.weight === weight) ??
    product.variants[0]
  );
}

export function cartLineTotal(item: CartItem) {
  const product = getProduct(item.productId);
  if (!product) return 0;
  return getVariant(product, item.weight).price * item.quantity;
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function cartSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + cartLineTotal(item), 0);
}

export function cartMrp(items: CartItem[]) {
  return items.reduce((sum, item) => {
    const product = getProduct(item.productId);
    if (!product) return sum;
    return sum + getVariant(product, item.weight).mrp * item.quantity;
  }, 0);
}

export const COUPONS: Record<
  string,
  { label: string; type: "percent" | "flat" | "delivery"; value: number }
> = {
  MONIKA10: { label: "10% extra kitchen saving", type: "percent", value: 10 },
  WELCOME50: { label: "₹50 welcome off", type: "flat", value: 50 },
  FAMILY: { label: "Complimentary delivery", type: "delivery", value: 0 },
};

export function getOfferDeadline() {
  const key = "monika-offer-deadline";
  if (typeof window === "undefined") {
    return Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000;
  }
  const stored = window.localStorage.getItem(key);
  if (stored) return Number(stored);
  const deadline = Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000;
  window.localStorage.setItem(key, String(deadline));
  return deadline;
}
