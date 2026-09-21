"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, Droplets, Flower2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const icons: Array<
  | { src: string; label: string; Icon?: never }
  | { Icon: typeof Droplets; label: string; src?: never }
> = [
  { src: "/images/monika-logo.png", label: "Since 1986" },
  { Icon: Droplets, label: "100% Pure" },
  { Icon: ShieldCheck, label: "Quality Tested" },
  { Icon: Flower2, label: "Authentic Taste" },
  { Icon: BadgeCheck, label: "Rich Aroma" },
];

const banners = [
  {
    kicker: "Since 1986",
    title: "Pure Taste. Pure Tradition. Pure Monika.",
    text: "Natural taste & trusted mustard oil for everyday Indian cooking.",
    cta: "Shop Now",
    href: "/shop",
    poster: "/images/mustard-field.png",
    alt: "Mustard fields with Monika mustard oil",
  },
  {
    kicker: "Family kitchen",
    title: "Fresh Bottles for Every Indian Home",
    text: "Stock your kitchen with family packs and everyday bottles.",
    cta: "Shop Oils",
    href: "/shop",
    poster: "/images/indian-kitchen.png",
    alt: "Indian kitchen with Monika family pack oil",
  },
  {
    kicker: "Kachi Ghani",
    title: "Cold-Pressed Mustard Oil, Fresh Aroma",
    text: "Slow-pressed for the pungent tadka flavour Indian kitchens love.",
    cta: "Shop Mustard Oil",
    href: "/shop?category=mustard",
    poster: "/images/mustard-flowers.png",
    alt: "Mustard flowers with Kachi Ghani bottle",
  },
  {
    kicker: "अच्छा खाओ, अच्छा खिलाओ",
    title: "From Everyday Tadka to Festive Cooking",
    text: "One oil for sabzi, pickle, paratha, and family meals.",
    cta: "Explore Our Oils",
    href: "/shop",
    poster: "/images/food-sabzi.png",
    alt: "Festive cooking with premium Monika oil",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % banners.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  const onTouchStart = useCallback((event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = useCallback((event: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    setIndex((current) =>
      delta < 0 ? (current + 1) % banners.length : (current - 1 + banners.length) % banners.length,
    );
  }, []);

  return (
    <section className="overflow-hidden bg-cream">
      <div className="hidden border-b border-cream-dark bg-white sm:block">
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
                  width={32}
                  height={22}
                  className="h-6 w-auto object-contain"
                />
              ) : item.Icon ? (
                <item.Icon size={18} className="text-[#B51F1F]" />
              ) : null}
              {item.label}
            </div>
          ))}
        </Container>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{
            width: `${banners.length * 100}%`,
            transform: `translateX(-${(index * 100) / banners.length}%)`,
            transitionProperty: "transform",
          }}
        >
          {banners.map((banner, i) => (
            <article
              key={banner.title}
              className="relative h-[340px] shrink-0 overflow-hidden sm:h-[460px] lg:h-[580px]"
              style={{ width: `${100 / banners.length}%` }}
            >
              <Image
                src={banner.poster}
                alt={banner.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/45 to-black/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-end px-4 pb-10 sm:items-center sm:px-10 sm:pb-0 lg:px-14">
                <div className="max-w-[92%] pb-1 sm:max-w-xl lg:max-w-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F6D27A] sm:text-sm sm:tracking-[0.22em]">
                    {banner.kicker}
                  </p>
                  {i === 0 ? (
                    <h1 className="mt-1.5 text-[22px] leading-tight text-white drop-shadow-md sm:mt-3 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                      {banner.title}
                    </h1>
                  ) : (
                    <h2 className="mt-1.5 text-[22px] leading-tight text-white drop-shadow-md sm:mt-3 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                      {banner.title}
                    </h2>
                  )}
                  <p className="mt-2 max-w-lg text-[13px] leading-5 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
                    {banner.text}
                  </p>
                  <Link
                    href={banner.href}
                    className="mt-3 inline-flex rounded-full bg-[#B51F1F] px-4 py-2 text-xs text-white shadow-lg shadow-black/30 transition hover:bg-[#8E1515] sm:mt-7 sm:px-7 sm:py-3 sm:text-sm"
                  >
                    {banner.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5 sm:bottom-5 sm:gap-2">
          {banners.map((banner, i) => (
            <button
              key={banner.title}
              type="button"
              aria-label={`Show banner ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 sm:h-2",
                i === index ? "w-6 bg-white sm:w-8" : "w-1.5 bg-white/40 sm:w-2",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
