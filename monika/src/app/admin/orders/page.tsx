"use client";

import { useMemo, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel, StatusPill } from "@/components/admin/AdminUi";
import { adminOrders, type OrderStatus } from "@/data/admin-demo";

const filters: Array<"All" | OrderStatus> = [
  "All",
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function AdminOrdersPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [toast, setToast] = useState("");

  const list = useMemo(
    () => (filter === "All" ? adminOrders : adminOrders.filter((order) => order.status === filter)),
    [filter],
  );

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Commerce</p>
          <h2 className="mt-1 text-2xl font-semibold">Orders</h2>
          <p className="mt-1 text-sm text-muted">Track and preview order statuses for the storefront.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                filter === item
                  ? "bg-brand-red text-white"
                  : "border border-cream-dark bg-white text-muted hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <AdminPanel title={`${list.length} orders`}>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-xs uppercase tracking-[0.12em] text-muted">
                  <th className="pb-3 pr-4 font-semibold">Order</th>
                  <th className="pb-3 pr-4 font-semibold">Customer</th>
                  <th className="pb-3 pr-4 font-semibold">Items</th>
                  <th className="pb-3 pr-4 font-semibold">Total</th>
                  <th className="pb-3 pr-4 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((order) => (
                  <tr key={order.id} className="border-b border-cream-dark/60 last:border-0">
                    <td className="py-3.5 pr-4">
                      <p className="font-medium">{order.id}</p>
                      <p className="text-xs text-muted">{order.date}</p>
                    </td>
                    <td className="py-3.5 pr-4">
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-muted">{order.city}</p>
                    </td>
                    <td className="py-3.5 pr-4">{order.items}</td>
                    <td className="py-3.5 pr-4 font-medium">₹{order.total.toLocaleString("en-IN")}</td>
                    <td className="py-3.5 pr-4">
                      <StatusPill status={order.status} />
                    </td>
                    <td className="py-3.5">
                      <button
                        type="button"
                        className="text-xs font-semibold text-brand-red hover:underline"
                        onClick={() => {
                          setToast(`Order ${order.id} opened in preview mode.`);
                          window.setTimeout(() => setToast(""), 2200);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
