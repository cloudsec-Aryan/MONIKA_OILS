"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { SearchModal } from "@/components/layout/SearchModal";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import { PwaProvider } from "@/components/layout/PwaProvider";
import { QueryPopup } from "@/components/layout/QueryPopup";
import { useStore } from "@/context/StoreProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { toasts } = useStore();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-20 xl:pb-0">{children}</main>
      <Footer />
      <MobileTabBar />
      <PwaProvider />
      <CartDrawer />
      <SearchModal />
      <QueryPopup />
      <div className="pointer-events-none fixed right-5 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[70] space-y-2 lg:bottom-5">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lg animate-fade-up"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </>
  );
}
