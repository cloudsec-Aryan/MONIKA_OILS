"use client";

import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel } from "@/components/admin/AdminUi";
import { ADMIN_UID } from "@/lib/admin-auth";

export default function AdminSettingsPage() {
  const [toast, setToast] = useState("");

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">System</p>
          <h2 className="mt-1 text-2xl font-semibold">Settings</h2>
          <p className="mt-1 text-sm text-muted">Brand and access preferences for the admin preview.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AdminPanel title="Admin account">
            <dl className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-cream/60 px-4 py-3">
                <dt className="text-muted">UID</dt>
                <dd className="font-semibold text-ink">{ADMIN_UID}</dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-cream/60 px-4 py-3">
                <dt className="text-muted">Role</dt>
                <dd className="font-semibold text-ink">Super Admin</dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-cream/60 px-4 py-3">
                <dt className="text-muted">Session</dt>
                <dd className="font-semibold text-ink">This browser</dd>
              </div>
            </dl>
          </AdminPanel>

          <AdminPanel title="Storefront">
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setToast("Settings saved locally (frontend preview).");
                window.setTimeout(() => setToast(""), 2200);
              }}
            >
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Support phone</span>
                <input
                  defaultValue="+91 90000 00000"
                  className="w-full rounded-xl border border-cream-dark px-3 py-2.5 outline-none focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Support email</span>
                <input
                  defaultValue="hello@monikaoils.com"
                  className="w-full rounded-xl border border-cream-dark px-3 py-2.5 outline-none focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white"
              >
                Save changes
              </button>
            </form>
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
