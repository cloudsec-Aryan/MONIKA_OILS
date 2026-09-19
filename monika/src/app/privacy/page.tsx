import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Container className="max-w-2xl py-14">
      <h1 className="font-serif text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        This preview storefront keeps cart and wishlist data in your browser’s
        localStorage. Contact form submissions are not sent to a server. A
        complete privacy notice will accompany accounts, orders, and analytics
        when those systems go live.
      </p>
    </Container>
  );
}
