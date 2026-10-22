import Link from "next/link";
import type { Service } from "@/lib/site";
import { Icon } from "./Icon";

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="grid-pattern absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">{text}</p>
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 flex-1 text-muted">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function CtaBanner() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="hero-bg relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Tell us what you need. We&apos;ll get back to you with a free consultation and quote.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="rounded-full bg-white px-7 py-3 font-semibold text-navy transition hover:bg-slate-100"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/"
              className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
