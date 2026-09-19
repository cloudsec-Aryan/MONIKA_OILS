import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const dishes = [
  { src: "/images/food-pakora.png", alt: "Crispy Indian pakora" },
  { src: "/images/food-paratha.png", alt: "Aloo paratha with pickle" },
  { src: "/images/food-pickle.png", alt: "Traditional Indian pickles" },
  { src: "/images/food-sabzi.png", alt: "Home-style sabzi" },
  { src: "/images/food-fish-curry.png", alt: "Mustard fish curry" },
  { src: "/images/indian-kitchen.png", alt: "Traditional Indian cooking" },
];

export function CookingSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl">Made for the Taste of India</h2>
            <p className="mt-4 max-w-md text-muted leading-7">
              From everyday tadka to traditional recipes, bring authentic mustard flavour to your kitchen.
            </p>
            <Link
              href="/shop?category=mustard"
              className="mt-6 inline-flex rounded-full bg-mustard px-6 py-3 text-sm font-semibold text-ink"
            >
              Shop Mustard Oil
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {dishes.map((dish) => (
              <div key={dish.src} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={dish.src} alt={dish.alt} fill className="object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
