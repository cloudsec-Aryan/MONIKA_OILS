import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Recipes | Monika Tadka",
  description: "Everyday Indian recipes and tadka ideas with Monika oils and foods.",
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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
        Monika Tadka
      </p>
      <h1 className="mt-3 font-serif text-5xl">Recipes</h1>
      <p className="mt-4 max-w-2xl text-muted leading-7">
        Simple plates, honest flavour. These kitchen ideas show how Monika oils
        lift everyday Indian cooking.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <article
            key={recipe.title}
            className="overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-sm"
          >
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
    </Container>
  );
}
