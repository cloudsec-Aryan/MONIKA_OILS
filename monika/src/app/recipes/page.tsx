import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Recipes | Monika Tadka — Coming Soon",
  description: "Monika Tadka recipes are coming soon — everyday Indian kitchen ideas with Monika oils.",
};

const recipes = [
  {
    title: "Classic mustard tadka dal",
    blurb: "A bright tempering of cumin, garlic, and Monika mustard oil over everyday dal.",
    image: "/images/food-sabzi.png",
  },
  {
    title: "Crisp pakora evenings",
    blurb: "Groundnut oil for a clean fry and a golden crunch that stays light.",
    image: "/images/food-pakora.png",
  },
  {
    title: "Paratha with a mustard finish",
    blurb: "Brush warm parathas with a whisper of mustard oil for aroma that feels like home.",
    image: "/images/food-paratha.png",
  },
  {
    title: "Season pickle jar",
    blurb: "Bold mustard character for mango and mixed vegetable pickles that last.",
    image: "/images/food-pickle.png",
  },
];

export default function RecipesPage() {
  return (
    <Container className="py-14">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
          Monika Tadka
        </p>
        <span className="rounded-full bg-mustard/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
          Coming soon
        </span>
      </div>
      <h1 className="mt-3 font-serif text-5xl">Recipes</h1>
      <p className="mt-4 max-w-2xl text-muted leading-7">
        Simple plates, honest flavour. Full Monika Tadka recipes are on the way —
        here is a quiet preview of the kitchen ideas we are cooking up.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <article
            key={recipe.title}
            className="relative overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-sm"
          >
            <div className="absolute right-3 top-3 z-10 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
              Preview
            </div>
            <div className="relative aspect-[16/10]">
              <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="font-serif text-2xl">{recipe.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{recipe.blurb}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-cream-dark bg-cream/60 p-6 text-center">
        <p className="text-sm text-muted">Want the full Tadka experience when it launches?</p>
        <Link
          href="/contact"
          className="mt-3 inline-flex rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
        >
          Get in Touch
        </Link>
      </div>
    </Container>
  );
}
