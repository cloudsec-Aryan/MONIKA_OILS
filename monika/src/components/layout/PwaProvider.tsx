"use client";

import { useEffect, useState } from "react";
import { Share, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function PwaProvider() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [iosHint, setIosHint] = useState(false);
  const [standalone, setStandalone] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in window.navigator &&
        Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone));
    setStandalone(isStandalone);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    const ios =
      /iphone|ipad|ipod/i.test(navigator.userAgent) &&
      !isStandalone &&
      !window.sessionStorage.getItem("monika-ios-install-dismissed");
    setIosHint(ios);

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (standalone) return null;

  if (installEvent) {
    return (
      <div className="fixed inset-x-3 z-[60] rounded-2xl bg-ink p-3 text-white shadow-xl lg:hidden bottom-[calc(4.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <p className="flex-1 text-sm">Install MONIKA on your phone for a full-screen app.</p>
          <button
            type="button"
            className="rounded-full bg-mustard px-3 py-1.5 text-xs font-semibold text-ink"
            onClick={async () => {
              await installEvent.prompt();
              setInstallEvent(null);
            }}
          >
            Install
          </button>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setInstallEvent(null)}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  if (iosHint) {
    return (
      <div className="fixed inset-x-3 z-[60] rounded-2xl bg-ink p-3 text-white shadow-xl lg:hidden bottom-[calc(4.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-start gap-3">
          <Share size={16} className="mt-0.5 shrink-0" />
          <p className="flex-1 text-sm leading-5">
            iPhone par app ki tarah kholne ke liye Safari Share → <strong>Add to Home Screen</strong> dabayein.
          </p>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => {
              window.sessionStorage.setItem("monika-ios-install-dismissed", "1");
              setIosHint(false);
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  return null;
}
