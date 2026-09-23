"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";

const purposes = [
  "Product enquiry",
  "Bulk / trade order",
  "Quality feedback",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const { toast } = useStore();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    purpose: "",
    message: "",
    terms: true,
  });

  return (
    <Container className="grid gap-10 py-14 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">
          Get in Touch
        </p>
        <h1 className="mt-3 font-serif text-5xl">We are listening</h1>
        <p className="mt-4 text-muted leading-7">
          Share your name, number, and why you are writing. Visit us on the map
          below or leave a message for the Monika desk.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          <li>Phone: +91 90000 00000</li>
          <li>Email: hello@monikaoils.com</li>
          <li>Address: Kitchen Studio, India</li>
        </ul>

        <div className="mt-8 overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-sm">
          <iframe
            title="Monika location on Google Maps"
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="h-64 w-full border-0 sm:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <form
        className="space-y-4 rounded-3xl border border-cream-dark bg-white p-6 shadow-sm"
        onSubmit={(event) => {
          event.preventDefault();
          if (!form.terms) {
            toast("Please accept the Terms & Conditions to continue.");
            return;
          }
          toast("Message saved locally. A live inbox will be connected later.");
          setForm({ name: "", mobile: "", purpose: "", message: "", terms: true });
        }}
      >
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm outline-none transition focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Mobile number</span>
          <input
            required
            type="tel"
            name="mobile"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\-\s]{10,15}"
            placeholder="10-digit mobile number"
            className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm outline-none transition focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15"
            value={form.mobile}
            onChange={(event) => setForm({ ...form, mobile: event.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Purpose</span>
          <select
            required
            name="purpose"
            className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm outline-none transition focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15"
            value={form.purpose}
            onChange={(event) => setForm({ ...form, purpose: event.target.value })}
          >
            <option value="" disabled>
              Select a purpose
            </option>
            {purposes.map((purpose) => (
              <option key={purpose} value={purpose}>
                {purpose}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="How can we help?"
            className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm outline-none transition focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl bg-cream/70 px-3 py-3 text-sm leading-6 text-muted">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={(event) => setForm({ ...form, terms: event.target.checked })}
            className="mt-1 h-4 w-4 accent-brand-red"
          />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="font-medium text-brand-red underline-offset-2 hover:underline">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-brand-red underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark sm:w-auto"
        >
          Send message
        </button>
      </form>
    </Container>
  );
}
