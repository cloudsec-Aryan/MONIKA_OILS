import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <Container className="max-w-2xl py-14">
      <h1 className="font-serif text-4xl">Returns</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        A full return and replacement policy will be added during operations
        setup. Damaged-in-transit packs are expected to be covered. Opened food
        products will follow the final published policy.
      </p>
    </Container>
  );
}
