"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel, StatusPill } from "@/components/admin/AdminUi";
import { adminOffers } from "@/data/admin-demo";

export default function AdminOffersPage() {
  const [toast, setToast] = useState("");

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Promotions</p>
            <h2 className="mt-1 text-2xl font-semibold">Offers</h2>
            <p className="mt-1 text-sm text-muted">Campaigns that feed the offers page on the site.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setToast("Create offer flow is frontend-only for now.");
              window.setTimeout(() => setToast(""), 2200);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Plus size={16} />
            Create offer
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {adminOffers.map((offer) => (
            <article
              key={offer.id}
              className="relative overflow-hidden rounded-3xl border border-[#eadfc8] bg-white p-5 shadow-[0_12px_40px_rgba(36,36,36,0.05)]"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-mustard/30 to-brand-red/15" />
              <StatusPill status={offer.status} />
              <h3 className="relative mt-4 text-lg font-semibold text-ink">{offer.title}</h3>
              <p className="relative mt-2 text-2xl font-semibold text-brand-red">{offer.discount}</p>
              <p className="relative mt-3 text-xs text-muted">Ends {offer.ends}</p>
            </article>
          ))}
        </div>

        <AdminPanel title="Rules">
          <p className="text-sm leading-7 text-muted">
            Discount math and coupon codes will attach when checkout APIs are connected. This panel
            is ready for UI review.
          </p>
        </AdminPanel>

        {toast ? (
          <div className="fixed bottom-6 right-6 z-50 rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lg">
            {toast}
          </div>
        ) : null}
      </div>
    </AdminShell>
  );
}
