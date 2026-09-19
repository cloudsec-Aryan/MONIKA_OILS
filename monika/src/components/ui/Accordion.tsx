"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: { id: string; title: string; content: React.ReactNode }[];
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-cream-dark overflow-hidden rounded-2xl border border-cream-dark bg-white">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg font-semibold text-ink">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "shrink-0 text-muted transition",
                  isOpen && "rotate-180",
                )}
                size={18}
              />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-muted">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
