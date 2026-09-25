"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroBanners as banners } from "@/data/homepage";
import { cn } from "@/lib/utils";

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
    <section className="overflow-hidden">
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
              className="relative h-[min(78vh,640px)] shrink-0 overflow-hidden sm:h-[min(82vh,700px)] lg:h-[min(88vh,780px)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-end px-4 pb-10 pt-28 sm:items-center sm:px-10 sm:pb-0 sm:pt-24 lg:px-14">
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
