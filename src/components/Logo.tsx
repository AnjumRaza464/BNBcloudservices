import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        {site.shortName}
        <span className="font-medium text-accent"> Cloud Services</span>
      </span>
    </Link>
  );
}
