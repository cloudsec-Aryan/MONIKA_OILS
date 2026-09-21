"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";

export function Newsletter() {
  const { toast } = useStore();
  const [email, setEmail] = useState("");

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-red via-[#C62828] to-[#8E1515] px-5 py-10 text-white shadow-[0_20px_50px_rgba(181,31,31,0.28)] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-mustard/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mustard">
                अच्छा खाओ, अच्छा खिलाओ
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
                Kitchen notes from Monika
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                Recipes, restocks, and kitchen tips — sent occasionally. No spam, just flavour.
              </p>
            </div>

            <form
              className="rounded-3xl bg-white/95 p-4 text-ink shadow-lg sm:p-6"
              onSubmit={(event) => {
                event.preventDefault();
                toast("Thanks. We will keep this for the live mailing list.");
                setEmail("");
              }}
            >
              <label className="text-sm font-semibold" htmlFor="kitchen-notes-email">
                Get notes in your inbox
              </label>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                  />
                  <input
                    id="kitchen-notes-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email"
                    className="h-12 w-full rounded-full border border-cream-dark bg-cream/40 pl-10 pr-4 text-sm outline-none focus:border-brand-red"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 rounded-full bg-brand-red px-6 text-sm font-semibold text-white shadow-md shadow-brand-red/30 transition hover:bg-brand-red-dark"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
