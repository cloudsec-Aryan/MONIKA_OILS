"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Home, Search, ShoppingBag, Store } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/context/StoreProvider";
import { cartCount, cn } from "@/lib/utils";

export function MobileTabBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { cart, wishlist, openDrawer, setSearchOpen, hydrated } = useStore();
  const count = hydrated ? cartCount(cart) : 0;
  const wishCount = hydrated ? wishlist.length : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemClass =
    "relative flex h-full w-full flex-col items-center justify-center gap-0.5 text-[11px]";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-dark bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="App navigation"
    >
      <ul className="grid h-16 grid-cols-5">
        <li>
          <Link
            href="/"
            className={cn(itemClass, mounted && pathname === "/" ? "text-brand-red" : "text-muted")}
          >
            <Home size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className={cn(
              itemClass,
              mounted && pathname.startsWith("/shop") ? "text-brand-red" : "text-muted",
            )}
          >
            <Store size={20} />
            Shop
          </Link>
        </li>
        <li>
          <button type="button" onClick={() => setSearchOpen(true)} className={cn(itemClass, "text-muted")}>
            <Search size={20} />
            Search
          </button>
        </li>
        <li>
          <Link
            href="/wishlist"
            className={cn(
              itemClass,
              mounted && pathname.startsWith("/wishlist") ? "text-brand-red" : "text-muted",
            )}
          >
            <Heart size={20} />
            Saved
            {wishCount ? (
              <span className="absolute right-[18%] top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-red px-1 text-[9px] text-white">
                {wishCount}
              </span>
            ) : null}
          </Link>
        </li>
        <li>
          <button type="button" onClick={openDrawer} className={cn(itemClass, "text-muted")}>
            <ShoppingBag size={20} />
            Cart
            <span className="absolute right-[18%] top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-mustard px-1 text-[9px] font-semibold text-ink">
              {count}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
