import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function Nav({ brand, phone, relatedHref, labels }) {
  return (
    <nav className="sticky top-0 z-20 grid h-[72px] min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-[var(--std-line)] bg-[var(--std-nav)] px-5 backdrop-blur md:px-10 lg:grid-cols-[minmax(220px,1fr)_auto_minmax(170px,1fr)] lg:px-14" aria-label="Template navigation">
      <Link href={relatedHref || "#"} className="min-w-0 text-inherit no-underline">
        <strong className="block truncate font-[var(--std-heading)] text-lg font-black uppercase tracking-[3px] md:text-[22px]">{brand}</strong>
        <span className="mt-2 block truncate text-[8px] font-bold uppercase tracking-[5px] text-[var(--std-gold-light)]">{labels.premiumLabel}</span>
      </Link>
      <div className="hidden items-center justify-center gap-7 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[2.4px] text-[var(--std-muted)] lg:flex">
        <a href="#services">{labels.ourServices}</a>
        <a href="#products">{labels.ourProducts}</a>
        <a href="#gallery">{labels.gallery}</a>
      </div>
      <a className="inline-flex min-h-[42px] items-center justify-center gap-2 justify-self-end border border-[var(--std-line)] px-3 text-[10px] font-black uppercase tracking-[1.6px] text-[var(--std-text)] sm:px-[18px] sm:text-xs" href={`tel:${phone.replace(/\s/g, "")}`}>
        <Icon name="phone" className="h-4 w-4" />
        {labels.callNow}
      </a>
    </nav>
  );
}
