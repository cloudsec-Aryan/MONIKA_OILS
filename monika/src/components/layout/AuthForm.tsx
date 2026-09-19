"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const { login } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSignup = mode === "signup";

  return (
    <Container className="max-w-md py-12">
      <h1 className="text-3xl">{isSignup ? "Create an account" : "Login"}</h1>
      <p className="mt-2 text-sm text-muted">
        This is a frontend-only preview. No real account is created on a server.
      </p>
      <form
        className="mt-8 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          login({
            name: isSignup ? name || "Monika customer" : email.split("@")[0] || "Guest",
            email,
          });
          router.push("/");
        }}
      >
        {isSignup ? (
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm"
          />
        ) : null}
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm"
        />
        <input
          required
          type="password"
          minLength={4}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-[#B51F1F] py-3 text-sm text-white"
        >
          {isSignup ? "Sign up" : "Login"}
        </button>
      </form>
      <p className="mt-5 text-sm text-muted">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-brand-red">
              Login
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href="/signup" className="text-brand-red">
              Sign up
            </Link>
          </>
        )}
      </p>
    </Container>
  );
}
