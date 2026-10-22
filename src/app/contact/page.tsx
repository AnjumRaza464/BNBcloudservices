import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type AnyIcon } from "@/components/Icon";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} for a free consultation and quote.`,
};

const details: { icon: AnyIcon; label: string; value: string; href?: string }[] = [
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "phone", label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "pin", label: "Location", value: site.address },
  { icon: "clock", label: "Working hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something great together"
        text="Tell us about your project and we'll reply within one business day with next steps."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4 rounded-2xl border border-border p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="break-all font-semibold hover:text-brand">
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-semibold">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-surface p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold">Request a free quote</h2>
            <p className="mt-2 text-muted">Fill in the form and it will open in your email app, ready to send.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
