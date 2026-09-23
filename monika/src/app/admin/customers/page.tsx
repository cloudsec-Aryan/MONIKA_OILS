"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel } from "@/components/admin/AdminUi";
import { adminCustomers } from "@/data/admin-demo";

export default function AdminCustomersPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">People</p>
          <h2 className="mt-1 text-2xl font-semibold">Customers</h2>
          <p className="mt-1 text-sm text-muted">Sample customer profiles for the admin preview.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {adminCustomers.map((customer) => (
            <article
              key={customer.id}
              className="rounded-3xl border border-[#eadfc8] bg-white p-5 shadow-[0_12px_40px_rgba(36,36,36,0.05)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red to-[#7a1010] text-sm font-semibold text-white">
                  {customer.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-ink">{customer.name}</p>
                  <p className="text-xs text-muted">{customer.city}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted">{customer.email}</p>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-cream/70 px-3 py-2.5 text-sm">
                <span>
                  <span className="font-semibold text-ink">{customer.orders}</span>{" "}
                  <span className="text-muted">orders</span>
                </span>
                <span className="font-semibold text-brand-red">
                  ₹{customer.spent.toLocaleString("en-IN")}
                </span>
              </div>
            </article>
          ))}
        </div>

        <AdminPanel title="Notes">
          <p className="text-sm leading-7 text-muted">
            Customer accounts will sync from the live auth and order backend. This screen is a
            working frontend layout for review and navigation.
          </p>
        </AdminPanel>
      </div>
    </AdminShell>
  );
}
