"use client";

import type { FormEvent } from "react";
import { services, site } from "@/lib/site";

// Static site has no server, so the form composes an email in the visitor's mail app.
// To receive submissions directly, point it at a form service (e.g. Formspree) instead.
export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry: ${data.get("service")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input =
    "mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium">
        Full name
        <input name="name" required className={input} autoComplete="name" />
      </label>
      <label className="text-sm font-medium">
        Email
        <input name="email" type="email" required className={input} autoComplete="email" />
      </label>
      <label className="text-sm font-medium">
        Phone
        <input name="phone" type="tel" className={input} autoComplete="tel" />
      </label>
      <label className="text-sm font-medium">
        Service
        <select name="service" className={input} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Other</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Project details
        <textarea name="message" required rows={5} className={input} />
      </label>
      <button
        type="submit"
        className="rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-blue-600 sm:col-span-2 sm:justify-self-start"
      >
        Send Message
      </button>
    </form>
  );
}
