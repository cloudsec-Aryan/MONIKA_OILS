import { Container } from "@/components/ui/Container";

const steps = [
  ["01", "Carefully Selected Seeds"],
  ["02", "Quality Processing"],
  ["03", "Quality Inspection"],
  ["04", "Hygienic Packaging"],
  ["05", "Delivered Fresh"],
];

export function SeedToBottle() {
  return (
    <section className="bg-ink py-16 text-white">
      <Container>
        <h2 className="text-center font-serif text-3xl sm:text-4xl">From Seed to Bottle</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          A simple path from the field to your kadhai, with attention at every stage.
        </p>
        <ol className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-start">
          {steps.map(([num, title], index) => (
            <li key={num} className="relative flex-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="font-serif text-3xl text-mustard">{num}</span>
                <h3 className="mt-3 font-serif text-xl">{title}</h3>
              </div>
              {index < steps.length - 1 ? (
                <div className="absolute right-[-12px] top-10 hidden h-px w-6 bg-mustard lg:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
