// Single source of truth for company details and services.
// Update these values to match your brand — every page reads from here.

export const site = {
  name: "BnB Cloud Services",
  shortName: "BnB",
  tagline: "Software that moves your business forward",
  description:
    "BnB Cloud Services is a software house building websites, custom ERP systems, web applications and SEO strategies for growing businesses.",
  url: "https://bnbcloudservices.com",
  email: "Service@bnbcloudservices.com",
  phone: "+92 300 0000000",
  address: "Pakistan",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export type IconName =
  | "erp"
  | "code"
  | "design"
  | "seo"
  | "cart"
  | "cloud"
  | "mobile"
  | "support";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "custom-erp",
    icon: "erp",
    title: "Custom ERP Development",
    summary:
      "ERP systems built around how your business actually works, from inventory and accounts to HR and payroll.",
    description:
      "Off-the-shelf ERPs force you to change your process. We do the opposite: we study your workflows and build an ERP that fits them, with modules you need and nothing you don't. It runs in the cloud, so your team can use it from anywhere.",
    features: [
      "Inventory, purchase & sales management",
      "Accounting, invoicing & financial reports",
      "HR, attendance & payroll",
      "Role-based access & audit trails",
      "Custom dashboards and analytics",
      "Integration with existing tools and APIs",
    ],
    deliverables: [
      "Requirement analysis & process mapping",
      "Cloud deployment with backups",
      "Staff training & documentation",
      "Ongoing support and new modules",
    ],
  },
  {
    slug: "web-development",
    icon: "code",
    title: "Web Development",
    summary:
      "Fast, secure web applications and business portals built with modern frameworks like Next.js and React.",
    description:
      "From customer portals to internal tools, we build web applications that are fast, secure and easy to maintain. We use proven, modern technology so your product scales as you grow.",
    features: [
      "Custom web applications & portals",
      "Next.js, React & Node.js",
      "REST & GraphQL APIs",
      "Database design & optimisation",
      "Authentication & payments",
      "Performance & security hardening",
    ],
    deliverables: [
      "Source code you own",
      "Automated deployment pipeline",
      "Technical documentation",
      "Maintenance plans",
    ],
  },
  {
    slug: "web-design",
    icon: "design",
    title: "Website Design",
    summary:
      "Clean, modern, mobile-first websites that represent your brand and turn visitors into customers.",
    description:
      "Your website is often the first impression a customer gets. We design responsive, conversion-focused websites with clear messaging, strong visuals and a smooth experience on every device.",
    features: [
      "UI/UX design & wireframes",
      "Responsive, mobile-first layouts",
      "Brand-consistent visual design",
      "Landing pages that convert",
      "Content management (CMS)",
      "Accessibility best practices",
    ],
    deliverables: [
      "Design mockups for approval",
      "Fully built, live website",
      "Domain & hosting setup",
      "Training to update content",
    ],
  },
  {
    slug: "seo",
    icon: "seo",
    title: "SEO & Digital Marketing",
    summary:
      "Get found on Google. Technical SEO, content and local search strategies that bring in real traffic.",
    description:
      "A great website needs visitors. We improve your search rankings with technical SEO, keyword research, on-page optimisation and local SEO, and we report results in plain language every month.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page & content optimisation",
      "Google Business Profile & local SEO",
      "Speed & Core Web Vitals",
      "Monthly ranking & traffic reports",
    ],
    deliverables: [
      "Full SEO audit report",
      "Prioritised action plan",
      "Google Analytics & Search Console setup",
      "Monthly progress reports",
    ],
  },
  {
    slug: "ecommerce",
    icon: "cart",
    title: "E-commerce Solutions",
    summary:
      "Online stores with secure payments, inventory sync and an easy admin panel to manage orders.",
    description:
      "Sell online with confidence. We build e-commerce stores that are fast, secure and easy to manage, with payment gateways, shipping and inventory connected to your ERP.",
    features: [
      "Custom storefronts",
      "Payment gateway integration",
      "Inventory & order management",
      "Discounts, coupons & promotions",
      "Shipping & delivery integration",
      "Sales analytics",
    ],
    deliverables: [
      "Live online store",
      "Admin panel training",
      "Payment & shipping setup",
      "Post-launch support",
    ],
  },
  {
    slug: "cloud-hosting",
    icon: "cloud",
    title: "Cloud Hosting & Maintenance",
    summary:
      "Reliable hosting, domains, SSL, backups and ongoing maintenance so your systems stay online.",
    description:
      "We take care of the technical side so you don't have to. Managed hosting, security updates, daily backups and monitoring keep your website and applications running smoothly.",
    features: [
      "Managed cloud hosting",
      "Domain & SSL management",
      "Daily backups",
      "Uptime monitoring",
      "Security updates & patches",
      "Business email setup",
    ],
    deliverables: [
      "Hosting setup & migration",
      "Monitoring & alerts",
      "Monthly maintenance",
      "Priority support",
    ],
  },
];

export const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "6", label: "Core services" },
  { value: "24/7", label: "Support" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "We learn about your business, goals and current workflow.",
  },
  {
    step: "02",
    title: "Plan & Design",
    text: "We propose a solution, timeline and designs for your approval.",
  },
  {
    step: "03",
    title: "Build",
    text: "We develop in short cycles and share progress with you regularly.",
  },
  {
    step: "04",
    title: "Launch & Support",
    text: "We deploy, train your team and stay on hand for support.",
  },
];

export const whyUs = [
  {
    title: "Built for your business",
    text: "No one-size-fits-all templates. Every solution is tailored to your processes.",
  },
  {
    title: "Modern technology",
    text: "Next.js, React, Node.js and cloud infrastructure for speed and reliability.",
  },
  {
    title: "Transparent pricing",
    text: "Clear quotes and milestones. No hidden costs or surprises.",
  },
  {
    title: "Long-term partner",
    text: "We support and grow your systems long after launch.",
  },
];
