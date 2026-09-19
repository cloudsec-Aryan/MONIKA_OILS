import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopClient } from "@/components/product/ShopClient";

export const metadata: Metadata = {
  title: "Shop Mustard Oil",
  description:
    "Browse Monika mustard oil, groundnut oil, sesame oil, and kitchen combos for Indian cooking.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading shop...</div>}>
      <ShopClient />
    </Suspense>
  );
}
