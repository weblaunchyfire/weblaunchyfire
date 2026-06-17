import { makeFaqJsonLd } from "@/lib/seo";

const faqs = [
  { q: "What is Web Launchy Fire?", a: "Web Launchy Fire is a web studio that helps small businesses launch professional, mobile-ready websites within 48 hours. Choose a website style, customize it, preview live, and go live." },
  { q: "How much does a website cost?", a: "Web Launchy Fire has three one-time website plans: Starter ₹2,999, Business ₹4,999, and Pro ₹9,999. There are no monthly subscriptions or hidden fees." },
  { q: "Do I need coding knowledge?", a: "No coding is needed. Web Launchy Fire handles all the design, customization, and launch. You just pick a website, share your business details, and we build it for you." },
  { q: "How fast can my website go live?", a: "Your website can go live within 48 hours after you share your business details and content via WhatsApp." },
  { q: "Can I customize the website design?", a: "Yes! You can preview websites live, change colors, fonts, and layouts before finalizing. Web Launchy Fire offers full customization for every business type." },
  { q: "Can I upgrade my plan later?", a: "Yes, you can easily upgrade later. If your business needs more pages, product catalog items, custom sections, or extra support, we can move you to a higher plan." },
  { q: "Which locations do you serve?", a: "Web Launchy Fire works with businesses all over India, including West Bengal, Kolkata, Malda, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Ahmedabad, Jaipur, and other cities." },
  { q: "Can I resell Web Launchy Fire websites or products?", a: "Reselling is not allowed automatically. Please contact us first for permission, partner terms, and resale approval before offering Web Launchy Fire websites or products to your customers." },
];

export default function FaqSection({ compact = false }) {
  return (
    <section className={`faq-sec ${compact ? "faq-sec-compact" : ""}`}>
      <style>{`
        .faq-sec { max-width:80rem; margin:0 auto; padding:80px 24px; }
        .faq-sec-compact { padding-top:0; }
        .faq-head { text-align:center; margin-bottom:48px; }
        .faq-tag {
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
        .faq-title {
          margin-top:10px;
          font-size:clamp(1.5rem, 3vw, 2.25rem);
          font-weight:700;
          letter-spacing:-.03em;
          color:var(--text-1);
        }
        .faq-list {
          max-width:760px;
          margin:0 auto;
          display:flex;
          flex-direction:column;
          gap:16px;
        }
        .faq-item {
          padding:20px 24px;
          border-radius:14px;
          background:var(--surface);
          border:1px solid var(--border);
          cursor:pointer;
        }
        .faq-summary {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          list-style:none;
          font-weight:700;
          font-size:1rem;
          color:var(--text-1);
        }
        .faq-summary::-webkit-details-marker { display:none; }
        .faq-plus { color:var(--text-3); font-size:1.25rem; }
        .faq-answer { margin-top:12px; font-size:.9375rem; line-height:1.7; color:var(--text-2); }
        @media(max-width:640px){ .faq-sec { padding:42px 22px; } .faq-sec-compact { padding-top:0; padding-bottom:56px; } }
      `}</style>

      <div className="faq-head">
        <p className="faq-tag">FAQ</p>
        <h2 className="faq-title">Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map(({ q, a }) => (
          <details key={q} className="faq-item">
            <summary className="faq-summary">
              {q}
              <span className="faq-plus">+</span>
            </summary>
            <p className="faq-answer">{a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            makeFaqJsonLd(faqs.map(({ q, a }) => ({ question: q, answer: a })))
          ),
        }}
      />
    </section>
  );
}
