import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blogs | Monika Tadka",
  description: "Stories from the Monika kitchen — oil, food quality, and Indian cooking culture.",
};

const posts = [
  {
    title: "Why seed grade matters before the first press",
    blurb: "A short look at how appearance and moisture shape the oil that reaches your tadka pan.",
    image: "/images/mustard-seeds.png",
    tag: "Quality",
  },
  {
    title: "Mustard, groundnut, sesame — picking the right bottle",
    blurb: "A practical guide to matching Monika oils to everyday Indian recipes.",
    image: "/images/indian-kitchen.png",
    tag: "Kitchen tips",
  },
  {
    title: "From mill line to pantry shelf",
    blurb: "How clean packing and batch identity protect flavour on the way home.",
    image: "/images/oil-extraction.png",
    tag: "Behind the brand",
  },
];

export default function BlogsPage() {
  return (
    <Container className="py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
        Monika Tadka
      </p>
      <h1 className="mt-3 font-serif text-5xl">Blogs</h1>
      <p className="mt-4 max-w-2xl text-muted leading-7">
        Notes from our kitchen and mill — food quality, cooking habits, and the
        little choices that make Monika different.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                {post.tag}
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug">{post.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{post.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
