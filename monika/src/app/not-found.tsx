import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-3 text-muted">This bottle is not on the shelf yet.</p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-brand-red">
        Back home
      </Link>
    </Container>
  );
}
