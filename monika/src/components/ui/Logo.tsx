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
        alt="MONIKA oils and foods"
        width={500}
        height={500}
        priority
        className={cn(
          "h-12 w-auto max-w-[140px] object-contain object-left sm:h-14 sm:max-w-[160px]",
          light && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
