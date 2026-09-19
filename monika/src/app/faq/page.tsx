import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about Monika mustard oil, pack sizes, storage, and the upcoming checkout.",
};

export default function FaqPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="font-serif text-5xl">FAQ</h1>
      <p className="mt-4 text-muted">
        Checkout, payments, and final policies will be confirmed when the backend is connected.
      </p>
      <div className="mt-8">
        <Accordion
          items={faqs.map((faq) => ({
            id: faq.id,
            title: faq.question,
            content: faq.answer,
          }))}
        />
      </div>
    </Container>
  );
}
