import type { Metadata } from "next";
import { CtaBanner, PageHero, ServiceCard } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom ERP development, web development, website design, SEO, e-commerce and cloud hosting services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your business needs to succeed online"
        text="Pick a single service or let us handle your complete digital setup: website, ERP, SEO and hosting under one roof."
      />
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
