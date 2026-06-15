import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { getTemplate } from "@/data/site";
import { Icon } from "@/components/Icons";
import Link from "next/link";
import { locationKeywords, makeSeoMetadata, pricingKeywords } from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Contact Web Launchy Fire",
  description: "Send your business details to Web Launchy Fire and get a customized website built, previewed, and launched within 48 hours.",
  path: "/contact",
  keywords: ["contact Web Launchy Fire", "custom website launch", "website builder support", "business website quote", ...locationKeywords, ...pricingKeywords],
});

export const dynamic = "force-dynamic";

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const template = getTemplate(params?.template);

  return (
    <>
      <Header />
      <style>{`
        .contact-sec { max-width:1200px; margin:0 auto; padding:48px 24px 80px; }
        .contact-grid { display:grid; gap:48px; }
        @media(min-width:1024px){ .contact-grid { grid-template-columns:1fr 1.3fr; gap:64px; } }
        .contact-info { display:flex; gap:14px; align-items:flex-start; }
        .contact-icon {
          width:40px; height:40px; border-radius:10px; flex-shrink:0;
          background:var(--accent-subtle); display:grid; place-items:center;
        }
        .contact-form {
          background:#fff; border:1px solid var(--border);
          border-radius:20px; padding:32px;
          box-shadow: 0 4px 16px rgba(0,0,0,.04);
        }
        .form-label {
          display:block; font-size:.75rem; font-weight:600; letter-spacing:.04em;
          text-transform:uppercase; color:var(--text-3); margin-bottom:8px;
        }
        .wa-btn {
          display:flex; align-items:center; justify-content:center; gap:10px;
          height:48px; width:100%; border-radius:12px;
          background:var(--accent); color:#fff;
          font-size:.9375rem; font-weight:600;
          border:none; cursor:pointer;
          box-shadow:0 2px 12px rgba(108,92,231,.25);
          transition: background .2s, transform .15s;
        }
        .wa-btn:hover { background:var(--accent-hover); transform:translateY(-1px); }
        .template-card-sel {
          border-radius:16px; overflow:hidden;
          border:1px solid var(--border);
          box-shadow:0 2px 12px rgba(0,0,0,.06);
          margin-bottom:24px;
        }
        .preview-link {
          display:inline-flex; align-items:center; justify-content:center;
          height:32px; padding:0 14px; border-radius:8px;
          font-size:.8125rem; font-weight:600;
          background:var(--surface); border:1px solid var(--border);
          color:var(--text-1); transition:background .15s;
        }
        .preview-link:hover { background:var(--surface-2); }
      `}</style>

      <main>
        <section className="contact-sec">
          <div style={{ marginBottom: 48 }}>
            <h1 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text-1)" }}>
              Get in touch
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-2)", marginTop: 8, maxWidth: 480 }}>
              {template
                ? `You've selected ${template.name}. Send us your details and we'll get started.`
                : "Tell us about your business and we'll help you find the perfect template."}
            </p>
          </div>

          <div className="contact-grid">
            {/* Left info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {template && (
                <div className="template-card-sel">
                  <img src={template.image} alt={`${template.name} website template preview`} loading="lazy" style={{ height: 140, width: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: 20 }}>
                    <p style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--accent)", marginBottom: 4 }}>Selected template</p>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-1)" }}>{template.name}</h3>
                    <p style={{ fontSize: ".8125rem", color: "var(--text-3)", marginTop: 4 }}>{template.tagline}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                      <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-1)" }}>{template.price}</span>
                      <Link href={`/template-preview/${template.id}`} className="preview-link focus-ring">Preview</Link>
                    </div>
                  </div>
                </div>
              )}

              {[
                { icon: "phone", title: "WhatsApp Support", desc: "We respond within 2-4 hours during business hours." },
                { icon: "layout", title: "48hr Delivery", desc: "Your website goes live within 48 hours of receiving details." },
                { icon: "sparkles", title: "Revisions Included", desc: "We'll work with you until you're happy with the result." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="contact-info">
                  <span className="contact-icon">
                    <Icon name={icon} className="h-4 w-4" style={{ color: "var(--accent)" }} />
                  </span>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--text-1)", fontSize: ".9375rem" }}>{title}</p>
                    <p style={{ fontSize: ".8125rem", color: "var(--text-3)", marginTop: 4, lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="contact-form">
              <h2 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text-1)", marginBottom: 24 }}>
                Send your details
              </h2>
              <ContactForm template={template} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
