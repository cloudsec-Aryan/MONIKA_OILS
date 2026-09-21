import Image from "next/image";
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
    <Link
      href="/"
      aria-label="Monika home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/images/monika-logo.png"
        alt="Monika Brand — 100% Pure Mustard Oil"
        width={607}
        height={411}
        priority
        className={cn(
          "h-12 w-auto max-w-[168px] object-contain object-left sm:h-14 sm:max-w-[200px]",
          light && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)]",
        )}
      />
    </Link>
  );
}
