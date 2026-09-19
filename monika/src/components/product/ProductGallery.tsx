"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={image + index}
            type="button"
            className={`relative aspect-square overflow-hidden rounded-xl border-2 ${
              active === index ? "border-mustard" : "border-transparent"
            }`}
            onClick={() => setActive(index)}
          >
            <Image src={image} alt={`${name} view ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
