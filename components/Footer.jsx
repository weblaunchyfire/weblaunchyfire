import Link from "next/link";

import { categories } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <style>{`
        .ft { border-top:1px solid var(--border); background:#fafafa; }
        .ft-inner { max-width:1200px; margin:0 auto; padding:48px 24px 24px; }
        .ft-grid { display:grid; gap:40px; }
        @media(min-width:768px){ .ft-grid { grid-template-columns:2fr 1fr 1fr; } }

        /* ── Footer Logo ── */
        .ft-brand {
          display:flex; align-items:center; gap:10px;
          margin-bottom:16px;
        }
        .ft-brand-img {
          width:48px; height:48px;
          object-fit:contain;
          filter: drop-shadow(0 4px 12px rgba(255,106,22,.16));
        }
        .ft-brand-text {
          display:flex; flex-direction:column;
          line-height:1; gap:2px;
        }
        .ft-brand-top {
          font-family: var(--font-inter), 'Inter', system-ui, sans-serif;
          font-size:.6rem; font-weight:600;
          letter-spacing:.1em; text-transform:uppercase;
          color:var(--text-3);
        }
        .ft-brand-name {
          font-family: var(--font-brand), 'Paytone One', system-ui, sans-serif;
          font-size:1.1rem; font-weight:400;
          letter-spacing:-.02em; color:var(--text-1);
        }
        .ft-brand-fire {
          background:linear-gradient(135deg, #ff6a16 0%, #ff4f38 50%, #e9360c 100%);
          -webkit-background-clip:text; background-clip:text;
          color:transparent;
        }

        .ft-desc { font-size:.875rem; line-height:1.7; color:var(--text-3); max-width:280px; }
        .ft-col-title { font-size:.75rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:var(--text-3); margin-bottom:16px; }
        .ft-link { display:block; font-size:.875rem; color:var(--text-2); padding:4px 0; transition:color .15s; }
        .ft-link:hover { color:var(--text-1); }
        .ft-bottom {
          border-top:1px solid var(--border);
          padding:20px 0 0;
          margin-top:40px;
          display:flex; flex-wrap:wrap; justify-content:space-between; gap:12px;
          font-size:.8125rem; color:var(--text-3);
        }
        .ft-fine { color:var(--text-3); transition:color .15s; }
        .ft-fine:hover { color:var(--text-2); }
      `}</style>

      <div className="ft">
        <div className="ft-inner">
          <div className="ft-grid">
            {/* Brand */}
            <div>
              <div className="ft-brand">
                <img src="/logo2.svg" alt="" className="ft-brand-img" />
                <span className="ft-brand-text">
                  <span className="ft-brand-top">Web</span>
                  <span className="ft-brand-name">Launchy<span className="ft-brand-fire">Fire</span></span>
                </span>
              </div>
              <p className="ft-desc">
                Premium website templates for local businesses. Pick, preview, go live.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="ft-col-title">Product</p>
              {[
                { href: "/templates", label: "Templates" },
                { href: "/#price", label: "Pricing" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="ft-link focus-ring">{label}</Link>
              ))}
            </div>

            {/* Categories */}
            <div>
              <p className="ft-col-title">Categories</p>
              {categories.map(c => (
                <Link key={c.id} href={`/templates?category=${c.id}`} className="ft-link focus-ring">{c.name}</Link>
              ))}
            </div>
          </div>

          <div className="ft-bottom">
            <span>Copyright 2026 Web Launchy Fire</span>
            <div style={{ display: "flex", gap: 20 }}>
              <Link href="/privacy" className="ft-fine focus-ring">Privacy</Link>
              <Link href="/terms" className="ft-fine focus-ring">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
