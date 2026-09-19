import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link href="/" className={cn("inline-flex flex-col", className)}>
      <span
        className={cn(
          "text-xl font-semibold leading-none tracking-wide",
          light ? "text-white" : "text-ink",
        )}
      >
        MONIKA
      </span>
      <span
        className={cn(
          "mt-1 text-[10px]",
          light ? "text-mustard" : "text-muted",
        )}
      >
        Pure Taste. Pure Tradition.
      </span>
    </Link>
  );
}
