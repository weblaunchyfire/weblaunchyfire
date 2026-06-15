"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { categories, getCategory, getTemplates } from "@/data/site";
import { Icon } from "@/components/Icons";

export default function EasyStart({ label = "Easy Start" }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [mounted, setMounted] = useState(false);

  const category = useMemo(() => (categoryId ? getCategory(categoryId) : null), [categoryId]);

  useEffect(() => {
    setMounted(true);
  }, []);

  function close() {
    setOpen(false);
    setCategoryId("");
  }

  function pick(subId) {
    router.push(`/templates?category=${category.id}&subcategory=${subId}&guided=1`);
    close();
  }

  return (
    <>
      <style>{`
        .start-overlay {
          position:fixed; inset:0; z-index:1000;
          background:rgba(10,15,28,.42);
          backdrop-filter:blur(10px);
        }
        .start-modal {
          position:fixed; z-index:1001;
          top:50%; left:50%; transform:translate(-50%,-50%);
          width:min(920px, calc(100vw - 28px));
          max-height:calc(100dvh - 28px);
          overflow:auto;
          background:#fff;
          border:1px solid rgba(15,23,42,.08);
          border-radius:22px;
          box-shadow:0 32px 100px rgba(15,23,42,.28);
          animation:startModalIn .22s ease both;
        }
        @keyframes startModalIn {
          from { opacity:0; transform:translate(-50%,-48%) scale(.98); }
          to { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        .start-main { padding:26px; }
        .start-close {
          width:42px; height:42px; border-radius:14px;
          background:var(--surface); border:1px solid var(--border);
          cursor:pointer; display:grid; place-items:center;
          color:var(--text-2); font-size:1rem;
          flex:0 0 auto;
        }
        .start-head {
          display:flex;
          justify-content:space-between;
          gap:18px;
          align-items:flex-start;
          margin-bottom:18px;
        }
        .start-head-copy { max-width:620px; }
        .start-progress { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:min(380px, 100%); margin:0 0 16px; }
        .start-progress span { height:4px; border-radius:9999px; background:var(--surface-2); }
        .start-progress span.on { background:var(--accent); }
        .start-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; }
        .start-option {
          min-height:76px;
          display:grid; grid-template-columns:38px 1fr 18px; align-items:center; gap:11px;
          padding:11px 12px; border-radius:14px;
          background:#fff; border:1px solid rgba(15,23,42,.08);
          box-shadow:0 8px 24px rgba(15,23,42,.04);
          cursor:pointer; text-align:left;
          transition:transform .2s, border-color .2s, box-shadow .2s;
        }
        .start-option:hover {
          transform:translateY(-2px);
          border-color:rgba(255,106,22,.35);
          box-shadow:0 16px 36px rgba(15,23,42,.08);
        }
        .start-icon {
          width:38px; height:38px; border-radius:12px;
          background:var(--accent-subtle);
          display:grid; place-items:center;
          color:var(--accent);
        }
        .start-option-title {
          display:block;
          font-size:.9rem;
          font-weight:850;
          color:var(--text-1);
          line-height:1.15;
        }
        .start-option-subtitle {
          display:-webkit-box;
          margin-top:5px;
          color:var(--text-3);
          font-size:.7rem;
          line-height:1.28;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
        .start-arrow {
          color:var(--text-3);
          font-weight:900;
          justify-self:end;
        }
        .start-niches { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
        .start-niche {
          min-height:84px;
          display:grid;
          grid-template-columns:38px 1fr 18px;
          align-items:center;
          gap:11px;
          padding:12px;
          border-radius:16px;
          background:#fff;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 8px 24px rgba(15,23,42,.04);
          cursor:pointer; text-align:left;
          transition:transform .2s, border-color .2s, box-shadow .2s;
        }
        .start-niche:hover {
          transform:translateY(-2px);
          border-color:rgba(255,106,22,.35);
          box-shadow:0 16px 34px rgba(15,23,42,.08);
        }
        .start-niche-icon {
          width:38px;
          height:38px;
          border-radius:12px;
          display:grid;
          place-items:center;
          background:var(--accent-subtle);
          color:var(--accent);
        }
        .start-niche-title {
          display:block;
          color:var(--text-1);
          font-size:.92rem;
          font-weight:850;
          line-height:1.15;
        }
        .start-niche-meta {
          display:block;
          margin-top:5px;
          color:var(--text-3);
          font-size:.72rem;
          line-height:1.35;
        }
        @media(max-width:760px){
          .start-modal { width:min(520px, calc(100vw - 24px)); }
          .start-main { padding:22px; }
          .start-head { gap:16px; margin-bottom:18px; }
          .start-progress { margin-bottom:18px; }
          .start-grid { grid-template-columns:1fr; }
          .start-option { min-height:78px; }
          .start-niches { grid-template-columns:1fr; }
        }
      `}</style>

      <button type="button" onClick={() => setOpen(true)} className="btn btn-primary btn-lg focus-ring">
        <Icon name="sparkles" className="h-4 w-4" />
        {label}
        <Icon name="arrow" className="h-4 w-4" />
      </button>

      {open && mounted && createPortal(
        <>
          <div className="start-overlay" onClick={close} />
          <div role="dialog" aria-modal className="start-modal">
            <section className="start-main">
              <div className="start-head">
                <div className="start-head-copy">
                  <div className="start-progress">
                    <span className="on" />
                    <span className={category ? "on" : ""} />
                  </div>
                  <p style={{ fontSize: ".72rem", fontWeight: 700, color: "var(--accent)", marginBottom: 6 }}>
                    Step {category ? "2" : "1"} of 2
                  </p>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-1)" }}>
                    {category ? `Choose a ${category.name} niche` : "Choose your business type"}
                  </h3>
                  <p style={{ fontSize: ".82rem", color: "var(--text-3)", marginTop: 5, lineHeight: 1.5 }}>
                    {category ? "We will open one perfect match directly, or show a focused set if there are multiple options." : "I will help you find the right website style first."}
                  </p>
                </div>
                <button type="button" onClick={close} className="start-close focus-ring" aria-label="Close">
                  x
                </button>
              </div>

              {!category && (
                <div className="start-grid">
                  {categories.map(item => (
                    <button key={item.id} type="button" onClick={() => setCategoryId(item.id)} className="start-option focus-ring">
                      <span className="start-icon">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="start-option-title">{item.name}</span>
                        <span className="start-option-subtitle">
                          {item.subcategories.map(s => s.name).join(" / ")}
                        </span>
                      </span>
                      <span className="start-arrow">-&gt;</span>
                    </button>
                  ))}
                </div>
              )}

              {category && (
                <>
                  <div className="start-niches">
                    {category.subcategories.map(sub => {
                      const count = getTemplates({ category: category.id, subcategory: sub.id }).length;
                      return (
                        <button key={sub.id} type="button" onClick={() => pick(sub.id)} className="start-niche focus-ring">
                          <span className="start-niche-icon">
                            <Icon name={category.icon} className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="start-niche-title">{sub.name}</span>
                            <span className="start-niche-meta">
                              {count === 1 ? "Open matched preview" : `${count} matched templates`}
                            </span>
                          </span>
                          <span className="start-arrow">-&gt;</span>
                        </button>
                      );
                    })}
                  </div>
                  <button type="button" onClick={() => setCategoryId("")}
                    style={{ marginTop: 18, fontSize: ".84rem", fontWeight: 700, color: "var(--accent)", background: "none", border: "none", cursor: "pointer" }}>
                    &lt;- Back to business types
                  </button>
                </>
              )}
            </section>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
