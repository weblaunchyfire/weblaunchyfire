import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { makeSeoMetadata } from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved. Browse Web Launchy Fire templates and launch your business website.",
  path: "/404",
  robots: { index: false, follow: true },
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: "calc(100dvh - 78px)",
        display: "grid",
        placeItems: "center",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        <section style={{ maxWidth: 520 }}>
          <p className="section-tag" style={{ marginBottom: 12 }}>404</p>
          <h1 style={{ fontSize: "2.75rem", lineHeight: 1, fontWeight: 800, letterSpacing: 0 }}>
            Page not found
          </h1>
          <p style={{ marginTop: 18, color: "var(--text-2)", lineHeight: 1.7 }}>
            The page you are looking for is not available.
          </p>
          <Link href="/" className="btn btn-primary focus-ring" style={{ marginTop: 28, height: 48, padding: "0 26px" }}>
            Go home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
