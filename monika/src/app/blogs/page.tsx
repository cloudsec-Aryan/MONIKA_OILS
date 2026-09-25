import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blogs | Monika Tadka — Coming Soon",
  description: "Monika Tadka blogs are coming soon — kitchen stories and quality notes.",
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
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
          Monika Tadka
        </p>
        <span className="rounded-full bg-mustard/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
          Coming soon
        </span>
      </div>
      <h1 className="mt-3 font-serif text-5xl">Blogs</h1>
      <p className="mt-4 max-w-2xl text-muted leading-7">
        Notes from our kitchen and mill — food quality, cooking habits, and the little choices that
        make Monika different. Full posts launch with Monika Tadka.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="relative overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-sm"
          >
            <div className="absolute right-3 top-3 z-10 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
              Preview
            </div>
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

      <div className="mt-10 rounded-3xl border border-cream-dark bg-cream/60 p-6 text-center">
        <p className="text-sm text-muted">Get notified when Tadka blogs go live.</p>
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
