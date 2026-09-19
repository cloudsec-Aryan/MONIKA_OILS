"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";

export function Newsletter() {
  const { toast } = useStore();
  const [email, setEmail] = useState("");

  return (
    <section className="py-16">
      <Container className="rounded-3xl bg-mustard/25 px-6 py-12 text-center">
        <h2 className="font-serif text-3xl">Kitchen notes from Monika</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
          Occasional recipes, restocks, and offer reminders. No spam.
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            toast("Thanks. We will keep this for the live mailing list.");
            setEmail("");
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
            className="flex-1 rounded-full border border-cream-dark bg-white px-4 py-3 text-sm outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
          >
            Join
          </button>
        </form>
      </Container>
    </section>
  );
}
