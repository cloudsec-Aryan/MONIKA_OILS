"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, X } from "lucide-react";
import { useStore } from "@/context/StoreProvider";
import { cn } from "@/lib/utils";

const bottles = [
  {
    src: "/images/product-kachi-ghani.png",
    alt: "Kachi Ghani bottle",
    className: "left-5 top-7 z-[1] h-[92px] w-[70px] sm:h-[108px] sm:w-[82px]",
  },
  {
    src: "/images/hero-bottle.png",
    alt: "Monika mustard oil",
    className: "left-1/2 top-3 z-[2] h-[112px] w-[86px] -translate-x-1/2 sm:h-[128px] sm:w-[98px]",
  },
  {
    src: "/images/product-premium.png",
    alt: "Premium Monika bottle",
    className: "right-5 top-8 z-[1] h-[92px] w-[70px] sm:h-[108px] sm:w-[82px]",
  },
];

export function QueryPopup() {
  const { toast } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  return (
    <div className="pointer-events-none fixed right-0 top-[40%] z-[45] -translate-y-1/2 lg:top-1/2">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Have a query"
        onClick={() => setOpen(true)}
        className={cn(
          "pointer-events-auto flex h-[148px] w-9 items-center justify-center rounded-l-xl bg-brand-red text-[11px] font-semibold tracking-[0.18em] text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark",
          open && "invisible",
        )}
      >
        <span className="rotate-180 [writing-mode:vertical-rl]">HAVE A QUERY?</span>
      </button>

      <div
        className={cn(
          "absolute right-0 top-1/2 w-[min(92vw,320px)] -translate-y-1/2 overflow-hidden rounded-l-3xl bg-white shadow-[0_18px_50px_rgba(36,36,36,0.22)] transition-all duration-300 sm:right-3 sm:rounded-3xl",
          open
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-8 opacity-0",
        )}
      >
        <div className="relative h-[150px] overflow-hidden bg-gradient-to-b from-[#FFF4DC] via-[#F3E6C4] to-white">
          <p className="absolute left-4 top-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            Kachi Ghani
          </p>
          <button
            type="button"
            aria-label="Close query popup"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm"
          >
            <X size={16} />
          </button>
          {bottles.map((bottle) => (
            <Image
              key={bottle.src}
              src={bottle.src}
              alt={bottle.alt}
              width={120}
              height={160}
              className={cn("absolute object-contain drop-shadow-md", bottle.className)}
            />
          ))}
        </div>

        <form
          className="space-y-2.5 px-4 pb-4 pt-2"
          onSubmit={(event) => {
            event.preventDefault();
            toast("Query received. Our kitchen desk will get back to you.");
            setForm({ name: "", phone: "", message: "" });
            setOpen(false);
          }}
        >
          <div>
            <h3 className="text-lg font-semibold text-ink">Have a query?</h3>
            <p className="text-xs leading-5 text-muted">
              Ask about Kachi Ghani, pack sizes, or any Monika bottle.
            </p>
          </div>
          <input
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-cream-dark bg-cream/40 px-3 py-2.5 text-sm outline-none focus:border-brand-red"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <input
            required
            type="tel"
            placeholder="Phone number"
            className="w-full rounded-xl border border-cream-dark bg-cream/40 px-3 py-2.5 text-sm outline-none focus:border-brand-red"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
          <textarea
            required
            rows={3}
            placeholder="Your question"
            className="w-full resize-none rounded-xl border border-cream-dark bg-cream/40 px-3 py-2.5 text-sm outline-none focus:border-brand-red"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
          <button
            type="submit"
            className="w-full rounded-full bg-brand-red py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-red/25"
          >
            Send query
          </button>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/919000000000"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <a
              href="tel:+919000000000"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-cream-dark px-3 py-2 text-xs font-semibold text-ink"
            >
              <Phone size={14} />
              Call
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
