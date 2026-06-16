import Link from "next/link";
import EasyStart from "@/components/EasyStart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroVideoBadge from "@/components/HeroVideoBadge";
import TemplateCard from "@/components/TemplateCard";
import { Icon } from "@/components/Icons";
import { pricing, templates } from "@/data/site";
import {
  builderKeywords,
  commerceKeywords,
  locationKeywords,
  makeFaqJsonLd,
  makeSeoMetadata,
  platformAlternativeKeywords,
  pricingKeywords,
} from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Web Launchy Fire - Website Builder and Custom Website Launch Platform",
  description:
    "Create a custom business website with Web Launchy Fire. Choose a design, customize colors, fonts, language, and content, preview live, and launch in 48 hours.",
  path: "/",
  keywords: [
    ...builderKeywords,
    ...locationKeywords,
    ...pricingKeywords,
    ...commerceKeywords,
    ...platformAlternativeKeywords,
    "clinic website builder",
    "restaurant website builder",
    "salon website builder",
    "fitness website builder",
    "ecommerce website builder India",
    "low price website design near me",
  ],
});

export default function Home() {
  const featured = templates.slice(0, 3);

  return (
    <>
      <Header />
      <style>{`
        /* ── hero ── */
        .hero {
          position:relative;
          isolation:isolate;
          width:100%;
          max-width:78rem;
          margin:0 auto;
          min-height:calc(100dvh - 84px);
          padding:58px 24px 50px;
          display:grid;
          place-items:center;
          text-align:center;
        }
        .hero:before {
          content:"";
          position:absolute;
          inset:0;
          z-index:-1;
          background:
            radial-gradient(circle at 70% 50%, rgba(255,106,22,.12), transparent 20%),
            linear-gradient(120deg, transparent 0 58%, rgba(255,106,22,.08) 58% 59%, transparent 59% 100%);
          mask-image:linear-gradient(180deg, #000 0%, #000 74%, transparent 100%);
          pointer-events:none;
        }
        @media(min-width:1024px){
          .hero {
            padding:66px 44px 56px;
          }
        }
        .hero-copy { width:100%; max-width:1260px; margin:0 auto; }
        .hero .badge {
          background:rgba(255,255,255,.72);
          border:1px solid rgba(21,21,21,.1);
          color:#6b6b6b;
          backdrop-filter:blur(18px);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.8), 0 10px 24px rgba(21,21,21,.07);
          margin-left:auto;
          margin-right:auto;
        }

        .hero-h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 3.24rem;
          font-weight: 900;
          line-height: .96;
          letter-spacing: 0;
          color: var(--text-1);
        }
        @media(min-width:768px){ .hero-h1 { font-size: 5.15rem; } }
        @media(min-width:1180px){ .hero-h1 { font-size: 6.6rem; } }
        .hero-p {
          margin: 22px auto 0;
          font-size: 1.16rem;
          line-height: 1.65;
          color: var(--text-2);
          max-width: 660px;
        }
        .hero-actions { display:flex; flex-wrap:wrap; justify-content:center; gap:14px; margin-top:26px; }
        .hero-actions .btn { min-width:204px; border-radius:10px; }
        .hero-actions .btn-primary {
          position:relative;
          overflow:hidden;
          background:var(--accent);
          box-shadow:0 16px 34px rgba(255,106,22,.28), 0 0 0 0 rgba(255,106,22,.24), inset 0 1px 0 rgba(255,255,255,.25);
          animation:easyStartBell 2.8s ease-in-out infinite, easyStartPulse 2.8s ease-in-out infinite;
        }
        .hero-actions .btn-primary:before {
          content:"";
          position:absolute;
          inset:-2px;
          background:linear-gradient(110deg, transparent 0%, transparent 34%, rgba(255,255,255,.38) 46%, rgba(255,255,255,.08) 54%, transparent 66%, transparent 100%);
          transform:translateX(-115%);
          animation:easyStartShine 3.2s ease-in-out infinite;
          pointer-events:none;
        }
        .hero-actions .btn-primary > * {
          position:relative;
          z-index:1;
        }
        .hero-actions .btn-primary svg {
          animation:easyStartSpark 1.9s ease-in-out infinite;
        }
        .hero-actions .btn-secondary {
          background:rgba(255,255,255,.86);
          border-color:rgba(21,21,21,.1);
          backdrop-filter:blur(18px);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.75), 0 10px 26px rgba(21,21,21,.07);
        }
        .trust-row { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin:18px auto 0; max-width:680px; }
        .trust-pill {
          display:inline-flex; align-items:center; gap:8px;
          min-height:36px; padding:8px 12px;
          border-radius:9999px; background:rgba(255,255,255,.66);
          border:1px solid rgba(21,21,21,.08);
          backdrop-filter:blur(18px);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.75);
          color:var(--text-2); font-size:.78rem; font-weight:600;
        }
        .trust-icon {
          width:18px;
          height:18px;
          display:grid;
          place-items:center;
          border-radius:9999px;
          color:var(--accent);
          background:var(--accent-subtle);
          box-shadow:inset 0 0 0 1px rgba(255,106,22,.12);
        }
        .trust-icon svg { width:12px; height:12px; }
        @keyframes easyStartPulse {
          0%, 100% { box-shadow:0 16px 34px rgba(255,106,22,.28), 0 0 0 0 rgba(255,106,22,.24), inset 0 1px 0 rgba(255,255,255,.25); filter:saturate(1); }
          10% { box-shadow:0 18px 42px rgba(255,106,22,.46), 0 0 0 8px rgba(255,106,22,.14), inset 0 1px 0 rgba(255,255,255,.38); filter:saturate(1.14) brightness(1.05); }
          20%, 42% { box-shadow:0 16px 34px rgba(255,106,22,.3), 0 0 0 0 rgba(255,106,22,0), inset 0 1px 0 rgba(255,255,255,.25); filter:saturate(1); }
          52% { box-shadow:0 18px 42px rgba(255,106,22,.42), 0 0 0 7px rgba(255,106,22,.12), inset 0 1px 0 rgba(255,255,255,.36); filter:saturate(1.1) brightness(1.04); }
        }
        @keyframes easyStartShine {
          0%, 38% { transform:translateX(-115%); }
          58%, 100% { transform:translateX(115%); }
        }
        @keyframes easyStartSpark {
          0%, 100% { transform:rotate(0deg) scale(1); }
          45% { transform:rotate(10deg) scale(1.14); }
          70% { transform:rotate(-6deg) scale(1.04); }
        }
        @keyframes easyStartBell {
          0%, 72%, 100% { transform:translateX(0) rotate(0deg); }
          6% { transform:translateX(-2px) rotate(-1.2deg); }
          10% { transform:translateX(3px) rotate(1.4deg); }
          14% { transform:translateX(-2px) rotate(-.9deg); }
          18% { transform:translateX(1px) rotate(.5deg); }
          22% { transform:translateX(0) rotate(0deg); }
        }

        /* hero image */
        .hero-visual { position:relative; display:none; margin-top:38px; }
        @media(min-width:1024px){ .hero-visual { margin-top:0; } }

        .hero-browser {
          border-radius: 18px;
          overflow: hidden;
          background:rgba(255,255,255,.52);
          border:1px solid rgba(255,255,255,.72);
          backdrop-filter:blur(22px);
          box-shadow:0 34px 90px rgba(51,45,103,.18), inset 0 1px 0 rgba(255,255,255,.85);
          max-width:690px;
          width:min(54vw, 690px);
          margin-left:auto;
        }
        .hero-browser-bar {
          height: 36px; display:flex; align-items:center; gap:6px;
          padding: 0 14px;
          background:rgba(255,255,255,.46);
          border-bottom:1px solid rgba(15,23,42,.08);
        }
        .hero-browser-dot {
          width:8px; height:8px; border-radius:9999px;
        }
        .hero-browser-img {
          width:100%; height:376px;
          display:grid; gap:12px; padding:14px;
          grid-template-columns:minmax(0, 1.35fr) minmax(160px, .65fr);
          background:linear-gradient(135deg, rgba(255,255,255,.65), rgba(244,246,255,.56));
        }
        .hero-template-main,
        .hero-template-mini {
          position:relative; overflow:hidden; border-radius:14px;
          background-size:cover; background-position:center;
          border:1px solid rgba(255,255,255,.48);
          box-shadow:0 18px 38px rgba(24,28,62,.18);
        }
        .hero-template-main:after,
        .hero-template-mini:after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(180deg, transparent 35%, rgba(7,10,22,.72) 100%);
        }
        .hero-template-main { min-height:348px; }
        .hero-template-side { display:grid; gap:12px; }
        .hero-template-mini { min-height:168px; }
        .hero-template-label {
          position:absolute; left:14px; right:14px; bottom:14px; z-index:1;
          color:#fff; font-weight:800; letter-spacing:-.02em;
        }
        .hero-template-label span {
          display:block; margin-top:3px;
          font-size:.72rem; font-weight:600; letter-spacing:0;
          color:rgba(255,255,255,.68);
        }
        @media(max-width:640px){
          .hero { margin:0 auto; min-height:calc(100dvh - 78px); padding:30px 18px 34px; }
          .hero-h1 { font-size:2.82rem; line-height:.99; }
          .hero-p { margin-top:18px; font-size:.94rem; line-height:1.62; }
          .hero-actions {
            width:min(100%, 390px);
            margin:22px auto 0;
            display:grid;
            grid-template-columns:1fr;
            gap:12px;
          }
          .hero-actions .btn {
            width:100%;
            min-width:0;
            height:54px;
            border-radius:14px;
            font-size:.95rem;
          }
          .hero-actions .btn-primary {
            box-shadow:0 12px 26px rgba(255,106,22,.24), inset 0 1px 0 rgba(255,255,255,.25);
          }
          .hero-actions .btn-secondary {
            box-shadow:inset 0 1px 0 rgba(255,255,255,.82), 0 8px 22px rgba(21,21,21,.06);
          }
          .trust-row { margin-top:20px; }
          .trust-pill { min-height:34px; padding:7px 10px; font-size:.74rem; }
          .hero-visual { width:100%; margin-top:32px; }
          .hero-browser { width:100%; max-width:none; margin-left:0; border-radius:16px; }
          .hero-browser-img { grid-template-columns:1fr; height:auto; padding:10px; gap:10px; }
          .hero-template-main { min-height:238px; }
          .hero-template-side { grid-template-columns:1fr 1fr; }
          .hero-template-mini { min-height:118px; }
          .hero-float-card { display:none; }
          .sec { padding:42px 22px; }
        }

        /* floating cards around hero image */
        .hero-float-card {
          position:absolute;
          background:rgba(255,255,255,.72);
          border:1px solid rgba(255,255,255,.78);
          backdrop-filter:blur(18px);
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 18px 42px rgba(15,23,42,.14), inset 0 1px 0 rgba(255,255,255,.82);
          z-index:2;
        }

        /* ── sections shared ── */
        .sec { max-width:80rem; margin:0 auto; padding:80px 24px; }
        .sec-head { margin-bottom:48px; }
        .sec-head-split { display:flex; align-items:flex-end; justify-content:space-between; gap:16px; margin-bottom:48px; }
        .sec-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700; letter-spacing: -0.03em;
          color: var(--text-1);
        }
        .sec-desc { font-size:1rem; color:var(--text-2); margin-top:12px; max-width:480px; line-height:1.7; }

        .view-link {
          font-size:.875rem; font-weight:600; color:var(--accent);
          display:inline-flex; align-items:center; gap:4px;
          transition:opacity .2s; flex-shrink:0;
        }
        .view-link:hover { opacity:.7; }

        /* grid */
        .grid-3 { display:grid; gap:20px; }
        @media(min-width:768px){ .grid-3 { grid-template-columns:repeat(3,1fr); } }

        /* ── how it works ── */
        .step-card {
          padding:32px;
          border-radius: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          transition: transform .3s, box-shadow .3s;
        }
        .step-card:hover { transform:translateY(-3px); box-shadow:var(--shadow-md); }
        .step-num {
          font-size:3rem; font-weight:800;
          color: rgba(255,106,22,.12);
          letter-spacing:0; line-height:1;
          margin-bottom:20px;
        }
        .step-title { font-size:1.0625rem; font-weight:600; color:var(--text-1); margin-bottom:8px; }
        .step-desc { font-size:.875rem; line-height:1.7; color:var(--text-2); }

        /* ── pricing ── */
        .price-card {
          position:relative;
          padding: 32px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid var(--border);
          display:flex; flex-direction:column;
          transition: transform .3s, box-shadow .3s;
        }
        .price-card:hover { transform:translateY(-3px); box-shadow:var(--shadow-lg); }
        .price-card.featured {
          background: var(--accent);
          border-color: transparent;
          box-shadow: 0 16px 48px rgba(255,106,22,.3);
          color:#fff;
        }
        .price-card.featured:hover { box-shadow: 0 20px 60px rgba(255,106,22,.4); }
        .price-tag { font-size:.75rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; }
        .price-val { font-size:2.5rem; font-weight:800; letter-spacing:0; margin-top:16px; line-height:1; }
        .price-sub { font-size:.875rem; margin-top:4px; }
        .price-sep { height:1px; margin:20px 0; }
        .price-feat { display:flex; align-items:center; gap:10px; font-size:.875rem; }
        .price-check {
          width:18px; height:18px; border-radius:9999px;
          display:grid; place-items:center; flex-shrink:0;
        }
        .price-cta {
          display:flex; align-items:center; justify-content:center;
          height:44px; border-radius:12px;
          font-size:.875rem; font-weight:600;
          margin-top:24px; transition: background .2s, transform .15s;
        }
        .price-cta:hover { transform:translateY(-1px); }

        /* ── cta band ── */
        .cta-band {
          max-width:1100px; margin:0 auto 80px;
          padding: 64px 40px;
          border-radius: 24px;
          background: var(--accent);
          color: #fff; text-align:center;
          position:relative; overflow:hidden;
        }
        .cta-band-glow {
          position:absolute; inset:0;
          background: radial-gradient(ellipse 50% 70% at 50% -10%, rgba(255,255,255,.12) 0%, transparent 60%);
          pointer-events:none;
        }
      `}</style>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="hero">
          <div className="anim-up hero-copy">
            <div style={{ marginBottom: 16 }}>
              <HeroVideoBadge />
            </div>

            <h1 className="hero-h1">
              <span className="hero-h1-main">Build Your Custom</span><br />
              <span className="grad-text">Business Website.</span>
            </h1>

            <p className="hero-p">
              Indian website builder for small businesses. Choose a template, customize it, preview live, and launch your website within 48 hours.
            </p>

            <div className="hero-actions">
              <EasyStart />
              <Link href="/templates" className="btn btn-secondary btn-lg focus-ring">
                <Icon name="eye" className="h-4 w-4" />
                Preview Websites
              </Link>
            </div>

            <div className="trust-row" aria-label="Web Launchy Fire benefits">
              {[
                { label: "Mobile-first", icon: "smartphone" },
                { label: "48-hour delivery", icon: "clock" },
                { label: "WhatsApp support", icon: "phone" },
                { label: "One-time pricing", icon: "tag" },
              ].map(item => (
                <span key={item.label} className="trust-pill">
                  <span className="trust-icon" aria-hidden="true">
                    <Icon name={item.icon} />
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual anim-up" style={{ animationDelay: ".1s" }}>
            <div className="hero-browser">
              <div className="hero-browser-bar">
                <span className="hero-browser-dot" style={{ background: "#ff5f57" }} />
                <span className="hero-browser-dot" style={{ background: "#febc2e" }} />
                <span className="hero-browser-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="hero-browser-img">
                <div className="hero-template-main">
                  <img src={featured[0].image} alt={`${featured[0].name} - premium business website template`} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="hero-template-label">
                    {featured[0].name}
                    <span>Premium business website</span>
                  </div>
                </div>
                <div className="hero-template-side">
                  {featured.slice(1, 3).map(item => (
                    <div key={item.id} className="hero-template-mini">
                      <img src={item.image} alt={`${item.name} - customizable website builder design`} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      <div className="hero-template-label">
                        {item.name}
                        <span>{item.style}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── divider ── */}
        <div className="divider" style={{ maxWidth: 1200, margin: "0 auto" }} />

        {/* ═══ FEATURED TEMPLATES ═══ */}
        <section className="sec" id="templates">
          <div className="sec-head-split">
            <div>
              <p className="section-tag" style={{ marginBottom: 8 }}>Templates</p>
              <h2 className="sec-title">Start with a ready design</h2>
              <p className="sec-desc">
                Preview a few popular business website templates, then choose one to customize for your brand.
              </p>
            </div>
            <Link href="/templates" className="view-link focus-ring">
              View all
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid-3">
            {featured.map((template, index) => (
              <TemplateCard key={template.id} template={template} recommended={index === 0} />
            ))}
          </div>
        </section>

        {/* ═══ PRICING ═══ */}
        <section id="price" className="sec">
          <div className="sec-head" style={{ textAlign: "center" }}>
            <p className="section-tag" style={{ marginBottom: 8 }}>Pricing</p>
            <h2 className="sec-title">Simple, transparent pricing</h2>
            <p className="sec-desc" style={{ margin: "12px auto 0" }}>
              One-time payment. No subscriptions. No hidden fees.
            </p>
          </div>
          <div className="grid-3" style={{ maxWidth: 900, margin: "0 auto" }}>
            <PriceCard title="Preview" price={pricing.preview}
              desc="See your template live before you buy."
              features={["Live preview", "Category filters", "Font & colour pick", "WhatsApp support"]}
            />
            <PriceCard title="Website" price={pricing.basic} featured
              desc="Your business website, ready to launch."
              features={["Everything in Preview", "Content setup", "Mobile-first", "48hr delivery", "1 revision"]}
            />
            <PriceCard title="Premium" price={pricing.pro}
              desc="Extra polish, priority delivery."
              features={["Everything in Website", "Extra sections", "Animations", "Priority delivery", "3 revisions"]}
            />
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="sec">
          <div className="sec-head" style={{ textAlign: "center" }}>
            <p className="section-tag" style={{ marginBottom: 8 }}>FAQ</p>
            <h2 className="sec-title">Frequently asked questions</h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "What is Web Launchy Fire?", a: "Web Launchy Fire is an Indian website builder platform that helps small businesses launch professional, mobile-ready websites within 48 hours. Choose a template, customize it, and go live." },
              { q: "How much does a website cost?", a: "Web Launchy Fire offers affordable one-time pricing with no monthly subscriptions. Plans start from preview (free) to premium packages. Check our pricing section for details." },
              { q: "Do I need coding knowledge?", a: "No coding is needed. Web Launchy Fire handles all the design, customization, and launch. You just pick a template, share your business details, and we build it for you." },
              { q: "How fast can my website go live?", a: "Your website can go live within 48 hours after you share your business details and content via WhatsApp." },
              { q: "Can I customize the website design?", a: "Yes! You can preview templates live, change colors, fonts, and layouts before finalizing. Web Launchy Fire offers full customization for every business type." },
              { q: "Do you build websites for businesses in Kolkata and Malda?", a: "Yes, Web Launchy Fire serves businesses across India including Kolkata, Malda, and all other cities. We offer affordable website design services for local businesses." },
            ].map(({ q, a }) => (
              <details key={q} style={{
                padding: "20px 24px",
                borderRadius: 14,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }}>
                <summary style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text-1)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {q}
                  <span style={{ fontSize: "1.25rem", color: "var(--text-3)", marginLeft: 16 }}>+</span>
                </summary>
                <p style={{ marginTop: 12, fontSize: ".9375rem", lineHeight: 1.7, color: "var(--text-2)" }}>{a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                makeFaqJsonLd([
                  { question: "What is Web Launchy Fire?", answer: "Web Launchy Fire is an Indian website builder platform that helps small businesses launch professional, mobile-ready websites within 48 hours. Choose a template, customize it, and go live." },
                  { question: "How much does a website cost?", answer: "Web Launchy Fire offers affordable one-time pricing with no monthly subscriptions. Plans start from preview (free) to premium packages. Check our pricing section for details." },
                  { question: "Do I need coding knowledge?", answer: "No coding is needed. Web Launchy Fire handles all the design, customization, and launch. You just pick a template, share your business details, and we build it for you." },
                  { question: "How fast can my website go live?", answer: "Your website can go live within 48 hours after you share your business details and content via WhatsApp." },
                  { question: "Can I customize the website design?", answer: "Yes! You can preview templates live, change colors, fonts, and layouts before finalizing. Web Launchy Fire offers full customization for every business type." },
                  { question: "Do you build websites for businesses in Kolkata and Malda?", answer: "Yes, Web Launchy Fire serves businesses across India including Kolkata, Malda, and all other cities. We offer affordable website design services for local businesses." },
                ])
              ),
            }}
          />
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section style={{ padding: "0 24px" }}>
          <div className="cta-band">
            <div className="cta-band-glow" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 12 }}>
                Ready to launch?
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.75)", lineHeight: 1.7, maxWidth: 400, margin: "0 auto 32px" }}>
                Browse templates, preview live, and get your website online in 48 hours.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/templates" className="btn focus-ring"
                  style={{ height: 48, padding: "0 28px", background: "#fff", color: "var(--accent)", fontWeight: 700 }}>
                  Browse Templates
                </Link>
                <Link href="/contact" className="btn focus-ring"
                  style={{ height: 48, padding: "0 28px", background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)", color: "#fff" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ── Price Card ── */
function PriceCard({ title, price, desc, features = [], featured = false }) {
  const f = featured;
  return (
    <article className={`price-card ${f ? "featured" : ""}`}>
      {f && (
        <span style={{
          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
          padding: "5px 14px", borderRadius: 9999,
          background: "rgba(255,255,255,.2)", border: "1px solid rgba(255,255,255,.3)",
          fontSize: ".7rem", fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap",
        }}>
          Most popular
        </span>
      )}
      <div className="price-tag" style={{ color: f ? "rgba(255,255,255,.7)" : "var(--accent)" }}>{title}</div>
      <div className="price-val" style={{ color: f ? "#fff" : "var(--text-1)" }}>{price}</div>
      <div className="price-sub" style={{ color: f ? "rgba(255,255,255,.6)" : "var(--text-3)" }}>one-time payment</div>
      <p style={{ marginTop: 16, fontSize: ".875rem", lineHeight: 1.65, color: f ? "rgba(255,255,255,.7)" : "var(--text-2)" }}>{desc}</p>
      <div className="price-sep" style={{ background: f ? "rgba(255,255,255,.15)" : "var(--border)" }} />
      <ul style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {features.map(ft => (
          <li key={ft} className="price-feat" style={{ color: f ? "rgba(255,255,255,.85)" : "var(--text-2)" }}>
            <span className="price-check" style={{ background: f ? "rgba(255,255,255,.2)" : "var(--accent-subtle)" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={f ? "#fff" : "var(--accent)"} strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            {ft}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`focus-ring price-cta`}
        style={f
          ? { background: "rgba(255,255,255,.18)", border: "1px solid rgba(255,255,255,.3)", color: "#fff" }
          : { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-1)" }
        }>
        Get started
      </Link>
    </article>
  );
}
