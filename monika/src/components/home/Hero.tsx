import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Droplets, Flower2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const icons: Array<
  | { src: string; label: string; Icon?: never }
  | { Icon: typeof Droplets; label: string; src?: never }
> = [
  { src: "/images/favicon-m.png", label: "MONIKA" },
  { Icon: Droplets, label: "100% Pure" },
  { Icon: ShieldCheck, label: "Quality Tested" },
  { Icon: Flower2, label: "Authentic Taste" },
  { Icon: BadgeCheck, label: "Rich Aroma" },
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="bg-[#B51F1F] px-4 py-2.5 text-center text-sm text-white">
        🌿 100% Pure Mustard Oil | Fresh & Authentic | Limited Time Offer
      </div>
      <div className="border-b border-cream-dark bg-white">
        <Container className="flex items-center justify-center gap-4 overflow-x-auto py-3 no-scrollbar sm:gap-8">
          {icons.map((item) => (
            <div
              key={item.label}
              className="flex shrink-0 items-center gap-2 text-xs text-ink sm:text-sm"
            >
              {"src" in item && item.src ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : item.Icon ? (
                <item.Icon size={18} className="text-[#B51F1F]" />
              ) : null}
              {item.label}
            </div>
          ))}
        </Container>
      </div>
      <Container className="grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-sm text-[#B51F1F]">Indian edible oils</p>
          <h1 className="mt-3 text-3xl leading-tight text-ink sm:text-5xl">
            Pure Taste. Pure Tradition. Pure Monika.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            Premium mustard oil crafted for authentic Indian cooking.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-[#B51F1F] px-6 py-3 text-sm text-white"
            >
              Shop Now
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-ink bg-white px-6 py-3 text-sm text-ink"
            >
              Explore Our Oils
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero-bottle.png"
              alt="Monika mustard oil bottle with mustard seeds and flowers"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
