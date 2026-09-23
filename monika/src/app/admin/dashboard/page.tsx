"use client";

import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel, AdminStatCard, StatusPill } from "@/components/admin/AdminUi";
import {
  adminMessages,
  adminOrders,
  adminStats,
  salesByDay,
} from "@/data/admin-demo";

export default function AdminDashboardPage() {
  const maxSale = Math.max(...salesByDay.map((d) => d.value));

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((stat) => (
            <AdminStatCard
              key={stat.key}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              up={stat.up}
            />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <AdminPanel
            title="Weekly sales pulse"
            action={
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
                Last 7 days
              </span>
            }
          >
            <div className="flex h-52 items-end gap-3 sm:gap-4">
              {salesByDay.map((day) => (
                <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-brand-red to-mustard shadow-sm"
                    style={{ height: `${(day.value / maxSale) * 100}%`, minHeight: 18 }}
                    title={`${day.value} orders`}
                  />
                  <span className="text-[11px] font-medium text-muted">{day.day}</span>
                </div>
              ))}
            </div>
          </AdminPanel>

          <AdminPanel
            title="Inbox highlights"
            action={
              <Link href="/admin/messages" className="text-xs font-semibold text-brand-red hover:underline">
                View all
              </Link>
            }
          >
            <ul className="space-y-3">
              {adminMessages.slice(0, 4).map((msg) => (
                <li
                  key={msg.id}
                  className="rounded-2xl border border-cream-dark/80 bg-cream/40 px-3.5 py-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-ink">{msg.name}</p>
                    {msg.unread ? <StatusPill status="Unread" /> : null}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">{msg.message}</p>
                </li>
              ))}
            </ul>
          </AdminPanel>
        </div>

        <AdminPanel
          title="Recent orders"
          action={
            <Link href="/admin/orders" className="text-xs font-semibold text-brand-red hover:underline">
              Manage orders
            </Link>
          }
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-xs uppercase tracking-[0.12em] text-muted">
                  <th className="pb-3 pr-4 font-semibold">Order</th>
                  <th className="pb-3 pr-4 font-semibold">Customer</th>
                  <th className="pb-3 pr-4 font-semibold">Total</th>
                  <th className="pb-3 pr-4 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {adminOrders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="border-b border-cream-dark/60 last:border-0">
                    <td className="py-3.5 pr-4 font-medium text-ink">{order.id}</td>
                    <td className="py-3.5 pr-4">
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-muted">{order.city}</p>
                    </td>
                    <td className="py-3.5 pr-4">₹{order.total.toLocaleString("en-IN")}</td>
                    <td className="py-3.5 pr-4">
                      <StatusPill status={order.status} />
                    </td>
                    <td className="py-3.5 text-muted">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminPanel>
      </div>
    </AdminShell>
  );
}
