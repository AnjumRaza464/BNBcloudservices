import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { CtaBanner, PageHero } from "@/components/ui";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} text={service.summary} />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{service.description}</p>

            <h2 className="mt-12 text-2xl font-bold">What&apos;s included</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-border p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">What you get</h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 text-muted">
                  <Icon name="arrow" className="h-4 w-4 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy p-7 text-white">
              <h3 className="text-xl font-semibold">Interested in {service.title}?</h3>
              <p className="mt-3 text-slate-300">
                Get a free consultation and a clear quote for your project.
              </p>
              <Link
                href="/contact/"
                className="mt-6 block rounded-full bg-brand px-6 py-3 text-center font-semibold transition hover:bg-blue-600"
              >
                Request a Quote
              </Link>
            </div>
            <div className="rounded-2xl border border-border p-7">
              <h3 className="font-semibold">Other services</h3>
              <ul className="mt-4 space-y-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="flex items-center gap-3 text-muted transition hover:text-brand"
                    >
                      <Icon name={s.icon} className="h-5 w-5" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
