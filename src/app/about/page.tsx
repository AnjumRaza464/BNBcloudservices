import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { CtaBanner, PageHero, SectionHeading } from "@/components/ui";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, a software house focused on websites, custom ERP and SEO.`,
};

const values = [
  { title: "Quality first", text: "Clean code, careful testing and attention to detail in everything we ship." },
  { title: "Clear communication", text: "Regular updates, honest timelines and no technical jargon." },
  { title: "Client success", text: "We measure our work by the results it brings to your business." },
];

const tech = ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "MySQL", "Cloud Hosting"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`We are ${site.name}`}
        text="A team of developers, designers and digital marketers helping businesses grow with the right technology."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Our story" title="Technology that fits your business" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                We started {site.name} with a simple idea: businesses deserve software that fits the way they work,
                not the other way around.
              </p>
              <p>
                Today we design websites, build custom ERP systems and web applications, and run SEO campaigns for
                clients across industries. Whether you&apos;re a startup launching your first website or an
                established company replacing spreadsheets with a proper ERP, we&apos;re here to help.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 self-center">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-surface p-7 text-center">
                <p className="text-gradient text-4xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Technology" title="Tools we build with" />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {tech.map((t) => (
              <li key={t} className="rounded-full border border-border px-5 py-2 text-sm font-medium">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
