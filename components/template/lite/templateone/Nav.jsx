import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function Nav({ relatedHref, labels }) {
  return (
    <nav className="lite-nav">
      <div className="lite-wrap">
        <Link href={relatedHref} className="lite-brand">
          <span>Your</span><span>Logo</span>
        </Link>
        <Link href="/contact" className="lite-call">
          <Icon name="phone" className="h-4 w-4" />
          {labels?.callNow || "Call Now"}
        </Link>
      </div>
    </nav>
  );
}
