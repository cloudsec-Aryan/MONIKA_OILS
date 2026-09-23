"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, Search, Store } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/context/StoreProvider";
import { cn } from "@/lib/utils";

export function MobileTabBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { setSearchOpen, setMenuOpen } = useStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemClass =
    "relative flex h-full w-full flex-col items-center justify-center gap-0.5 text-[11px]";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-dark bg-white/95 backdrop-blur-md xl:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="App navigation"
    >
      <ul className="grid h-16 grid-cols-4">
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
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={cn(itemClass, "text-muted")}
            aria-label="Open menu"
          >
            <Menu size={20} />
            Menu
          </button>
        </li>
      </ul>
    </nav>
  );
}
