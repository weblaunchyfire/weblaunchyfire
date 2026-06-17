import Link from "next/link";
import { Icon } from "@/components/Icons";
import { pricing } from "@/data/site";

export default function PricingSection({ standalone = false }) {
  return (
    <section id="price" className={`pricing-sec ${standalone ? "pricing-sec-page" : ""}`}>
      <style>{`
        .pricing-sec { max-width:80rem; margin:0 auto; padding:80px 24px; }
        .pricing-sec-page { padding-top:56px; }
        .pricing-head { margin-bottom:48px; text-align:center; }
        .pricing-tag {
          display:inline-flex;
          align-items:center;
          min-height:28px;
          padding:0 12px;
          border-radius:9999px;
          background:rgba(255,106,22,.08);
          color:var(--accent);
          font-size:.78rem;
          font-weight:800;
          letter-spacing:.08em;
          text-transform:uppercase;
        }
        .pricing-title {
          margin-top:10px;
          font-size:clamp(1.5rem, 3vw, 2.25rem);
          font-weight:700;
          letter-spacing:-.03em;
          color:var(--text-1);
        }
        .pricing-desc {
          max-width:480px;
          margin:12px auto 0;
          font-size:1rem;
          line-height:1.7;
          color:var(--text-2);
        }
        .pricing-note {
          max-width:840px;
          margin:22px auto 0;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          padding:13px 16px;
          border-radius:14px;
          background:rgba(255,255,255,.72);
          border:1px solid rgba(21,21,21,.08);
          color:var(--text-2);
          font-size:.88rem;
          line-height:1.55;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.78), 0 12px 34px rgba(21,21,21,.05);
        }
        .pricing-note svg { width:18px; height:18px; color:var(--accent); flex:0 0 auto; }
        .pricing-grid {
          max-width:1120px;
          margin:0 auto;
          display:grid;
          gap:22px;
          align-items:stretch;
        }
        @media(min-width:768px){ .pricing-grid { grid-template-columns:repeat(3,1fr); } }
        .price-card {
          position:relative;
          isolation:isolate;
          overflow:hidden;
          min-height:100%;
          padding:30px;
          border-radius:22px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.98), rgba(255,255,255,.9)),
            linear-gradient(135deg, rgba(255,106,22,.08), transparent 42%);
          border:1px solid rgba(15,23,42,.08);
          display:flex;
          flex-direction:column;
          box-shadow:0 24px 70px rgba(15,23,42,.08), inset 0 1px 0 rgba(255,255,255,.92);
          transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .price-card > * { position:relative; z-index:1; }
        .price-card::before {
          content:"";
          position:absolute;
          inset:0 0 auto;
          height:4px;
          background:linear-gradient(90deg, rgba(255,106,22,.16), rgba(255,79,56,.34), rgba(255,106,22,.08));
          z-index:0;
        }
        .price-card::after {
          content:"";
          position:absolute;
          inset:4px 0 auto;
          height:120px;
          background:linear-gradient(180deg, rgba(255,106,22,.05), transparent);
          pointer-events:none;
          z-index:0;
        }
        .price-card:hover { transform:translateY(-5px); box-shadow:0 30px 82px rgba(15,23,42,.13); border-color:rgba(255,106,22,.2); }
        .price-card.featured {
          background:
            linear-gradient(180deg, rgba(255,255,255,1), rgba(255,248,244,.96)),
            linear-gradient(135deg, rgba(255,106,22,.12), transparent 48%);
          border-color:rgba(255,106,22,.38);
          box-shadow:0 30px 90px rgba(255,106,22,.16), 0 16px 46px rgba(15,23,42,.08), inset 0 1px 0 rgba(255,255,255,.94);
          color:var(--text-1);
          transform:translateY(-8px);
        }
        .price-card.featured::before { height:5px; background:linear-gradient(90deg, rgba(255,106,22,.32), rgba(255,79,56,.42), rgba(255,106,22,.22)); }
        .price-card.featured:hover { transform:translateY(-11px); box-shadow:0 36px 96px rgba(255,106,22,.2), 0 18px 50px rgba(15,23,42,.09), inset 0 1px 0 rgba(255,255,255,.94); }
        .price-head { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; min-height:76px; }
        .price-badge {
          min-height:28px;
          display:inline-flex;
          align-items:center;
          flex:0 0 auto;
          padding:0 12px;
          border-radius:9999px;
          background:#fff;
          border:1px solid rgba(255,106,22,.26);
          box-shadow:0 10px 28px rgba(255,106,22,.13);
          color:var(--accent);
          font-size:.64rem;
          font-weight:850;
          letter-spacing:.08em;
          text-transform:uppercase;
          white-space:nowrap;
        }
        .price-tag { font-size:.72rem; font-weight:850; letter-spacing:.1em; text-transform:uppercase; color:var(--accent); }
        .price-best { margin-top:9px; color:var(--text-3); font-size:.82rem; line-height:1.45; max-width:250px; }
        .price-val { font-size:3.05rem; font-weight:850; letter-spacing:0; margin-top:18px; line-height:.95; color:var(--text-1); }
        .price-sub { font-size:.86rem; margin-top:6px; color:var(--text-3); }
        .price-desc { margin-top:16px; font-size:.9rem; line-height:1.62; color:var(--text-2); }
        .price-sep { height:1px; margin:22px 0 18px; background:linear-gradient(90deg, rgba(15,23,42,.09), rgba(15,23,42,.03), transparent); }
        .price-feat { display:flex; align-items:flex-start; gap:10px; font-size:.86rem; line-height:1.45; color:var(--text-2); }
        .price-check {
          width:20px;
          height:20px;
          border-radius:9999px;
          display:grid;
          place-items:center;
          flex-shrink:0;
          margin-top:1px;
          background:#fff3eb;
          border:1px solid rgba(255,106,22,.12);
          color:var(--accent);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.82);
          transition:background .22s ease, border-color .22s ease, color .22s ease, box-shadow .22s ease;
        }
        .price-check svg { width:10px; height:10px; }
        .price-card.featured .price-check { background:#fff1e8; border-color:rgba(255,106,22,.18); color:var(--accent); }
        .price-card:hover .price-check {
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
          box-shadow:0 8px 18px rgba(255,106,22,.22), inset 0 1px 0 rgba(255,255,255,.26);
        }
        .price-list { display:flex; flex-direction:column; gap:10px; flex:1; }
        .price-cta {
          display:flex;
          align-items:center;
          justify-content:center;
          height:48px;
          border-radius:14px;
          font-size:.88rem;
          font-weight:800;
          margin-top:24px;
          background:linear-gradient(180deg, #fff, #f8f6f3);
          border:1px solid rgba(15,23,42,.1);
          color:var(--text-1);
          transition:background .2s, transform .15s, border-color .2s, box-shadow .2s;
        }
        .price-cta:hover { transform:translateY(-1px); border-color:rgba(255,106,22,.24); box-shadow:0 14px 30px rgba(15,23,42,.1); }
        .price-card:hover .price-cta,
        .price-card.featured:hover .price-cta {
          background:linear-gradient(135deg, #ff6a16, #ff4f38);
          border-color:var(--accent);
          color:#fff;
          box-shadow:0 16px 34px rgba(255,106,22,.24), inset 0 1px 0 rgba(255,255,255,.26);
        }
        .price-card.featured .price-cta {
          background:linear-gradient(180deg, #fff, #fff6f0);
          border-color:rgba(255,106,22,.34);
          color:var(--accent);
          box-shadow:0 16px 34px rgba(255,106,22,.14), inset 0 1px 0 rgba(255,255,255,.82);
        }
        @media(max-width:640px){
          .pricing-sec { padding:42px 22px; }
          .pricing-note { align-items:flex-start; text-align:left; font-size:.82rem; }
          .pricing-grid { gap:18px; }
          .price-card { padding:26px 22px; border-radius:20px; }
          .price-card.featured,
          .price-card.featured:hover { transform:none; }
          .price-head { min-height:auto; }
          .price-badge { min-height:26px; padding:0 10px; font-size:.6rem; }
          .price-best { min-height:auto; }
          .price-val { font-size:2.5rem; }
        }
      `}</style>

      <div className="pricing-head">
        <p className="pricing-tag">Pricing</p>
        <h2 className="pricing-title">Simple, transparent pricing</h2>
        <p className="pricing-desc">One-time payment. No subscriptions. No hidden fees.</p>
        <div className="pricing-note">
          <Icon name="sparkles" />
          <span>All plans include mobile-ready design, WhatsApp CTA, live preview, 1-year included web address, SSL, and 1 week post-publish content issue support.</span>
        </div>
      </div>

      <div className="pricing-grid">
        <PriceCard
          title="Starter"
          price={pricing.starter}
          bestFor="Best for a simple business website launch."
          desc="A clean starter website using a classic design, ready for essential business enquiries."
          features={["Classic website design", "Basic customization", "Up to 4 core sections", "Mobile-ready design", "WhatsApp/contact button", "Live preview before launch", "1-year included web address + SSL", "1 week content issue support"]}
        />
        <PriceCard
          title="Business"
          price={pricing.business}
          featured
          badge="Most popular"
          bestFor="Best for most local businesses and service brands."
          desc="A polished SPA-style business website with product catalog, WhatsApp order flow, and extra pages for key business details."
          features={["SPA-style website setup", "Standard customization", "Up to 6 homepage sections", "Up to 20 product catalog items", "WhatsApp order button support", "3 extra pages based on requirement", "Basic SEO setup", "1-year included web address + SSL", "1 week content issue support"]}
        />
        <PriceCard
          title="Pro"
          price={pricing.pro}
          bestFor="Best for brands that need a custom domain and long support."
          desc="A premium SPA-style website package with a larger product catalog, custom page planning, priority delivery, and extended guidance."
          features={["Advanced SPA-style website setup", "Advanced customization", "Up to 8 homepage sections", "Up to 50 product catalog items", "WhatsApp order button support", "4 different custom pages based on requirement", "Priority delivery", "Custom domain connection support", "1-year included web address + SSL", "3 months Sunday 1-hour support"]}
        />
      </div>
    </section>
  );
}

function PriceCard({ title, price, bestFor, desc, features = [], featured = false, badge = "" }) {
  return (
    <article className={`price-card ${featured ? "featured" : ""}`}>
      <div className="price-head">
        <div>
          <div className="price-tag">{title}</div>
          <p className="price-best">{bestFor}</p>
        </div>
        {badge && <span className="price-badge">{badge}</span>}
      </div>
      <div className="price-val">{price}</div>
      <div className="price-sub">one-time payment</div>
      <p className="price-desc">{desc}</p>
      <div className="price-sep" />
      <ul className="price-list">
        {features.map(ft => (
          <li key={ft} className="price-feat">
            <span className="price-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            {ft}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="focus-ring price-cta">
        Get started
      </Link>
    </article>
  );
}
