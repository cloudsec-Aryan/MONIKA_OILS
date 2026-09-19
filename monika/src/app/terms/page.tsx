import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <Container className="max-w-2xl py-14">
      <h1 className="font-serif text-4xl">Terms & Conditions</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        Product images and prices on this site are for a frontend demonstration.
        They do not constitute a binding offer to sell until checkout, inventory,
        and legal terms are connected. Use of brand visuals is limited to this
        Monika storefront project.
      </p>
    </Container>
  );
}
