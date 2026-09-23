"use client";

import { useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusPill } from "@/components/admin/AdminUi";
import { adminMessages } from "@/data/admin-demo";

export default function AdminMessagesPage() {
  const [selected, setSelected] = useState(adminMessages[0]?.id ?? "");
  const active = adminMessages.find((msg) => msg.id === selected) ?? adminMessages[0];

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Inbox</p>
          <h2 className="mt-1 text-2xl font-semibold">Get in Touch messages</h2>
          <p className="mt-1 text-sm text-muted">
            Contact form submissions from the storefront (frontend preview).
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
          <div className="overflow-hidden rounded-3xl border border-[#eadfc8] bg-white shadow-[0_12px_40px_rgba(36,36,36,0.05)]">
            <ul className="divide-y divide-cream-dark/70">
              {adminMessages.map((msg) => (
                <li key={msg.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(msg.id)}
                    className={`w-full px-4 py-4 text-left transition ${
                      selected === msg.id ? "bg-cream/80" : "hover:bg-cream/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-ink">{msg.name}</p>
                      {msg.unread ? <StatusPill status="Unread" /> : null}
                    </div>
                    <p className="mt-1 text-xs text-muted">{msg.purpose}</p>
                    <p className="mt-1 line-clamp-1 text-xs text-muted">{msg.message}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {active ? (
            <article className="rounded-3xl border border-[#eadfc8] bg-white p-6 shadow-[0_12px_40px_rgba(36,36,36,0.05)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{active.name}</h3>
                  <p className="mt-1 text-sm text-muted">{active.mobile}</p>
                </div>
                <StatusPill status={active.purpose} />
              </div>
              <p className="mt-2 text-xs text-muted">{active.date}</p>
              <p className="mt-6 text-sm leading-7 text-ink">{active.message}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white"
                >
                  Mark as read
                </button>
                <a
                  href={`tel:${active.mobile.replace(/\s/g, "")}`}
                  className="rounded-full border border-cream-dark bg-cream/60 px-4 py-2 text-sm font-semibold text-ink"
                >
                  Call
                </a>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </AdminShell>
  );
}
