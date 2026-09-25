"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  X,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useStore } from "@/context/StoreProvider";
import { products } from "@/data/products";
import { cartCount, cn, formatINR } from "@/lib/utils";
import type { Product } from "@/types";

const previewProducts: Product[] = [
  ...products.filter((p) => p.featured || p.bestseller),
].filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i).slice(0, 8);

const shopCategories = [
  { key: "all", href: "/shop", label: "All oils" },
  { key: "mustard", href: "/shop?category=mustard", label: "Mustard oil" },
  { key: "groundnut", href: "/shop?category=groundnut", label: "Groundnut oil" },
  { key: "sesame", href: "/shop?category=sesame", label: "Sesame oil" },
  { key: "combo", href: "/shop?category=combo", label: "Combos & packs" },
];

const tadkaLinks = [
  { href: "/recipes", label: "Recipes", hint: "Everyday kitchen ideas", soon: true },
  { href: "/blogs", label: "Blogs", hint: "Stories from our kitchen", soon: true },
];

const plainLinks = [
  { href: "/quality", label: "The Monika Difference" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Get in Touch" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ProductsMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (open) setCategory("all");
  }, [open]);

  const shown =
    category === "all"
      ? previewProducts
      : products.filter((product) => product.category === category).slice(0, 8);

  return (
    <div
      className={cn(
        "nav-dropdown-glass overflow-hidden rounded-3xl transition-all duration-200",
        open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
      )}
      role="dialog"
      aria-label="Shop products"
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-cream-dark/70 px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
          Shop
        </p>
        <Link
          href="/shop"
          onClick={onClose}
          className="text-xs font-semibold text-brand-red hover:underline"
        >
          View all products →
        </Link>
      </div>

      <div className="grid grid-cols-[190px_1fr]">
        <div className="border-r border-cream-dark/70 bg-[#fffaf1] p-3">
          {shopCategories.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onMouseEnter={() => setCategory(item.key)}
              onClick={onClose}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium transition",
                category === item.key
                  ? "bg-brand-red text-white"
                  : "text-ink hover:bg-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/foods"
            onClick={onClose}
            className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition hover:bg-white"
          >
            Foods
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-3 p-4">
          {shown.map((product) => {
            const variant = product.variants[0];
            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="group rounded-2xl border border-[#E8D7B3]/80 bg-white p-3 transition hover:-translate-y-0.5 hover:border-brand-red/25 hover:shadow-[0_12px_28px_rgba(181,31,31,0.08)]"
              >
                <span className="relative block aspect-square overflow-hidden rounded-xl bg-[#fff8e7]">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    className="object-contain p-2 transition duration-300 group-hover:scale-105"
                    sizes="140px"
                  />
                  {variant.discount ? (
                    <span className="absolute left-2 top-2 rounded-full bg-brand-red px-2 py-0.5 text-[10px] font-bold text-white">
                      {variant.discount}% off
                    </span>
                  ) : null}
                </span>
                <span className="mt-2.5 line-clamp-2 block min-h-10 text-sm font-semibold leading-5 text-ink">
                  {product.name}
                </span>
                <span className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-sm font-bold text-brand-red">{formatINR(variant.price)}</span>
                  <span className="text-xs text-muted line-through">{formatINR(variant.mrp)}</span>
                </span>
                <span className="mt-0.5 block text-[11px] text-muted">{variant.weight}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TadkaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "nav-dropdown-glass absolute left-1/2 top-[calc(100%+12px)] z-[60] w-56 -translate-x-1/2 overflow-hidden rounded-2xl transition-all duration-200",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
      role="menu"
      aria-hidden={!open}
    >
      <div className="border-b border-cream-dark/60 bg-[#FFF1D6]/70 px-4 py-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mustard-deep">
          Coming soon
        </p>
        <p className="mt-0.5 text-xs text-muted">Recipes &amp; blogs are warming up.</p>
      </div>
      {tadkaLinks.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          role="menuitem"
          onClick={onClose}
          className="block border-b border-cream-dark/60 px-4 py-3 last:border-b-0 hover:bg-brand-red/[0.06]"
        >
          <span className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold text-ink">{child.label}</span>
            {child.soon ? (
              <span className="rounded-full bg-mustard/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
                Soon
              </span>
            ) : null}
          </span>
          <span className="mt-0.5 block text-xs text-muted">{child.hint}</span>
        </Link>
      ))}
    </div>
  );
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
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<"products" | "tadka" | null>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);
  const tadkaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  const open = (menu: "products" | "tadka") => {
    clearCloseTimer();
    setOpenMenu(menu);
  };

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
    setMobileOpen(null);
    setOpenMenu(null);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointer = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        productsRef.current?.contains(target) ||
        productsMenuRef.current?.contains(target) ||
        tadkaRef.current?.contains(target)
      )
        return;
      setOpenMenu(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

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

  useEffect(() => () => clearCloseTimer(), []);

  const count = hydrated ? cartCount(cart) : 0;
  const wishCount = hydrated ? wishlist.length : 0;
  const isHome = pathname === "/";
  const productsActive =
    mounted &&
    (pathname.startsWith("/shop") ||
      pathname.startsWith("/foods") ||
      pathname.startsWith("/product"));
  const tadkaActive =
    mounted && (pathname.startsWith("/recipes") || pathname.startsWith("/blogs"));

  const navLinkClass = (active: boolean) =>
    cn(
      "rounded-full px-2.5 py-1.5 text-sm font-medium tracking-tight transition",
      active
        ? "bg-brand-red/10 font-semibold text-brand-red"
        : "text-[#1a1a1a] hover:bg-white/50 hover:text-brand-red",
    );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="pointer-events-auto relative mx-auto max-w-6xl px-3 pt-[max(0.55rem,env(safe-area-inset-top))] sm:px-5 lg:px-6">
          <div
            className={cn(
              "nav-crystal relative rounded-2xl transition-all duration-300",
              compact && "nav-crystal-compact",
            )}
          >
            <div
              className={cn(
                "relative z-10 flex items-center justify-between gap-3 px-3 transition-all sm:px-4",
                compact ? "h-[58px]" : "h-[68px]",
              )}
            >
              <Logo />

              <nav className="relative hidden items-center gap-0.5 xl:flex">
                <div
                  ref={productsRef}
                  className="relative"
                  onMouseEnter={() => open("products")}
                  onMouseLeave={scheduleClose}
                >
                  <div className="inline-flex items-center">
                    <Link
                      href="/shop"
                      className={cn(navLinkClass(Boolean(productsActive)), "pr-1")}
                      onClick={() => setOpenMenu(null)}
                    >
                      Products
                    </Link>
                    <button
                      type="button"
                      aria-label="Open products menu"
                      aria-expanded={openMenu === "products"}
                      onClick={() =>
                        setOpenMenu((current) => (current === "products" ? null : "products"))
                      }
                      className={cn(
                        "rounded-full p-1.5 transition",
                        productsActive ? "text-brand-red" : "text-[#1a1a1a] hover:text-brand-red",
                      )}
                    >
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          openMenu === "products" && "rotate-180",
                        )}
                      />
                    </button>
                  </div>
                </div>

                <div
                  ref={tadkaRef}
                  className="relative"
                  onMouseEnter={() => open("tadka")}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === "tadka"}
                    aria-haspopup="menu"
                    onClick={() =>
                      setOpenMenu((current) => (current === "tadka" ? null : "tadka"))
                    }
                    className={cn(
                      navLinkClass(Boolean(tadkaActive)),
                      "inline-flex items-center gap-1",
                    )}
                  >
                    Monika Tadka
                    <span className="rounded-full bg-mustard/35 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-ink">
                      Soon
                    </span>
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        openMenu === "tadka" && "rotate-180",
                      )}
                    />
                  </button>
                  <TadkaMenu open={openMenu === "tadka"} onClose={() => setOpenMenu(null)} />
                </div>

                {plainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={navLinkClass(
                      Boolean(
                        mounted &&
                          (pathname === link.href || pathname.startsWith(`${link.href}/`)),
                      ),
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2 xl:flex-none">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="hidden min-w-0 flex-1 items-center gap-2 rounded-full border border-white/70 bg-white/55 px-3 py-2 text-left text-sm text-[#4a4338] shadow-sm backdrop-blur-md md:flex xl:max-w-xs"
                >
                  <Search size={16} />
                  <span className="truncate">Search products</span>
                </button>
                <Link
                  href="/wishlist"
                  className="relative hidden rounded-full p-2 text-[#1a1a1a] transition hover:bg-white/55 xl:inline-flex"
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
                  className="relative hidden rounded-full p-2 text-[#1a1a1a] transition hover:bg-white/55 xl:inline-flex"
                  aria-label="Cart"
                  onClick={openDrawer}
                >
                  <ShoppingBag size={20} />
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-mustard px-1 text-[10px] font-semibold text-ink">
                    {count}
                  </span>
                </button>
                {hydrated && user ? (
                  <div className="hidden items-center gap-2 xl:flex">
                    <span className="max-w-28 truncate text-sm font-medium text-[#1a1a1a]">
                      {user.name}
                    </span>
                    <button type="button" className="text-sm text-[#4a4338]" onClick={logout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="hidden items-center gap-2 xl:flex">
                    <Link
                      href="/login"
                      className="text-sm font-medium text-[#1a1a1a] hover:text-brand-red"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="rounded-full bg-[#B51F1F] px-3 py-1.5 text-sm font-medium text-white shadow-sm shadow-brand-red/30"
                    >
                      Sign up
                    </Link>
                  </div>
                )}

                <div className="relative xl:hidden" ref={accountRef}>
                  <button
                    type="button"
                    aria-label={hydrated && user ? "Account" : "Login or sign up"}
                    aria-expanded={accountOpen}
                    onClick={() => setAccountOpen((value) => !value)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1D6]/90 text-sm font-semibold text-brand-red ring-1 ring-[#E8D7B3]/80 backdrop-blur-sm"
                  >
                    {hydrated && user ? initials(user.name) || <User size={18} /> : <User size={18} />}
                  </button>
                  {accountOpen ? (
                    <div className="nav-dropdown-glass absolute right-0 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-2xl py-1">
                      {hydrated && user ? (
                        <>
                          <p className="truncate px-3 py-2 text-sm font-semibold text-ink">
                            {user.name}
                          </p>
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
                  className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white shadow-sm shadow-brand-red/25 xl:hidden"
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
            <div
              ref={productsMenuRef}
              className={cn(
                "absolute left-0 right-0 top-full z-[60] hidden pt-3 xl:block",
                openMenu === "products" ? "pointer-events-auto" : "pointer-events-none",
              )}
              onMouseEnter={() => open("products")}
              onMouseLeave={scheduleClose}
            >
              <ProductsMenu open={openMenu === "products"} onClose={() => setOpenMenu(null)} />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none fixed inset-0 z-50 xl:hidden",
            menuOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          <button
            type="button"
            className={cn(
              "absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition",
              menuOpen ? "opacity-100" : "opacity-0",
            )}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />
          <nav
            className={cn(
              "nav-crystal pointer-events-auto absolute left-0 top-0 flex h-full w-[min(340px,88%)] flex-col overflow-y-auto rounded-none rounded-r-[1.5rem] p-6 shadow-2xl transition-transform duration-300",
              menuOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <Logo />
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close">
                <X />
              </button>
            </div>
            <div className="relative z-10 flex flex-col text-[#1a1a1a]">
              <div className="border-b border-cream-dark/70">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3.5 text-left text-lg font-medium"
                  onClick={() =>
                    setMobileOpen((current) => (current === "Products" ? null : "Products"))
                  }
                >
                  Products
                  <ChevronDown
                    size={18}
                    className={cn(mobileOpen === "Products" && "rotate-180")}
                  />
                </button>
                {mobileOpen === "Products" ? (
                  <div className="mb-3 space-y-2 rounded-2xl bg-white/70 p-3">
                    <Link href="/shop" className="block rounded-xl px-3 py-2 font-medium">
                      Oils — shop all
                    </Link>
                    <Link href="/foods" className="block rounded-xl px-3 py-2 font-medium">
                      Foods
                    </Link>
                    {previewProducts.slice(0, 4).map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-brand-red/5"
                      >
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cream">
                          <Image
                            src={product.image}
                            alt=""
                            fill
                            className="object-contain p-1"
                            sizes="48px"
                          />
                        </span>
                        <span className="text-sm leading-snug">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="border-b border-cream-dark/70">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3.5 text-left text-lg font-medium"
                  onClick={() =>
                    setMobileOpen((current) => (current === "Tadka" ? null : "Tadka"))
                  }
                >
                  <span className="flex items-center gap-2">
                    Monika Tadka
                    <span className="rounded-full bg-mustard/35 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-ink">
                      Soon
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(mobileOpen === "Tadka" && "rotate-180")}
                  />
                </button>
                {mobileOpen === "Tadka" ? (
                  <div className="mb-3 space-y-1 rounded-2xl bg-white/70 p-2">
                    <p className="px-3 py-2 text-xs text-muted">
                      Coming soon — preview the kitchen pages below.
                    </p>
                    {tadkaLinks.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2.5 text-base"
                      >
                        <span className="font-medium">{child.label}</span>
                        <span className="mt-0.5 block text-xs text-muted">{child.hint}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              {plainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-cream-dark/70 py-3.5 text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/wishlist" className="border-b border-cream-dark/70 py-3.5 text-lg">
                Saved
              </Link>
              <button
                type="button"
                className="border-b border-cream-dark/70 py-3.5 text-left text-lg"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
              >
                Search
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        aria-hidden
        className={cn(isHome ? "h-0" : "h-[calc(4.75rem+env(safe-area-inset-top))]")}
      />
    </>
  );
}
