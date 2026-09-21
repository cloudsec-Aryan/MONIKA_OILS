import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";

export function FaqPreview() {
  return (
    <section className="hidden bg-cream/70 py-16 lg:block">
      <Container className="max-w-3xl">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Questions, answered</h2>
        <div className="mt-8">
          <Accordion
            items={faqs.slice(0, 5).map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
