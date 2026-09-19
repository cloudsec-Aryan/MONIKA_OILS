import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  size = 14,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={cn(
            index + 1 <= Math.round(rating)
              ? "fill-mustard text-mustard"
              : "text-cream-dark",
          )}
        />
      ))}
    </span>
  );
}
