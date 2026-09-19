"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useStore } from "@/context/StoreProvider";
import { cartCount, cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { cart, wishlist, user, openDrawer, setSearchOpen, logout, hydrated } =
    useStore();
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const count = hydrated ? cartCount(cart) : 0;
  const wishCount = hydrated ? wishlist.length : 0;

  return (
    <header className="sticky top-0 z-40 bg-white pt-[env(safe-area-inset-top)]">
      <div
        className={cn(
          "border-b border-cream-dark/70 bg-white/95 backdrop-blur-md transition-all",
          compact ? "shadow-sm" : "",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-all sm:px-6 lg:px-8",
            compact ? "h-16" : "h-[72px]",
          )}
        >
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition hover:text-brand-red",
                  pathname === link.href && mounted ? "font-medium text-brand-red" : "text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden min-w-0 flex-1 items-center gap-2 rounded-full border border-cream-dark bg-cream/60 px-3 py-2 text-left text-sm text-muted md:flex lg:max-w-xs"
            >
              <Search size={16} />
              <span className="truncate">Search products</span>
            </button>
            <button
              type="button"
              className="rounded-full p-2 hover:bg-cream md:hidden"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <Link
              href="/wishlist"
              className="relative hidden rounded-full p-2 hover:bg-cream lg:inline-flex"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishCount ? (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] text-white">
                  {wishCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              className="relative hidden rounded-full p-2 hover:bg-cream lg:inline-flex"
              aria-label="Cart"
              onClick={openDrawer}
            >
              <ShoppingBag size={20} />
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-mustard px-1 text-[10px] font-semibold text-ink">
                {count}
              </span>
            </button>
            {hydrated && user ? (
              <div className="hidden items-center gap-2 lg:flex">
                <span className="max-w-28 truncate text-sm">{user.name}</span>
                <button type="button" className="text-sm text-muted" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden items-center gap-2 lg:flex">
                <Link href="/login" className="text-sm hover:text-brand-red">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-[#B51F1F] px-3 py-1.5 text-sm text-white"
                >
                  Sign up
                </Link>
              </div>
            )}
            <button
              type="button"
              className="rounded-full p-2 hover:bg-cream lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-ink/40 transition",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        />
        <nav
          className={cn(
            "absolute left-0 top-0 flex h-full w-[min(320px,86%)] flex-col bg-cream p-6 shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close">
              <X />
            </button>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-cream-dark py-3 text-lg"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="border-b border-cream-dark py-3 text-left text-lg"
            onClick={() => {
              setMobileOpen(false);
              setSearchOpen(true);
            }}
          >
            Search
          </button>
          {hydrated && user ? (
            <button type="button" className="mt-4 text-left text-sm" onClick={logout}>
              Logout ({user.name})
            </button>
          ) : (
            <div className="mt-4 flex gap-3 text-sm">
              <Link href="/login">Login</Link>
              <Link href="/signup" className="font-medium text-brand-red">
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
