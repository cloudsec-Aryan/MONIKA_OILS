"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function GlassPipe() {
  const { ref, visible } = useReveal<HTMLElement>({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      aria-label="Glass pipe transition"
      className={cn(
        "relative overflow-hidden py-8 sm:py-12",
        visible ? "reveal-in" : "reveal-out",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,248,231,0.65),transparent)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-mustard-deep">
          Seed · Press · Glass · Kitchen
        </p>

        <div className="glass-pipe-stage relative w-full">
          <div className="glass-pipe-glow" aria-hidden />

          <svg
            viewBox="0 0 920 180"
            className="glass-pipe-svg h-auto w-full"
            role="img"
            aria-label="Animated glass oil pipe"
          >
            <defs>
              <linearGradient id="pipeGlass" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="35%" stopColor="rgba(255,255,255,0.55)" />
                <stop offset="65%" stopColor="rgba(255,255,255,0.35)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              <linearGradient id="oilFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F4B400" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#F4B400" />
                <stop offset="70%" stopColor="#D99A00" />
                <stop offset="100%" stopColor="#B51F1F" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="pipeShade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0.12)" />
                <stop offset="100%" stopColor="rgba(36,36,36,0.12)" />
              </linearGradient>
              <filter id="softBlur" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            {/* Soft under-glow */}
            <ellipse
              cx="460"
              cy="150"
              rx="340"
              ry="18"
              fill="rgba(244,180,0,0.22)"
              filter="url(#softBlur)"
              className={cn(visible && "animate-pulse-soft")}
            />

            {/* Main glass tube path */}
            <path
              d="M40 90 C 140 40, 220 140, 320 90 S 500 40, 600 95 S 780 145, 880 85"
              fill="none"
              stroke="url(#pipeGlass)"
              strokeWidth="42"
              strokeLinecap="round"
              className="pipe-body"
            />
            <path
              d="M40 90 C 140 40, 220 140, 320 90 S 500 40, 600 95 S 780 145, 880 85"
              fill="none"
              stroke="url(#pipeShade)"
              strokeWidth="42"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* Inner oil channel */}
            <path
              d="M40 90 C 140 40, 220 140, 320 90 S 500 40, 600 95 S 780 145, 880 85"
              fill="none"
              stroke="rgba(255,253,248,0.35)"
              strokeWidth="28"
              strokeLinecap="round"
            />

            {/* Animated oil stream */}
            <path
              d="M40 90 C 140 40, 220 140, 320 90 S 500 40, 600 95 S 780 145, 880 85"
              fill="none"
              stroke="url(#oilFlow)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="28 42"
              className={cn("oil-stream", visible && "oil-stream-run")}
            />

            {/* Glass highlight line */}
            <path
              d="M55 78 C 150 32, 230 122, 330 78 S 510 32, 610 82 S 790 132, 865 74"
              fill="none"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* End bulbs */}
            <circle cx="40" cy="90" r="22" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
            <circle cx="40" cy="90" r="10" fill="#F4B400" className={cn(visible && "animate-pulse-soft")} />
            <circle cx="880" cy="85" r="22" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
            <circle cx="880" cy="85" r="10" fill="#B51F1F" className={cn(visible && "animate-pulse-soft")} />
          </svg>

          <div className="mt-4 flex w-full justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[11px]">
            <span>Field</span>
            <span className="hidden sm:inline">Expeller</span>
            <span>Glass pipe</span>
            <span>Bottle</span>
            <span>Home</span>
          </div>
        </div>
      </div>
    </section>
  );
}
