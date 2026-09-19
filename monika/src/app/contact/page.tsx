"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useStore } from "@/context/StoreProvider";

export default function ContactPage() {
  const { toast } = useStore();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <Container className="grid gap-10 py-14 lg:grid-cols-2">
      <div>
        <h1 className="font-serif text-5xl">Contact Us</h1>
        <p className="mt-4 text-muted leading-7">
          For product questions, trade enquiries, or kitchen feedback, write to
          the Monika desk. Live order tracking will arrive with backend
          integration.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          <li>Phone: +91 90000 00000</li>
          <li>Email: hello@monikaoils.com</li>
          <li>Address: Kitchen Studio, India</li>
        </ul>
      </div>
      <form
        className="space-y-4 rounded-3xl border border-cream-dark bg-white p-6"
        onSubmit={(event) => {
          event.preventDefault();
          toast("Message saved locally. A live inbox will be connected later.");
          setForm({ name: "", email: "", phone: "", message: "" });
        }}
      >
        {(["name", "email", "phone"] as const).map((field) => (
          <input
            key={field}
            required={field !== "phone"}
            type={field === "email" ? "email" : "text"}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm"
            value={form[field]}
            onChange={(event) => setForm({ ...form, [field]: event.target.value })}
          />
        ))}
        <textarea
          required
          rows={5}
          placeholder="Message"
          className="w-full rounded-xl border border-cream-dark px-4 py-3 text-sm"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
        <button type="submit" className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white">
          Send message
        </button>
      </form>
    </Container>
  );
}
