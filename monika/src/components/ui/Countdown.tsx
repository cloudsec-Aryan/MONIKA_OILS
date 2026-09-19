"use client";

import { useEffect, useState } from "react";
import { getOfferDeadline } from "@/lib/utils";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Countdown() {
  const [parts, setParts] = useState({ d: 2, h: 14, m: 36, s: 25 });

  useEffect(() => {
    const deadline = getOfferDeadline();
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setParts({ d, h, m, s });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells = [
    [pad(parts.d), "Days"],
    [pad(parts.h), "Hrs"],
    [pad(parts.m), "Min"],
    [pad(parts.s), "Sec"],
  ];

  return (
    <div className="flex items-center gap-2" aria-label="Offer countdown">
      {cells.map(([value, label], index) => (
        <div key={label} className="flex items-center gap-2">
          <div className="min-w-14 rounded-xl bg-white/15 px-3 py-2 text-center backdrop-blur">
            <div className="font-serif text-2xl font-semibold leading-none text-white">
              {value}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
              {label}
            </div>
          </div>
          {index < cells.length - 1 ? (
            <span className="text-lg font-semibold text-white/70">:</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
