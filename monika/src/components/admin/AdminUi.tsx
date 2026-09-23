import { cn } from "@/lib/utils";

export function AdminStatCard({
  label,
  value,
  change,
  up,
}: {
  label: string;
  value: string;
  change: string;
  up: boolean;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-[#eadfc8] bg-white p-5 shadow-[0_12px_40px_rgba(36,36,36,0.05)]">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-mustard/25 to-brand-red/10" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">{value}</p>
      <p className={cn("mt-2 text-xs font-medium", up ? "text-emerald-700" : "text-brand-red")}>
        {change}
      </p>
    </article>
  );
}

export function AdminPanel({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-[#eadfc8] bg-white shadow-[0_12px_40px_rgba(36,36,36,0.05)]",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eadfc8] px-5 py-4">
        <h2 className="text-base font-semibold text-ink">{title}</h2>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Delivered" || status === "Published" || status === "Active"
      ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
      : status === "Processing" || status === "Shipped" || status === "Scheduled"
        ? "bg-amber-50 text-amber-900 ring-amber-200"
        : status === "Pending" || status === "Draft"
          ? "bg-sky-50 text-sky-900 ring-sky-200"
          : status === "Cancelled" || status === "Unread"
            ? "bg-red-50 text-brand-red ring-red-200"
            : "bg-cream text-muted ring-cream-dark";

  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1", tone)}>
      {status}
    </span>
  );
}
