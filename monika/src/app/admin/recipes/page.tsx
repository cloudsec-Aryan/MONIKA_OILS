"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminPanel, StatusPill } from "@/components/admin/AdminUi";
import { adminRecipes } from "@/data/admin-demo";

export default function AdminRecipesPage() {
  const [toast, setToast] = useState("");

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Monika Tadka
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Recipes</h2>
            <p className="mt-1 text-sm text-muted">Everyday tadka ideas shown on the recipes page.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setToast("Recipe editor preview — backend next.");
              window.setTimeout(() => setToast(""), 2200);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Plus size={16} />
            New recipe
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {adminRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="rounded-3xl border border-[#eadfc8] bg-white p-5 shadow-[0_12px_40px_rgba(36,36,36,0.05)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-ink">{recipe.title}</h3>
                <StatusPill status={recipe.status} />
              </div>
              <p className="mt-3 text-xs text-muted">{recipe.date}</p>
            </article>
          ))}
        </div>

        <AdminPanel title="Tip">
          <p className="text-sm leading-7 text-muted">
            Recipes published here will appear under Monika Tadka → Recipes on the website.
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
