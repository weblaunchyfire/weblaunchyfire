import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function FloatingWhatsApp({ business }) {
  return (
    <footer className="lite-footer">
      <Link href="/contact" className="lite-wa-btn">
        <Icon name="phone" className="h-4 w-4" />
        Chat on WhatsApp
      </Link>
      <p className="lite-footer-copy">
        (c) 2026 {business.brandPrefix}{business.brandName ? ` ${business.brandName}` : ""} - All rights reserved
      </p>
    </footer>
  );
}
