"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel, StatusPill } from "@/components/admin/AdminUi";
import { adminBlogs } from "@/data/admin-demo";

export default function AdminBlogsPage() {
  const [toast, setToast] = useState("");

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Monika Tadka
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Blogs</h2>
            <p className="mt-1 text-sm text-muted">Draft and publish kitchen stories for the storefront.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setToast("New blog editor will connect later.");
              window.setTimeout(() => setToast(""), 2200);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Plus size={16} />
            New blog
          </button>
        </div>

        <AdminPanel title="All posts">
          <div className="space-y-3">
            {adminBlogs.map((blog) => (
              <article
                key={blog.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cream-dark/80 bg-cream/30 px-4 py-4"
              >
                <div>
                  <p className="font-semibold text-ink">{blog.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {blog.tag} · {blog.date}
                  </p>
                </div>
                <StatusPill status={blog.status} />
              </article>
            ))}
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
