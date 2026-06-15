"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import TemplateCard from "@/components/TemplateCard";
import { Icon } from "@/components/Icons";
import { categories, getCategory, getSubcategoryName, getTemplates } from "@/data/site";

export default function TemplatesView() {
  const searchParams = useSearchParams();
  const [categoryId, setCategoryId] = useState(searchParams.get("category") || "");
  const [subcategoryId, setSubId] = useState(searchParams.get("subcategory") || "");
  const [goal, setGoal] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [closedDropdown, setClosedDropdown] = useState("");
  const [query, setQuery] = useState("");
  const guided = searchParams.get("guided") === "1";

  const category = categoryId ? getCategory(categoryId) : null;
  const subcategoryName = category && subcategoryId ? getSubcategoryName(categoryId, subcategoryId) : "";
  const selectedLabel = subcategoryName || category?.name || "Main";
  const goals = [
    { id: "leads", label: "WhatsApp Leads" },
    { id: "services", label: "Show Services" },
    { id: "booking", label: "Bookings" },
    { id: "selling", label: "Sell Products" },
    { id: "portfolio", label: "Portfolio" },
  ];
  const priceOptions = [
    { id: "low", label: "Low to High" },
    { id: "high", label: "High to Low" },
  ];
  const mainOptions = [
    ...categories.map(c => ({ id: c.id, label: c.name })),
  ];
  const typeOptions = category
    ? category.subcategories.map(s => ({ id: s.id, label: s.name }))
    : [{ id: "disabled", label: "Select Main first", disabled: true }];

  const readPrice = (price) => Number(String(price).replace(/[^\d]/g, "")) || 0;

  const templates = useMemo(() =>
    getTemplates({ category: categoryId, subcategory: subcategoryId })
      .filter(t => {
        if (guided) return true;
        const term = query.trim().toLowerCase();
        if (!term) return true;

        const categoryName = getCategory(t.category)?.name || "";
        const subcategoryName = getSubcategoryName(t.category, t.subcategory);
        return [
          t.name,
          t.style,
          t.tagline,
          categoryName,
          subcategoryName,
        ].some(value => value.toLowerCase().includes(term));
      })
      .filter(t => {
        if (!goal) return true;
        const text = `${t.category} ${t.subcategory} ${t.name} ${t.style} ${t.tagline}`.toLowerCase();
        const goalMatches = {
          leads: ["whatsapp", "leads", "enquiries", "order"],
          services: ["services", "profile", "menu", "plans", "timings"],
          booking: ["booking", "appointments", "doctor", "clinic", "restaurant"],
          selling: ["order", "products", "menu", "beauty", "salon"],
          portfolio: ["premium", "minimal", "polished", "brand"],
        };

        return goalMatches[goal]?.some(word => text.includes(word));
      })
      .sort((a, b) => {
        if (priceSort === "low") return readPrice(a.price) - readPrice(b.price);
        if (priceSort === "high") return readPrice(b.price) - readPrice(a.price);
        return 0;
      }),
    [categoryId, subcategoryId, query, guided, goal, priceSort]
  );

  const resetFilters = () => {
    setQuery("");
    setCategoryId("");
    setSubId("");
    setGoal("");
    setPriceSort("");
  };

  useEffect(() => {
    setCategoryId(searchParams.get("category") || "");
    setSubId(searchParams.get("subcategory") || "");
  }, [searchParams]);

  const renderDropdown = ({ id, label, value, options, onSelect, selected }) => (
    <div
      className={`browse-dropdown ${selected ? "is-selected" : ""} ${closedDropdown === id ? "is-closed" : ""}`}
      onMouseLeave={() => setClosedDropdown("")}
      onFocus={() => setClosedDropdown("")}
    >
      <button type="button" className="browse-trigger" aria-label={label}>
        <span>{label}</span>
        <span className="browse-caret">⌄</span>
      </button>
      <div className="browse-menu">
        {options.map(item => (
          <button
            key={item.id || item.label}
            type="button"
            className={`browse-option ${value === item.id ? "active" : ""}`}
            onClick={() => {
              if (item.disabled) return;
              onSelect(item.id);
              setClosedDropdown(id);
            }}
            disabled={item.disabled}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes softRise {
          from { opacity:0; transform:translateY(16px); }
          to { opacity:1; transform:translateY(0); }
        }
        .templates-shell {
          min-height:100dvh;
          background:#f4f4f4;
        }
        .studio-intro {
          background:rgba(255,255,255,.86);
          border-bottom:1px solid rgba(15,23,42,.08);
          padding:34px 24px 42px;
          text-align:center;
        }
        .studio-title {
          max-width:960px;
          margin:0 auto;
          color:#050505;
          font-size:clamp(2.15rem, 4.1vw, 3.35rem);
          line-height:1.04;
          font-weight:400;
          letter-spacing:0;
        }
        .studio-search {
          position:relative;
          width:min(100%, 640px);
          margin:24px auto 0;
        }
        .studio-search input {
          width:100%;
          height:46px;
          padding:0 46px 0 42px;
          border:0;
          border-bottom:1.5px solid #1f56ff;
          border-radius:0;
          background:transparent;
          color:#111;
          font-size:1.02rem;
          outline:none;
          transition:border-color .18s;
        }
        .studio-search input:focus { border-bottom-color:var(--accent); }
        .studio-search svg {
          position:absolute;
          left:2px;
          top:50%;
          transform:translateY(-50%);
          color:#111;
        }
        .studio-search-clear {
          position:absolute;
          right:2px;
          top:50%;
          transform:translateY(-50%);
          width:30px;
          height:30px;
          border:0;
          border-radius:9999px;
          background:#f0f0f0;
          cursor:pointer;
          color:#555;
        }
        .top-picks {
          display:flex;
          align-items:center;
          justify-content:center;
          flex-wrap:wrap;
          gap:10px;
          margin-top:22px;
        }
        .top-picks-label {
          margin-right:4px;
          color:#111;
          font-size:.76rem;
          letter-spacing:.16em;
          text-transform:uppercase;
        }
        .pick-chip {
          min-height:36px;
          padding:0 15px;
          border:0;
          border-radius:7px;
          background:#f1f1f1;
          color:#050505;
          font-size:.95rem;
          cursor:pointer;
          transition:background .18s, transform .18s, color .18s;
        }
        .pick-chip:hover {
          transform:translateY(-1px);
          background:#e8e8e8;
        }
        .pick-chip.active {
          background:#111;
          color:#fff;
        }
        .browse-bar {
          display:grid;
          grid-template-columns:190px repeat(4, minmax(150px, 1fr));
          min-height:48px;
          background:#fff;
          border-bottom:1px solid rgba(15,23,42,.1);
          border-top:1px solid rgba(15,23,42,.08);
        }
        .browse-cell {
          min-width:0;
          display:flex;
          align-items:center;
          gap:8px;
          position:relative;
          padding:0;
          border-right:1px solid rgba(15,23,42,.1);
          color:#111;
          font-size:.95rem;
          background:#fff;
        }
        .browse-cell.label {
          justify-content:center;
          font-size:.78rem;
          letter-spacing:.16em;
          text-transform:uppercase;
        }
        .browse-dropdown {
          position:relative;
          width:100%;
          height:100%;
        }
        .browse-trigger {
          width:100%;
          height:100%;
          min-height:48px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          padding:0 28px;
          border:0;
          background:transparent;
          color:#111;
          cursor:pointer;
          outline:none;
          font:inherit;
          text-align:left;
          transition:color .18s ease, background .18s ease;
        }
        .browse-dropdown:hover .browse-trigger,
        .browse-dropdown:focus-within .browse-trigger {
          color:#3f26ff;
          background:#fbfbfb;
        }
        .browse-dropdown.is-selected .browse-trigger {
          color:#3f26ff;
          font-weight:500;
        }
        .browse-caret {
          display:inline-block;
          width:8px;
          height:8px;
          border-right:1.7px solid currentColor;
          border-bottom:1.7px solid currentColor;
          color:currentColor;
          font-size:0;
          line-height:0;
          transform:rotate(45deg) translateY(-2px);
          transition:transform .2s ease;
        }
        .browse-dropdown:hover .browse-caret,
        .browse-dropdown:focus-within .browse-caret {
          transform:rotate(225deg) translateY(-2px);
        }
        .browse-menu {
          position:absolute;
          left:-1px;
          right:-1px;
          top:100%;
          z-index:30;
          display:flex;
          flex-direction:column;
          align-items:stretch;
          gap:0;
          padding:22px 0;
          background:#fff;
          border:1px solid rgba(15,23,42,.1);
          border-top:0;
          box-shadow:0 24px 40px rgba(15,23,42,.08);
          opacity:0;
          visibility:hidden;
          transform:translateY(-8px);
          transition:opacity .2s ease, transform .2s ease, visibility .2s ease;
        }
        .browse-dropdown:hover .browse-menu,
        .browse-dropdown:focus-within .browse-menu {
          opacity:1;
          visibility:visible;
          transform:translateY(0);
        }
        .browse-dropdown.is-closed .browse-menu {
          opacity:0;
          visibility:hidden;
          transform:translateY(-8px);
        }
        .browse-option {
          width:100%;
          min-height:44px;
          padding:0 28px;
          border:0;
          background:#fff;
          color:#111;
          text-align:left;
          cursor:pointer;
          font:inherit;
          transition:color .16s ease, background .16s ease, padding-left .16s ease;
        }
        .browse-option:hover {
          color:#3f26ff;
          background:#fff;
          padding-left:34px;
        }
        .browse-option.active {
          color:#3f26ff;
          background:#fff;
          padding-left:28px;
          font-weight:500;
        }
        .browse-option:disabled {
          color:#999;
          cursor:not-allowed;
          background:#fff;
          padding-left:28px;
        }
        .gallery-area {
          max-width:1260px;
          margin:0 auto;
          padding:34px 24px 82px;
        }
        .gallery-head {
          display:flex;
          justify-content:space-between;
          align-items:end;
          gap:18px;
          margin-bottom:22px;
        }
        .gallery-title {
          color:#050505;
          font-size:1.28rem;
          font-weight:500;
          letter-spacing:0;
        }
        .gallery-meta {
          color:#606060;
          font-size:.9rem;
        }
        .reset-link {
          border:0;
          background:transparent;
          color:#111;
          cursor:pointer;
          text-decoration:underline;
          text-underline-offset:4px;
          font-size:.9rem;
        }
        .template-grid {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:28px;
          align-items:start;
        }
        .template-grid > div {
          animation:softRise .42s ease both;
        }
        .empty-state {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:16px;
          min-height:280px;
          padding:70px 24px;
          text-align:center;
          background:#fff;
          border:1px solid rgba(15,23,42,.08);
        }
        @media(max-width:900px){
          .studio-intro { padding:30px 18px 34px; }
          .browse-bar {
            grid-template-columns:1fr 1fr;
          }
          .browse-cell.label {
            grid-column:1 / -1;
            justify-content:flex-start;
            min-height:46px;
          }
          .browse-cell { min-height:48px; }
          .browse-trigger { padding:0 18px; }
          .browse-option { padding:0 18px; }
          .browse-option:hover,
          .browse-option.active { padding-left:24px; }
          .gallery-area { padding:28px 18px 72px; }
          .template-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
        }
        @media(max-width:560px){
          .studio-intro { padding:24px 18px 28px; }
          .studio-title {
            max-width:420px;
            font-size:2rem;
            line-height:1.08;
          }
          .studio-search { margin-top:20px; }
          .top-picks {
            justify-content:flex-start;
            overflow-x:auto;
            flex-wrap:nowrap;
            gap:8px;
            padding-bottom:8px;
            margin-top:18px;
            scrollbar-width:none;
          }
          .top-picks::-webkit-scrollbar { display:none; }
          .top-picks-label { flex:0 0 auto; }
          .pick-chip {
            flex:0 0 auto;
            min-height:34px;
            padding:0 14px;
          }
          .browse-bar {
            grid-template-columns:1fr 1fr;
            min-height:0;
          }
          .browse-cell.label {
            grid-column:1 / -1;
            justify-content:flex-start;
            min-height:42px;
            padding:0 18px;
            border-right:0;
          }
          .browse-trigger {
            min-height:52px;
            padding:0 18px;
          }
          .browse-cell:nth-child(2n + 1) {
            border-right:0;
          }
          .browse-menu {
            padding:14px 0;
          }
          .browse-option {
            min-height:40px;
          }
          .gallery-head { align-items:flex-start; flex-direction:column; }
          .template-grid { grid-template-columns:minmax(0,1fr); gap:24px; }
          .template-grid > div { min-width:0; }
        }
      `}</style>

      <section className="templates-shell">
        {!guided && (
          <>
            <div className="studio-intro">
              <h1 className="studio-title">Choose a template and start creating</h1>
              <div className="studio-search">
                <Icon name="search" className="h-5 w-5" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search templates..."
                  aria-label="Search templates"
                />
                {query && (
                  <button type="button" className="studio-search-clear" onClick={() => setQuery("")} aria-label="Clear search">
                    x
                  </button>
                )}
              </div>

              <div className="top-picks">
                <span className="top-picks-label">Top picks</span>
                <button type="button" onClick={() => { setCategoryId(""); setSubId(""); }}
                  className={`pick-chip ${!categoryId ? "active" : ""}`}>
                  All
                </button>
                {categories.map(c => (
                  <button key={c.id} type="button" onClick={() => { setCategoryId(c.id); setSubId(""); }}
                    className={`pick-chip ${categoryId === c.id ? "active" : ""}`}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="browse-bar">
              <div className="browse-cell label">Browse by</div>
              <div className="browse-cell">
                {renderDropdown({
                  id: "main",
                  label: "Main",
                  value: categoryId,
                  options: mainOptions,
                  selected: categoryId,
                  onSelect: value => { setCategoryId(value); setSubId(""); },
                })}
              </div>
              <div className="browse-cell">
                {renderDropdown({
                  id: "type",
                  label: "Type",
                  value: subcategoryId,
                  options: typeOptions,
                  selected: subcategoryId,
                  onSelect: value => setSubId(value),
                })}
              </div>
              <div className="browse-cell">
                {renderDropdown({
                  id: "goal",
                  label: "Goal",
                  value: goal,
                  options: goals,
                  selected: goal,
                  onSelect: value => setGoal(value),
                })}
              </div>
              <div className="browse-cell">
                {renderDropdown({
                  id: "price",
                  label: "Price",
                  value: priceSort,
                  options: priceOptions,
                  selected: priceSort,
                  onSelect: value => setPriceSort(value),
                })}
              </div>
            </div>
          </>
        )}

        <div className="gallery-area">
          <div className="gallery-head">
            <div>
              <h2 className="gallery-title">
                {selectedLabel === "Main" ? "All Responsive Templates" : `${selectedLabel} Templates`}
              </h2>
              <p className="gallery-meta">{templates.length} template{templates.length === 1 ? "" : "s"} available</p>
            </div>
            {(query || categoryId || subcategoryId || goal || priceSort) && !guided && (
              <button type="button" onClick={resetFilters} className="reset-link">
                Reset filters
              </button>
            )}
          </div>

          {templates.length > 0 ? (
            <div className="template-grid">
              {templates.map((t, i) => (
                <div key={t.id} style={{ animationDelay: `${i * 48}ms` }}>
                  <TemplateCard template={t} recommended={!guided && (categoryId || subcategoryId) && i === 0} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Icon name="search" className="h-6 w-6" style={{ color: "var(--text-3)" }} />
              <div>
                <p style={{ fontWeight: 800, color: "var(--text-1)", marginBottom: 4 }}>No templates found</p>
                <p style={{ fontSize: ".875rem", color: "var(--text-3)" }}>Try a different category or search term.</p>
              </div>
              <button type="button" onClick={resetFilters} className="btn btn-secondary btn-sm focus-ring">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
