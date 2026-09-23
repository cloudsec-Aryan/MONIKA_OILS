"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Boxes,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Newspaper,
  Package,
  Settings,
  Tag,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  clearAdminSession,
  readAdminSession,
  type AdminSession,
} from "@/lib/admin-auth";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Boxes },
  { href: "/admin/orders", label: "Orders", icon: Package },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { href: "/admin/recipes", label: "Recipes", icon: BookOpen },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
  { href: "/admin/offers", label: "Offers", icon: Tag },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<AdminSession | null>(null);
  const [ready, setReady] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const current = readAdminSession();
    if (!current) {
      router.replace("/admin/login");
      return;
    }
    setSession(current);
    setReady(true);
  }, [router, pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (!ready || !session) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#140c0c] text-white/70">
        <div className="h-10 w-10 animate-pulse rounded-full border-2 border-mustard/40 border-t-mustard" />
      </div>
    );
  }

  const logout = () => {
    clearAdminSession();
    router.replace("/admin/login");
  };

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-white/10 bg-gradient-to-b from-[#1a0f0f] via-[#241212] to-[#120a0a] text-white",
        mobile ? "w-full" : collapsed ? "w-[84px]" : "w-[260px]",
      )}
    >
      <div className={cn("flex items-center gap-3 px-4 py-5", collapsed && !mobile && "justify-center px-2")}>
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white/95 p-1 shadow-lg shadow-black/30">
          <Image
            src="/images/monika-logo.png"
            alt="Monika"
            fill
            className="object-contain p-0.5"
            sizes="44px"
          />
        </div>
        {(mobile || !collapsed) && (
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-wide">MONIKA Admin</p>
            <p className="truncate text-[11px] text-white/50">Oils & Foods control</p>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {nav.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                active
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/30"
                  : "text-white/65 hover:bg-white/8 hover:text-white",
                collapsed && !mobile && "justify-center px-2",
              )}
              title={item.label}
            >
              <Icon size={18} className={cn(active ? "text-mustard" : "text-white/55 group-hover:text-mustard")} />
              {(mobile || !collapsed) && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          type="button"
          onClick={logout}
          className={cn(
            "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/8 hover:text-white",
            collapsed && !mobile && "justify-center px-2",
          )}
        >
          <LogOut size={18} />
          {(mobile || !collapsed) && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-dvh bg-[#f7f1e6] text-ink">
      <div className="relative z-30 hidden lg:block">
        <div className="sticky top-0 h-dvh">
          <Sidebar />
          <button
            type="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed((value) => !value)}
            className="absolute -right-3 top-20 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-cream-dark bg-white text-ink shadow-md"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[min(300px,86%)] shadow-2xl">
            <Sidebar mobile />
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-[#e8d9bc]/80 bg-[#fffdf8]/90 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-xl border border-cream-dark bg-white p-2 lg:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  Control centre
                </p>
                <h1 className="text-lg font-semibold text-ink sm:text-xl">
                  Welcome back, {session.name}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/"
                className="hidden rounded-full border border-cream-dark bg-white px-3 py-1.5 text-xs font-medium text-muted transition hover:text-brand-red sm:inline-flex"
              >
                View storefront
              </Link>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-[#7a1010] text-sm font-semibold text-white shadow-md shadow-brand-red/25">
                A
              </div>
              {mobileOpen ? (
                <button type="button" className="lg:hidden" onClick={() => setMobileOpen(false)}>
                  <X size={18} />
                </button>
              ) : null}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
