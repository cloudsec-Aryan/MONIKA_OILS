import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <Container className="max-w-2xl py-14">
      <h1 className="font-serif text-4xl">Shipping</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        Dispatch partners, serviceable pin codes, and delivery charges will be
        published with backend integration. This page is a placeholder so the
        storefront navigation is complete. Sample carts may show a small
        delivery estimate or free delivery over a dummy threshold.
      </p>
    </Container>
  );
}
