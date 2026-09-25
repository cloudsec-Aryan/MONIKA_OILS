"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel } from "@/components/admin/AdminUi";
import { heroBanners } from "@/data/homepage";
import { booklet as defaultBooklet } from "@/data/booklet";

const BANNERS_KEY = "monika-admin-banners";
const BOOKLET_KEY = "monika-admin-booklet";

type BannerDraft = {
  kicker: string;
  title: string;
  text: string;
  cta: string;
  href: string;
};

export default function AdminContentPage() {
  const [toast, setToast] = useState("");
  const [banners, setBanners] = useState<BannerDraft[]>(
    heroBanners.map(({ kicker, title, text, cta, href }) => ({
      kicker,
      title,
      text,
      cta,
      href,
    })),
  );
  const [bookletTitle, setBookletTitle] = useState(defaultBooklet.title);
  const [bookletSubtitle, setBookletSubtitle] = useState(defaultBooklet.subtitle);
  const [bookletUrl, setBookletUrl] = useState(defaultBooklet.fileUrl);
  const [tadkaSoon, setTadkaSoon] = useState(true);
  const [haryanaBadge, setHaryanaBadge] = useState(true);

  useEffect(() => {
    try {
      const storedBanners = localStorage.getItem(BANNERS_KEY);
      const storedBooklet = localStorage.getItem(BOOKLET_KEY);
      const tadka = localStorage.getItem("monika-admin-tadka-soon");
      const badge = localStorage.getItem("monika-admin-haryana-badge");
      if (storedBanners) setBanners(JSON.parse(storedBanners));
      if (storedBooklet) {
        const parsed = JSON.parse(storedBooklet) as {
          title: string;
          subtitle: string;
          fileUrl: string;
        };
        setBookletTitle(parsed.title);
        setBookletSubtitle(parsed.subtitle);
        setBookletUrl(parsed.fileUrl);
      }
      if (tadka != null) setTadkaSoon(tadka === "1");
      if (badge != null) setHaryanaBadge(badge === "1");
    } catch {
      /* ignore */
    }
  }, []);

  const flash = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            Homepage
          </p>
          <h2 className="mt-1 text-2xl font-semibold">Content &amp; media</h2>
          <p className="mt-1 text-sm text-muted">
            Manage banners, booklet PDF path, and storefront flags (saved in this browser for the
            admin preview).
          </p>
        </div>

        <AdminPanel title="Hero banners">
          <div className="space-y-4">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="rounded-2xl border border-cream-dark/80 bg-cream/40 p-4"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-mustard-deep">
                  Banner {index + 1}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ["kicker", "Kicker"],
                      ["title", "Title"],
                      ["text", "Text"],
                      ["cta", "CTA label"],
                      ["href", "CTA link"],
                    ] as const
                  ).map(([key, label]) => (
                    <label key={key} className={`block text-sm ${key === "text" ? "sm:col-span-2" : ""}`}>
                      <span className="mb-1 block font-medium text-muted">{label}</span>
                      {key === "text" ? (
                        <textarea
                          rows={2}
                          value={banner[key]}
                          onChange={(e) => {
                            const next = [...banners];
                            next[index] = { ...next[index], [key]: e.target.value };
                            setBanners(next);
                          }}
                          className="w-full rounded-xl border border-cream-dark px-3 py-2 outline-none focus:border-brand-red/40"
                        />
                      ) : (
                        <input
                          value={banner[key]}
                          onChange={(e) => {
                            const next = [...banners];
                            next[index] = { ...next[index], [key]: e.target.value };
                            setBanners(next);
                          }}
                          className="w-full rounded-xl border border-cream-dark px-3 py-2 outline-none focus:border-brand-red/40"
                        />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                localStorage.setItem(BANNERS_KEY, JSON.stringify(banners));
                flash("Banners saved locally.");
              }}
              className="rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white"
            >
              Save banners
            </button>
          </div>
        </AdminPanel>

        <div className="grid gap-6 lg:grid-cols-2">
          <AdminPanel title="Kitchen booklet PDF">
            <div className="space-y-3">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-muted">Title</span>
                <input
                  value={bookletTitle}
                  onChange={(e) => setBookletTitle(e.target.value)}
                  className="w-full rounded-xl border border-cream-dark px-3 py-2 outline-none focus:border-brand-red/40"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-muted">Subtitle</span>
                <textarea
                  rows={3}
                  value={bookletSubtitle}
                  onChange={(e) => setBookletSubtitle(e.target.value)}
                  className="w-full rounded-xl border border-cream-dark px-3 py-2 outline-none focus:border-brand-red/40"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-muted">PDF path / URL</span>
                <input
                  value={bookletUrl}
                  onChange={(e) => setBookletUrl(e.target.value)}
                  className="w-full rounded-xl border border-cream-dark px-3 py-2 outline-none focus:border-brand-red/40"
                />
              </label>
              <p className="text-xs text-muted">
                Place your file at <code>public/booklets/monika-kitchen-booklet.pdf</code> or paste a
                hosted URL.
              </p>
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem(
                    BOOKLET_KEY,
                    JSON.stringify({
                      title: bookletTitle,
                      subtitle: bookletSubtitle,
                      fileUrl: bookletUrl,
                    }),
                  );
                  flash("Booklet settings saved.");
                }}
                className="rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white"
              >
                Save booklet
              </button>
            </div>
          </AdminPanel>

          <AdminPanel title="Storefront flags">
            <div className="space-y-4">
              <label className="flex items-center justify-between gap-3 rounded-2xl bg-cream/60 px-4 py-3 text-sm">
                <span>
                  <span className="block font-semibold text-ink">Monika Tadka — Coming soon</span>
                  <span className="text-xs text-muted">Shows Soon badge on nav</span>
                </span>
                <input
                  type="checkbox"
                  checked={tadkaSoon}
                  onChange={(e) => setTadkaSoon(e.target.checked)}
                  className="h-5 w-5 accent-brand-red"
                />
              </label>
              <label className="flex items-center justify-between gap-3 rounded-2xl bg-cream/60 px-4 py-3 text-sm">
                <span>
                  <span className="block font-semibold text-ink">Haryana delivery badge</span>
                  <span className="text-xs text-muted">On product cards &amp; PDP</span>
                </span>
                <input
                  type="checkbox"
                  checked={haryanaBadge}
                  onChange={(e) => setHaryanaBadge(e.target.checked)}
                  className="h-5 w-5 accent-brand-red"
                />
              </label>
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("monika-admin-tadka-soon", tadkaSoon ? "1" : "0");
                  localStorage.setItem("monika-admin-haryana-badge", haryanaBadge ? "1" : "0");
                  flash("Flags saved.");
                }}
                className="rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white"
              >
                Save flags
              </button>
            </div>
          </AdminPanel>
        </div>

        {toast ? (
          <div className="fixed bottom-6 right-6 z-50 rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lg">
            {toast}
          </div>
        ) : null}
      </div>
    </AdminShell>
  );
}
