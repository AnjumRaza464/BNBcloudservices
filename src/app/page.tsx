import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CtaBanner, SectionHeading, ServiceCard } from "@/components/ui";
import { process, services, site, stats, whyUs } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Software House · Web · ERP · SEO
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.tagline.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="bg-gradient-to-r from-sky-400 to-accent bg-clip-text text-transparent">
                {site.tagline.split(" ").slice(2).join(" ")}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              We design websites, build custom ERP systems and web applications, and grow your traffic with SEO.
              One team for everything your business needs online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="rounded-full bg-brand px-7 py-3 text-center font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-blue-600"
              >
                Start Your Project
              </Link>
              <Link
                href="/services/"
                className="rounded-full border border-white/25 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Visual: mock dashboard */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["Sales", "Orders", "Stock"].map((l, i) => (
                  <div key={l} className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">{l}</p>
                    <p className="mt-1 text-xl font-bold text-white">{["2.4M", "1,284", "98%"][i]}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex h-40 items-end gap-2 rounded-xl bg-white/5 p-4">
                {[40, 65, 50, 80, 60, 90, 75, 100, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand to-accent"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-navy px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-400">SEO ranking</p>
              <p className="text-lg font-bold text-accent">↑ Top 3 on Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-gradient text-4xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Services that cover your entire digital journey"
            text="From your first website to a full ERP that runs your operations, we build it, launch it and support it."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            center={false}
            eyebrow="Why choose us"
            title="A software partner that understands business"
            text="We don't just write code. We learn how your business works and build technology that saves time, cuts costs and helps you grow."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-cyan-700">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="How we work" title="A simple, transparent process" />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-gradient text-3xl font-extrabold">{p.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
