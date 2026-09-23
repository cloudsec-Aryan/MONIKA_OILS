"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, ShieldCheck, User } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import {
  readAdminSession,
  validateAdminLogin,
  writeAdminSession,
} from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (readAdminSession()) {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    window.setTimeout(() => {
      if (!validateAdminLogin(uid, password)) {
        setError("Invalid UID or password. Try again.");
        setLoading(false);
        return;
      }
      writeAdminSession({
        uid: "admin",
        name: "Admin",
        loggedInAt: new Date().toISOString(),
      });
      router.replace("/admin/dashboard");
    }, 450);
  };

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#120a0a] px-4 py-10">
      <Image
        src="/images/mustard-field.png"
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#120a0a]/90 via-[#3a1010]/75 to-[#120a0a]/92" />
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-red/30 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-mustard/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-xl shadow-black/30">
            <div className="relative h-full w-full">
              <Image
                src="/images/monika-logo.png"
                alt="MONIKA"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mustard">
            Secure access
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Admin Panel</h1>
          <p className="mt-2 text-sm text-white/65">
            Manage Monika oils, foods, orders and content.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              UID
            </span>
            <span className="flex items-center gap-2 rounded-2xl border border-white/15 bg-black/25 px-3 py-3">
              <User size={16} className="text-mustard" />
              <input
                value={uid}
                onChange={(event) => setUid(event.target.value)}
                autoComplete="username"
                placeholder="Enter admin UID"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                required
              />
            </span>
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Password
            </span>
            <span className="flex items-center gap-2 rounded-2xl border border-white/15 bg-black/25 px-3 py-3">
              <Lock size={16} className="text-mustard" />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                placeholder="Enter password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass((value) => !value)}
                className="text-white/50 hover:text-white"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </span>
          </label>

          {error ? (
            <p className="mt-4 rounded-xl bg-brand-red/20 px-3 py-2 text-sm text-[#ffb4b4] ring-1 ring-brand-red/40">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-[#8e1515] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:brightness-110 disabled:opacity-70"
          >
            <ShieldCheck size={16} />
            {loading ? "Signing in…" : "Sign in to Admin"}
          </button>

          <p className="mt-5 text-center text-[11px] text-white/45">
            Frontend preview · protected session on this device
          </p>
        </form>

        <p className="mt-6 text-center text-sm text-white/55">
          <Link href="/" className="hover:text-mustard">
            ← Back to storefront
          </Link>
        </p>
      </div>
    </div>
  );
}
