"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icons";

const NAV = [
  { href: "/",          label: "Home",      icon: "home" },
  { href: "/templates", label: "Templates", icon: "layout" },
  { href: "/#price",    label: "Pricing",   icon: "tag" },
  { href: "/contact",   label: "Contact",   icon: "phone" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href) => {
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  const LogoContent = () => (
    <>
      <img src="/logo2.svg" alt="" className="hdr-logo-img" />
      <span className="hdr-logo-text">
        <span className="hdr-logo-top">Web</span>
        <span className="hdr-logo-name">Launchy<span className="hdr-logo-fire">Fire</span></span>
      </span>
    </>
  );

  return (
    <>
      <style>{`
        .hdr {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(21,21,21,.08);
          box-shadow: 0 8px 28px rgba(21,21,21,.04);
          transition: box-shadow .3s;
        }
        .hdr.scrolled { box-shadow: 0 12px 36px rgba(21,21,21,.08); }
        .hdr-inner {
          max-width: 80rem; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 78px; padding: 0 34px;
        }

        /* ── Logo ── */
        .hdr-logo {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 12px 6px 6px;
          border-radius: 14px;
          text-decoration: none;
          transition: background .2s, box-shadow .2s, transform .18s;
        }
        .hdr-logo:hover {
          background: rgba(255,106,22,.05);
          box-shadow: 0 4px 20px rgba(255,106,22,.08);
          transform: translateY(-1px);
        }
        .hdr-logo-img {
          width: 44px; height: 44px;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(255,106,22,.18));
          transition: filter .25s, transform .25s;
        }
        .hdr-logo:hover .hdr-logo-img {
          filter: drop-shadow(0 6px 18px rgba(255,106,22,.3));
          transform: scale(1.05);
        }
        .hdr-logo-text {
          display: flex; flex-direction: column;
          line-height: 1; gap: 2px;
        }
        .hdr-logo-top {
          font-family: var(--font-inter), 'Inter', system-ui, sans-serif;
          font-size: .65rem;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--text-3);
        }
        .hdr-logo-name {
          font-family: var(--font-brand), 'Paytone One', system-ui, sans-serif;
          font-size: 1.18rem;
          font-weight: 400;
          letter-spacing: -.02em;
          color: var(--text-1);
        }
        .hdr-logo-fire {
          background: linear-gradient(135deg, #ff6a16 0%, #ff4f38 50%, #e9360c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* ── Nav ── */
        .hdr-nav {
          display: none;
          align-items: center;
          gap: 6px;
          padding: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,.56);
          border: 1px solid rgba(15,23,42,.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.78);
        }
        @media(min-width:768px){ .hdr-nav { display: flex; } }
        .hdr-link {
          min-height: 38px;
          padding: 0 13px;
          border-radius: 9999px;
          font-size: .855rem;
          font-weight: 760;
          color: var(--text-2);
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: color .18s, background .18s, box-shadow .18s, transform .18s;
        }
        .hdr-link svg {
          width: 16px; height: 16px;
          color: var(--text-3);
          transition: color .18s, transform .18s;
        }
        .hdr-link:hover {
          color: var(--text-1);
          background: rgba(255,255,255,.78);
          transform: translateY(-1px);
        }
        .hdr-link:hover svg { color: var(--accent); transform: scale(1.06); }
        .hdr-link.on {
          color: var(--text-1);
          font-weight: 850;
          background: #fff;
          box-shadow: 0 8px 18px rgba(15,23,42,.07);
        }
        .hdr-link.on svg { color: var(--accent); }
        .hdr-right { display: flex; align-items: center; gap: 12px; }
        .hdr-cta {
          height: 46px; padding: 0 22px; border-radius: 15px;
          background: var(--accent); color: #fff;
          font-size: .84rem; font-weight: 850;
          border: 1px solid rgba(255,255,255,.28); cursor: pointer;
          box-shadow: 0 14px 28px rgba(255,106,22,.24), inset 0 1px 0 rgba(255,255,255,.24);
          transition: background .2s, transform .15s, box-shadow .2s;
          display: none;
        }
        .hdr-cta:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(255,106,22,.3), inset 0 1px 0 rgba(255,255,255,.24);
        }
        .hdr-cta svg { width: 16px; height: 16px; }
        @media(min-width:640px){ .hdr-cta { display: inline-flex; align-items: center; gap: 6px; } }

        /* hamburger */
        .hdr-ham {
          width: 40px; height: 40px; border-radius: 10px;
          background: transparent; border: 1px solid var(--border);
          cursor: pointer; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 5px;
        }
        @media(min-width:768px){ .hdr-ham { display: none; } }
        .hdr-ham span {
          display: block; width: 18px; height: 1.5px;
          background: var(--text-1); border-radius: 2px;
          transition: transform .25s, opacity .15s;
        }

        /* mobile drawer */
        .drawer-overlay {
          position: fixed; inset: 0; z-index: 90;
          background: rgba(0,0,0,.25);
          backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity .3s;
        }
        .drawer-overlay.open { opacity: 1; pointer-events: auto; }

        .drawer {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 100;
          width: min(320px, 85vw);
          background: #fff;
          border-left: 1px solid var(--border);
          transform: translateX(100%);
          transition: transform .35s cubic-bezier(.4,0,.2,1);
          display: flex; flex-direction: column;
          padding: 24px;
        }
        .drawer.open { transform: translateX(0); }

        .drawer-link {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 16px; border-radius: 12px;
          font-size: .9375rem; font-weight: 500; color: var(--text-2);
          transition: background .15s, color .15s;
        }
        .drawer-link:hover { background: var(--surface); }
        .drawer-link.on { color: var(--accent); font-weight: 600; background: var(--accent-subtle); }
      `}</style>

      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        <div className="hdr-inner">
          <Link href="/" className="hdr-logo focus-ring">
            <LogoContent />
          </Link>

          <nav className="hdr-nav">
            {NAV.map(({ href, label, icon }) => (
              <Link key={href} href={href} className={`hdr-link focus-ring ${active(href) ? "on" : ""}`}>
                <Icon name={icon} />
                {label}
              </Link>
            ))}
          </nav>

          <div className="hdr-right">
            <Link href="/templates" className="hdr-cta focus-ring">
              <Icon name="search" />
              Find Template
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(v => !v)}
              className="hdr-ham focus-ring"
            >
              <span style={{
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div className={`drawer-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />

      {/* Drawer */}
      <div className={`drawer ${open ? "open" : ""}`} role="dialog" aria-modal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <span className="hdr-logo">
            <LogoContent />
          </span>
          <button
            onClick={() => setOpen(false)}
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: "var(--surface)", border: "1px solid var(--border)",
              cursor: "pointer", display: "grid", placeItems: "center",
              fontSize: "1.125rem", color: "var(--text-3)",
            }}
          >×</button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map(({ href, label, icon }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`drawer-link focus-ring ${active(href) ? "on" : ""}`}>
              <Icon name={icon} className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: "auto", paddingTop: 32 }}>
          <Link href="/templates" onClick={() => setOpen(false)}
            className="btn btn-primary focus-ring"
            style={{ width: "100%", height: 48 }}>
            <Icon name="search" className="h-4 w-4" />
            Find Template
          </Link>
        </div>
      </div>
    </>
  );
}
