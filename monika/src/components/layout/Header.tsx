"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingBag, X, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Header() {
  const pathname = usePathname();
  const {
    cart,
    wishlist,
    user,
    openDrawer,
    setSearchOpen,
    menuOpen,
    setMenuOpen,
    logout,
    hydrated,
  } = useStore();
  const [compact, setCompact] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

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
    setMenuOpen(false);
    setAccountOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    if (!accountOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!accountRef.current?.contains(event.target as Node)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [accountOpen]);

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
            compact ? "h-[68px]" : "h-[80px]",
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

            <div className="relative lg:hidden" ref={accountRef}>
              <button
                type="button"
                aria-label={hydrated && user ? "Account" : "Login or sign up"}
                aria-expanded={accountOpen}
                onClick={() => setAccountOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1D6] text-sm font-semibold text-brand-red ring-1 ring-[#E8D7B3]"
              >
                {hydrated && user ? initials(user.name) || <User size={18} /> : <User size={18} />}
              </button>
              {accountOpen ? (
                <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-2xl border border-[#E8D7B3] bg-white py-1 shadow-[0_16px_40px_rgba(36,36,36,0.12)]">
                  {hydrated && user ? (
                    <>
                      <p className="truncate px-3 py-2 text-sm font-semibold text-ink">{user.name}</p>
                      <button
                        type="button"
                        className="w-full px-3 py-2 text-left text-sm text-muted hover:bg-cream"
                        onClick={() => {
                          logout();
                          setAccountOpen(false);
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block px-3 py-2.5 text-sm hover:bg-cream"
                        onClick={() => setAccountOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="block px-3 py-2.5 text-sm font-semibold text-brand-red hover:bg-cream"
                        onClick={() => setAccountOpen(false)}
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white shadow-sm shadow-brand-red/25 lg:hidden"
              aria-label="Cart"
              onClick={openDrawer}
            >
              <ShoppingBag size={18} />
              {count ? (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-mustard px-1 text-[9px] font-bold text-ink">
                  {count}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-ink/40 transition",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
        <nav
          className={cn(
            "absolute left-0 top-0 flex h-full w-[min(320px,86%)] flex-col bg-cream p-6 shadow-2xl transition-transform duration-300",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close">
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
          <Link href="/wishlist" className="border-b border-cream-dark py-3 text-lg">
            Saved
          </Link>
          <button
            type="button"
            className="border-b border-cream-dark py-3 text-left text-lg"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
          >
            Search
          </button>
        </nav>
      </div>
    </header>
  );
}
