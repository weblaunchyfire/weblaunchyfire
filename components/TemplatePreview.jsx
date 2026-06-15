"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Icon } from "@/components/Icons";
import TemplateRenderer from "@/components/template/TemplateRenderer";
import { categories, getCategory, getTemplates } from "@/data/site";

const LITE_COLORS = [
  { id: "clinic", primary: "#14b8a6", secondary: "#0f766e", soft: "#ecfdf5", panel: "#dff7f2", ink: "#123231", muted: "#355f5b", label: "Clinic Teal" },
  { id: "education", primary: "#2563eb", secondary: "#7c3aed", soft: "#eef2ff", panel: "#e0e7ff", ink: "#172554", muted: "#31456f", label: "Education Blue" },
  { id: "restaurant", primary: "#ef4444", secondary: "#f97316", soft: "#fff7ed", panel: "#ffead5", ink: "#331a16", muted: "#624239", label: "Food Warm" },
  { id: "fitness", primary: "#ff6a16", secondary: "#dc2626", soft: "#fff7ed", panel: "#ffe4d2", ink: "#2b1c16", muted: "#654134", label: "Fitness Energy" },
  { id: "beauty", primary: "#ec4899", secondary: "#be185d", soft: "#fff5fb", panel: "#ffe4f2", ink: "#341827", muted: "#6d2448", label: "Beauty Rose" },
  { id: "realestate", primary: "#16a34a", secondary: "#0f766e", soft: "#f0fdf4", panel: "#dcfce7", ink: "#14351f", muted: "#365d43", label: "Property Green" },
  { id: "premium", primary: "#111827", secondary: "#d97706", soft: "#f8fafc", panel: "#e5e7eb", ink: "#111827", muted: "#475569", label: "Premium Ink" },
  { id: "cafe", primary: "#d97706", secondary: "#92400e", soft: "#fffbeb", panel: "#fdecc8", ink: "#3a250b", muted: "#6f5a39", label: "Cafe Gold" },
  { id: "dental", primary: "#0891b2", secondary: "#2563eb", soft: "#ecfeff", panel: "#cffafe", ink: "#0f3440", muted: "#426875", label: "Dental Aqua" },
  { id: "luxury", primary: "#7c2d12", secondary: "#b45309", soft: "#fff7ed", panel: "#f5dfc7", ink: "#2f1b12", muted: "#6d5142", label: "Luxury Clay" },
  { id: "fresh", primary: "#65a30d", secondary: "#16a34a", soft: "#f7fee7", panel: "#e7f7c9", ink: "#20340f", muted: "#526a35", label: "Fresh Lime" },
  { id: "greenyellow", primary: "#84cc16", secondary: "#16a34a", soft: "#f7fee7", panel: "#ecfccb", ink: "#25370f", muted: "#5a6f34", label: "Green Yellow" },
  { id: "harvest", primary: "#ca8a04", secondary: "#65a30d", soft: "#fefce8", panel: "#fef3c7", ink: "#3b2f08", muted: "#75622b", label: "Harvest Green" },
  { id: "yellowblue", primary: "#facc15", secondary: "#2563eb", soft: "#fefce8", panel: "#e0f2fe", ink: "#1e2a4a", muted: "#52627f", label: "Yellow Blue" },
  { id: "sunnytech", primary: "#eab308", secondary: "#0284c7", soft: "#fffbea", panel: "#dff3ff", ink: "#26344d", muted: "#5b6880", label: "Sunny Tech" },
];

const STANDARD_COLORS = [
  { id: "std-soft-navy", primary: "#1f4e79", secondary: "#b88746", soft: "#f8f4ec", panel: "#edf2f6", card: "#fffaf2", ink: "#172033", muted: "#5d6673", onAccent: "#ffffff", label: "Soft Navy" },
  { id: "std-sage-gold", primary: "#58745f", secondary: "#b88a43", soft: "#f6f4ec", panel: "#e9efe4", card: "#fffdf7", ink: "#1d2a22", muted: "#637064", onAccent: "#ffffff", label: "Sage Gold" },
  { id: "std-blush-wine", primary: "#8d3f50", secondary: "#bd8564", soft: "#fbf4f2", panel: "#f0e3e0", card: "#fffafa", ink: "#2b1d22", muted: "#735f64", onAccent: "#ffffff", label: "Blush Wine" },
  { id: "std-stone-blue", primary: "#365d7d", secondary: "#b67a43", soft: "#f6f7f5", panel: "#e5ebee", card: "#ffffff", ink: "#182638", muted: "#65727c", onAccent: "#ffffff", label: "Stone Blue" },
  { id: "std-clay-ivory", primary: "#9b5a3c", secondary: "#2f6f73", soft: "#fbf3ea", panel: "#f0dfd0", card: "#fffaf4", ink: "#2d211c", muted: "#715f55", onAccent: "#ffffff", label: "Clay Ivory" },
  { id: "std-olive-cream", primary: "#65724b", secondary: "#a97942", soft: "#f8f5ea", panel: "#e9e3cf", card: "#fffdf6", ink: "#252918", muted: "#6c6b53", onAccent: "#ffffff", label: "Olive Cream" },
  { id: "std-plum-linen", primary: "#68466f", secondary: "#b47b57", soft: "#f8f2f7", panel: "#eaddea", card: "#fffafd", ink: "#281d2d", muted: "#6d6070", onAccent: "#ffffff", label: "Plum Linen" },
  { id: "std-petrol-pearl", primary: "#28686d", secondary: "#a96f45", soft: "#f2f7f5", panel: "#dce9e7", card: "#ffffff", ink: "#142d30", muted: "#607577", onAccent: "#ffffff", label: "Petrol Pearl" },
  { id: "std-cocoa-shell", primary: "#735143", secondary: "#b8845c", soft: "#faf3ee", panel: "#eadbd2", card: "#fff9f5", ink: "#2a1f1a", muted: "#735f56", onAccent: "#ffffff", label: "Cocoa Shell" },
  { id: "std-blue-porcelain", primary: "#2a5784", secondary: "#a77a42", soft: "#f7f9fc", panel: "#e3edf7", card: "#ffffff", ink: "#13233b", muted: "#607087", onAccent: "#ffffff", label: "Blue Porcelain" },
  { id: "std-charcoal-champagne", primary: "#34383a", secondary: "#c49a52", soft: "#f6f3ed", panel: "#e7e1d6", card: "#fffdf8", ink: "#171a1c", muted: "#666a6b", onAccent: "#ffffff", label: "Charcoal Champagne" },
  { id: "std-aubergine-silk", primary: "#5c3d58", secondary: "#bd8b68", soft: "#f9f2f7", panel: "#eadde7", card: "#fffbfd", ink: "#261b24", muted: "#6f6070", onAccent: "#ffffff", label: "Aubergine Silk" },
  { id: "std-seafoam-wood", primary: "#447873", secondary: "#a87c4f", soft: "#f2f8f6", panel: "#dcebe8", card: "#ffffff", ink: "#172b2a", muted: "#5d7370", onAccent: "#ffffff", label: "Seafoam Wood" },
  { id: "std-russet-cloud", primary: "#914d36", secondary: "#4f7478", soft: "#fbf4ef", panel: "#eddcd2", card: "#fffaf6", ink: "#2c201b", muted: "#755f55", onAccent: "#ffffff", label: "Russet Cloud" },
  { id: "std-steel-amber", primary: "#415f7a", secondary: "#c78f3d", soft: "#f6f8fa", panel: "#e1e8ee", card: "#ffffff", ink: "#182433", muted: "#657384", onAccent: "#ffffff", label: "Steel Amber" },
  { id: "std-moss-linen", primary: "#596848", secondary: "#b4864d", soft: "#f9f5eb", panel: "#e9e1ca", card: "#fffdf7", ink: "#252918", muted: "#6b6b54", onAccent: "#ffffff", label: "Moss Linen" },
  { id: "std-rosewood-fog", primary: "#884552", secondary: "#aa7657", soft: "#faf3f4", panel: "#eddde0", card: "#fffafb", ink: "#2d1c20", muted: "#725f63", onAccent: "#ffffff", label: "Rosewood Fog" },
  { id: "std-cobalt-warm", primary: "#28577c", secondary: "#d08a4f", soft: "#f8f4ee", panel: "#e4edf3", card: "#fffdf9", ink: "#15263a", muted: "#637282", onAccent: "#ffffff", label: "Cobalt Warm" },
  { id: "std-black-gold-light", primary: "#1f2933", secondary: "#c7a15a", soft: "#f7f3ea", panel: "#e8dfcd", card: "#fffaf2", ink: "#111827", muted: "#65615a", onAccent: "#ffffff", label: "Black Gold Light" },
  { id: "std-walnut-sage", primary: "#76533f", secondary: "#6f8062", soft: "#f8f1ea", panel: "#e8d8ca", card: "#fffaf5", ink: "#2b211b", muted: "#705f55", onAccent: "#ffffff", label: "Walnut Sage" },
  { id: "std-cream-teal", primary: "#2d6b67", secondary: "#be8b4d", soft: "#fbf7ef", panel: "#dcece8", card: "#ffffff", ink: "#172a29", muted: "#637370", onAccent: "#ffffff", label: "Cream Teal" },
  { id: "std-pearl-maroon", primary: "#803847", secondary: "#c0955a", soft: "#f9f2ef", panel: "#eee2dc", card: "#fffaf8", ink: "#2b1c21", muted: "#746066", onAccent: "#ffffff", label: "Pearl Maroon" },
  { id: "std-linen-indigo", primary: "#3f4f84", secondary: "#b98056", soft: "#f8f5ee", panel: "#e8e9f2", card: "#fffdf8", ink: "#1b2238", muted: "#666d82", onAccent: "#ffffff", label: "Linen Indigo" },
  { id: "std-warm-mineral", primary: "#556b73", secondary: "#b9784d", soft: "#f7f3ed", panel: "#e1e8e8", card: "#fffdf9", ink: "#1d292d", muted: "#667274", onAccent: "#ffffff", label: "Warm Mineral" },
].map(theme => ({
  ...theme,
  onPrimary: theme.onPrimary || theme.onAccent || "#ffffff",
  onCard: theme.onCard || theme.ink,
  onPanel: theme.onPanel || theme.ink,
  line: theme.line || `color-mix(in srgb, ${theme.ink} 16%, transparent)`,
}));

const PRIME_COLORS = [
  { id: "prime-arka", primary: "#c4a882", secondary: "#9b4f2f", soft: "#f5f2ec", panel: "#e8e3d9", ink: "#0d0d0d", muted: "#6b6459", label: "Arka Editorial" },
  { id: "prime-olive", primary: "#b8a36a", secondary: "#4a5240", soft: "#f3f0e7", panel: "#dfd8c7", ink: "#12130f", muted: "#686251", label: "Olive Atelier" },
  { id: "prime-terracotta", primary: "#d29a72", secondary: "#9b4f2f", soft: "#f8eee7", panel: "#ead5c8", ink: "#21130e", muted: "#735f55", label: "Terracotta Luxe" },
  { id: "prime-monochrome", primary: "#b9b9b1", secondary: "#3f3f3a", soft: "#f4f3ef", panel: "#deddd7", ink: "#111111", muted: "#676761", label: "Monochrome Gallery" },
  { id: "prime-sage", primary: "#a8b08b", secondary: "#4a5240", soft: "#f2f4ed", panel: "#dfe4d2", ink: "#10140f", muted: "#626b58", label: "Sage Residence" },
  { id: "prime-wine", primary: "#c9a27f", secondary: "#7f1d1d", soft: "#f5ece8", panel: "#e5d3cc", ink: "#1f1010", muted: "#765e5c", label: "Wine Salon" },
  { id: "prime-navy", primary: "#c8ad7f", secondary: "#1f3a5f", soft: "#eef1f5", panel: "#d7dde7", ink: "#0d1826", muted: "#5b6674", label: "Navy Maison" },
  { id: "prime-charcoal", primary: "#d3b98c", secondary: "#5c4a35", soft: "#f0eee8", panel: "#d9d2c2", ink: "#121212", muted: "#686058", label: "Charcoal Manor" },
];

function getThemeOptions(template) {
  const custom = template.layout?.custom;
  if (custom === "standerTemplateOne" || custom === "standerTempOne") return STANDARD_COLORS;
  if (custom === "primeTemplateOne") return PRIME_COLORS;
  return LITE_COLORS;
}

const FONTS = [
  { id: "Inter", label: "Modern" },
  { id: "Serif", label: "Classic" },
  { id: "Mono", label: "Sharp" },
  { id: "Display", label: "Display" },
  { id: "Rounded", label: "Soft" },
  { id: "Editorial", label: "Editorial" },
  { id: "Luxury", label: "Luxury" },
  { id: "Clean", label: "Clean" },
  { id: "Bold", label: "Bold" },
  { id: "Human", label: "Human" },
  { id: "Tech", label: "Tech" },
  { id: "Warm", label: "Warm" },
  { id: "Formal", label: "Formal" },
  { id: "Groove", label: "Groove" },
  { id: "Compact", label: "Compact" },
  { id: "Airy", label: "Airy" },
];

const LANGUAGES = [
  "English",
  "Assamese",
  "Bengali",
  "Bodo",
  "Dogri",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Kashmiri",
  "Konkani",
  "Maithili",
  "Malayalam",
  "Manipuri",
  "Marathi",
  "Nepali",
  "Odia",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
];

export default function TemplatePreview({ template }) {
  const searchParams = useSearchParams();
  const previewMode = searchParams.get("view") || "studio";
  const queryAccent = searchParams.get("accent");
  const queryFont = searchParams.get("font");
  const queryThemeBg = searchParams.get("themeBg");
  const queryThemeSoft = searchParams.get("themeSoft");
  const queryThemeSecondary = searchParams.get("themeSecondary");
  const queryCorner = searchParams.get("corner");
  const queryLanguage = searchParams.get("language");
  const cleanView = previewMode === "canvas" || previewMode === "full";
  const [accent, setAccent] = useState(queryAccent || template.accent);
  const [font, setFont] = useState(queryFont || template.font);
  const [themeColors, setThemeColors] = useState({
    bg: queryThemeBg || template.theme?.bg,
    soft: queryThemeSoft || template.theme?.soft,
    secondary: queryThemeSecondary || template.theme?.panel,
    panel: searchParams.get("themePanel") || template.theme?.panel,
    card: searchParams.get("themeCard") || template.theme?.card,
    ink: searchParams.get("themeInk") || template.theme?.ink,
    muted: searchParams.get("themeMuted") || template.theme?.muted,
    onPrimary: searchParams.get("themeOnPrimary") || template.theme?.onPrimary,
    onCard: searchParams.get("themeOnCard") || template.theme?.onCard,
    onPanel: searchParams.get("themeOnPanel") || template.theme?.onPanel,
    line: searchParams.get("themeLine") || template.theme?.line,
    onAccent: searchParams.get("themeOnAccent") || template.theme?.onAccent,
  });
  const [device, setDevice] = useState("desktop");
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);
  const [templateDrawerOpen, setTemplateDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState(template.category);
  const [drawerSubcategory, setDrawerSubcategory] = useState(template.subcategory);
  const [cornerStyle, setCornerStyle] = useState(queryCorner || "Round");
  const [darkPreview, setDarkPreview] = useState(false);
  const [language, setLanguage] = useState(queryLanguage || "English");
  const [themePage, setThemePage] = useState(0);
  const [fontPage, setFontPage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setDevice("mobile");
    }
  }, []);

  const fontClass = font === "Serif" ? "font-serif" : font === "Mono" ? "font-mono" : "font-sans";
  const relatedHref = "#top";
  const themeQuery = `themeBg=${encodeURIComponent(themeColors.bg || "")}&themeSoft=${encodeURIComponent(themeColors.soft || "")}&themeSecondary=${encodeURIComponent(themeColors.secondary || "")}&themePanel=${encodeURIComponent(themeColors.panel || "")}&themeCard=${encodeURIComponent(themeColors.card || "")}&themeInk=${encodeURIComponent(themeColors.ink || "")}&themeMuted=${encodeURIComponent(themeColors.muted || "")}&themeOnPrimary=${encodeURIComponent(themeColors.onPrimary || "")}&themeOnCard=${encodeURIComponent(themeColors.onCard || "")}&themeOnPanel=${encodeURIComponent(themeColors.onPanel || "")}&themeLine=${encodeURIComponent(themeColors.line || "")}&themeOnAccent=${encodeURIComponent(themeColors.onAccent || "")}`;
  const previewQuery = `accent=${encodeURIComponent(accent)}&font=${encodeURIComponent(font)}&corner=${encodeURIComponent(cornerStyle)}&language=${encodeURIComponent(language)}&${themeQuery}`;
  const frameSrc = `/template-preview/${template.id}?view=canvas&device=${device}&${previewQuery}`;
  const fullHref = `/template-preview/${template.id}?view=full&device=${device}&${previewQuery}`;
  const drawerBusinessType = getCategory(drawerCategory);
  const drawerTemplates = getTemplates({ category: drawerCategory, subcategory: drawerSubcategory });
  const themePageSize = 8;
  const themeOptions = getThemeOptions(template);
  const themePageCount = Math.ceil(themeOptions.length / themePageSize);
  const visibleThemes = themeOptions.slice(themePage * themePageSize, themePage * themePageSize + themePageSize);
  const fontPageSize = 6;
  const fontPageCount = Math.ceil(FONTS.length / fontPageSize);
  const visibleFonts = FONTS.slice(fontPage * fontPageSize, fontPage * fontPageSize + fontPageSize);
  const themeOverride = {
    bg: themeColors.bg,
    panel: themeColors.panel || themeColors.bg,
    soft: themeColors.soft,
    secondary: themeColors.secondary,
    card: themeColors.card,
    ink: themeColors.ink,
    muted: themeColors.muted,
    onPrimary: themeColors.onPrimary,
    onCard: themeColors.onCard,
    onPanel: themeColors.onPanel,
    line: themeColors.line,
    onAccent: themeColors.onAccent,
    radius: cornerStyle === "Round" ? "18px" : cornerStyle === "Soft" ? "8px" : "0px",
  };

  if (cleanView) {
    const blockInternalPreviewLinks = event => {
      const link = event.target.closest?.("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
        return;
      }

      event.preventDefault();
    };

    return (
      <div className={fontClass} style={{ background: "#fff" }} onClickCapture={blockInternalPreviewLinks}>
        <TemplateRenderer template={template} accent={accent} font={font} relatedHref={relatedHref} themeOverride={themeOverride} language={language} />
      </div>
    );
  }

  return (
    <div style={{ background: "#eef0f3", fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>{`
        .preview-studio {
          height:100dvh;
          min-height:620px;
          padding:0;
          display:grid;
          grid-template-columns:260px minmax(0, 1fr);
          gap:0;
          overflow:hidden;
        }
        .preview-workspace {
          position:relative;
          min-width:0;
          min-height:0;
          display:grid;
          grid-template-rows:70px minmax(0, 1fr);
          background:#eef0f3;
        }
        .preview-workspace-head {
          min-width:0;
          display:grid;
          grid-template-columns:minmax(0, 1fr) auto minmax(0, 1fr);
          align-items:center;
          gap:16px;
          padding:0 24px;
          background:linear-gradient(180deg, #fff, #fffaf7);
          border-bottom:1px solid rgba(15,23,42,.08);
          box-shadow:0 10px 30px rgba(15,23,42,.06);
          color:var(--text-1);
        }
        .preview-workspace-title p {
          margin:0 0 2px;
          color:#ff6726;
          font-size:.68rem;
          font-weight:950;
          letter-spacing:.06em;
          text-transform:uppercase;
        }
        .preview-workspace-title h1 {
          margin:0;
          color:var(--text-1);
          font-size:1rem;
          font-weight:950;
          line-height:1.15;
          max-width:520px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .preview-head-actions {
          display:contents;
        }
        .preview-view-group {
          display:flex;
          align-items:stretch;
          justify-content:center;
          gap:0;
          justify-self:center;
          overflow:hidden;
          border:1px solid rgba(15,23,42,.1);
          border-radius:9px;
          background:#fff;
        }
        .preview-head-actions .preview-device-tabs {
          width:auto;
          height:44px;
          display:grid;
          grid-template-columns:repeat(2, minmax(104px, auto));
          gap:0;
          overflow:hidden;
          border:0;
          border-radius:0;
          background:#fff;
        }
        .preview-head-actions .preview-device-tab {
          height:44px;
          padding:0 12px;
          justify-content:center;
          gap:7px;
          border:0;
          border-right:1px solid rgba(15,23,42,.08);
          background:transparent;
          color:#4b5563;
          font-size:.86rem;
          white-space:nowrap;
        }
        .preview-head-actions .preview-device-tab.mobile-segment {
          background:#eef6ff;
          color:#1d4ed8;
        }
        .preview-head-actions .preview-device-tab.desktop-segment {
          background:#f5f3ff;
          color:#6d28d9;
        }
        .preview-head-actions .preview-device-tab:last-child {
          border-right:0;
        }
        .preview-head-actions .preview-device-tab.mobile-segment.active {
          background:#2563eb;
          border-color:transparent;
          color:#fff;
        }
        .preview-head-actions .preview-device-tab.desktop-segment.active {
          background:#6d28d9;
          border-color:transparent;
          color:#fff;
        }
        .preview-head-link {
          min-height:44px;
          min-width:104px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          padding:0 16px;
          border:0;
          border-left:1px solid rgba(15,23,42,.1);
          border-radius:0;
          background:#fff;
          color:var(--text-1);
          font-size:.86rem;
          font-weight:950;
          line-height:1;
          text-align:center;
          white-space:nowrap;
        }
        .preview-head-link.primary {
          background:#eff6ff;
          border-left-color:rgba(15,23,42,.1);
          color:#2563eb;
        }
        .preview-head-link.primary:hover {
          background:#2563eb;
          color:#fff;
        }
        .preview-head-link.continue {
          border-left:0;
          min-height:42px;
          min-width:126px;
          position:relative;
          overflow:hidden;
          border-radius:12px;
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
          font-size:.86rem;
          box-shadow:0 12px 28px rgba(255,106,22,.28), 0 0 0 0 rgba(255,106,22,.22), inset 0 1px 0 rgba(255,255,255,.25);
          justify-self:end;
          animation:previewEasyBell 2.8s ease-in-out infinite, previewEasyPulse 2.8s ease-in-out infinite;
        }
        .preview-head-link.continue:before {
          content:"";
          position:absolute;
          inset:-2px;
          background:linear-gradient(110deg, transparent 0%, transparent 34%, rgba(255,255,255,.38) 46%, rgba(255,255,255,.08) 54%, transparent 66%, transparent 100%);
          transform:translateX(-115%);
          animation:previewEasyShine 3.2s ease-in-out infinite;
          pointer-events:none;
        }
        .preview-head-link.continue > * {
          position:relative;
          z-index:1;
        }
        .preview-head-link.continue svg:first-child {
          animation:previewEasySpark 1.9s ease-in-out infinite;
        }
        .preview-head-link.continue:hover {
          background:var(--accent-hover);
        }
        @keyframes previewEasyPulse {
          0%, 100% { box-shadow:0 12px 28px rgba(255,106,22,.28), 0 0 0 0 rgba(255,106,22,.22), inset 0 1px 0 rgba(255,255,255,.25); filter:saturate(1); }
          10% { box-shadow:0 14px 34px rgba(255,106,22,.42), 0 0 0 7px rgba(255,106,22,.12), inset 0 1px 0 rgba(255,255,255,.38); filter:saturate(1.12) brightness(1.04); }
          20%, 42% { box-shadow:0 12px 28px rgba(255,106,22,.3), 0 0 0 0 rgba(255,106,22,0), inset 0 1px 0 rgba(255,255,255,.25); filter:saturate(1); }
          52% { box-shadow:0 14px 34px rgba(255,106,22,.38), 0 0 0 6px rgba(255,106,22,.1), inset 0 1px 0 rgba(255,255,255,.34); filter:saturate(1.08) brightness(1.03); }
        }
        @keyframes previewEasyShine {
          0%, 38% { transform:translateX(-115%); }
          58%, 100% { transform:translateX(115%); }
        }
        @keyframes previewEasySpark {
          0%, 100% { transform:rotate(0deg) scale(1); }
          45% { transform:rotate(10deg) scale(1.14); }
          70% { transform:rotate(-6deg) scale(1.04); }
        }
        @keyframes previewEasyBell {
          0%, 72%, 100% { transform:translateX(0) rotate(0deg); }
          6% { transform:translateX(-1px) rotate(-1deg); }
          10% { transform:translateX(2px) rotate(1.2deg); }
          14% { transform:translateX(-1px) rotate(-.8deg); }
          18% { transform:translateX(1px) rotate(.4deg); }
          22% { transform:translateX(0) rotate(0deg); }
        }
        .preview-topbar {
          z-index:20;
          min-height:0;
          display:flex;
          flex-direction:column;
          align-items:stretch;
          justify-content:flex-start;
          padding:24px 16px;
          background:#fff;
          border-right:1px solid rgba(15,23,42,.08);
          overflow:auto;
        }
        .preview-sidebar-logo {
          display:inline-flex;
          align-items:center;
          gap:10px;
          margin-bottom:20px;
          padding:6px;
          border-radius:12px;
          text-decoration:none;
          transition: background .2s;
        }
        .preview-sidebar-logo:hover {
          background: rgba(255,106,22,.05);
        }
        .preview-sidebar-logo-img {
          width:44px;
          height:44px;
          object-fit:contain;
          filter: drop-shadow(0 3px 10px rgba(255,106,22,.16));
        }
        .preview-sidebar-logo-text {
          display:flex;
          flex-direction:column;
          line-height:1.1;
          gap:1px;
        }
        .preview-sidebar-logo-top {
          font-family: var(--font-inter), 'Inter', system-ui, sans-serif;
          font-size:.6rem;
          font-weight:600;
          letter-spacing:.1em;
          text-transform:uppercase;
          color:var(--text-3);
        }
        .preview-sidebar-logo-name {
          font-family: var(--font-brand), 'Paytone One', system-ui, sans-serif;
          font-size:1.1rem;
          font-weight:400;
          letter-spacing:-.02em;
          color:var(--text-1);
        }
        .preview-sidebar-logo-fire {
          background:linear-gradient(135deg, #ff6a16, #ff4f38, #e9360c);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
        }
        .preview-device-tabs {
          display:grid;
          grid-template-columns:1fr;
          gap:7px;
          padding:0;
          background:transparent;
          border:0;
        }
        .preview-control-label {
          margin-bottom:6px;
          color:#7a7f89;
          font-size:.68rem;
          font-weight:900;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .preview-control-card {
          padding:0;
          background:transparent;
          border:0;
        }
        .preview-device-tab {
          height:40px;
          padding:0 12px;
          border:1px solid rgba(15,23,42,.08);
          background:#fff;
          color:#4b5563;
          cursor:pointer;
          font-weight:800;
          text-align:left;
          display:flex;
          align-items:center;
          gap:10px;
          font-size:.86rem;
          transition:background .18s, color .18s, transform .18s, box-shadow .18s;
        }
        .preview-device-tab:hover {
          transform:translateY(-1px);
          color:#111;
          box-shadow:0 8px 18px rgba(15,23,42,.08);
        }
        .preview-device-tab.active {
          background:#111;
          border-color:#111;
          color:#fff;
        }
        .preview-frame-shell {
          width:100%;
          min-height:0;
          display:flex;
          justify-content:center;
          overflow:auto;
          padding:10px;
        }
        .preview-device-frame {
          position:relative;
          background:#fff;
          border:1px solid rgba(15,23,42,.12);
          box-shadow:0 30px 80px rgba(15,23,42,.16);
          transition:width .28s ease, height .28s ease, border-radius .28s ease;
          overflow:hidden;
        }
        .preview-device-frame.desktop {
          width:min(1180px, 100%);
          height:100%;
          border-radius:14px;
        }
        .preview-device-frame.mobile {
          width:390px;
          max-width:100%;
          height:100%;
          border-radius:30px;
          border:10px solid #111;
        }
        .preview-device-frame.mobile:before {
          content:"";
          position:absolute;
          top:8px;
          left:50%;
          z-index:2;
          width:92px;
          height:6px;
          border-radius:999px;
          background:#111;
          transform:translateX(-50%);
          opacity:.9;
        }
        .preview-device-frame.mobile:after {
          content:"";
          position:absolute;
          right:-14px;
          top:108px;
          width:4px;
          height:64px;
          border-radius:0 999px 999px 0;
          background:#111;
        }
        .preview-device-frame.desktop:before {
          content:"";
          position:absolute;
          left:0;
          right:0;
          top:0;
          z-index:2;
          height:28px;
          background:linear-gradient(180deg, #f8f8f8, #eeeeee);
          border-bottom:1px solid rgba(15,23,42,.08);
        }
        .preview-device-frame.desktop:after {
          content:"";
          position:absolute;
          top:10px;
          left:14px;
          z-index:3;
          width:8px;
          height:8px;
          border-radius:50%;
          background:#ff5f57;
          box-shadow:14px 0 0 #febc2e, 28px 0 0 #28c840;
        }
        .preview-device-frame iframe {
          width:100%;
          height:100%;
          border:0;
          display:block;
          background:#fff;
        }
        .preview-device-frame.desktop iframe {
          height:calc(100% - 28px);
          margin-top:28px;
        }
        .preview-desktop-monitor {
          width:100%;
          height:100%;
          display:flex;
          justify-content:center;
        }
        .preview-desktop-stand {
          display:none;
        }
        .preview-full-link {
          min-height:44px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          padding:0 16px;
          border-radius:10px;
          background:var(--accent);
          color:#fff;
          font-weight:850;
          box-shadow:0 12px 26px rgba(255,106,22,.18);
        }
        .preview-side-actions {
          display:grid;
          gap:8px;
          margin-top:auto;
        }
        .preview-side-secondary {
          min-height:40px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:0 14px;
          border:1px solid rgba(15,23,42,.1);
          border-radius:10px;
          background:#fff;
          color:#111;
          font-weight:850;
        }
        .preview-customize-panel {
          display:grid;
          gap:10px;
          padding:12px;
          background:#fff;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:0 14px 30px rgba(15,23,42,.06);
        }
        .preview-tool-section {
          display:grid;
          gap:8px;
          padding-bottom:12px;
          border-bottom:1px solid rgba(15,23,42,.08);
        }
        .preview-tool-section:last-child {
          padding-bottom:0;
          border-bottom:0;
        }
        .preview-tool-section.is-disabled {
          opacity:.52;
          filter:saturate(.75);
          pointer-events:none;
        }
        .preview-field-label {
          display:block;
          margin-bottom:6px;
          color:#8b8f97;
          font-size:.72rem;
          font-weight:850;
        }
        .preview-font-row {
          display:grid;
          grid-template-columns:repeat(3, 1fr);
          gap:6px;
        }
        .preview-font-btn {
          height:30px;
          padding:0 6px;
          border-radius:8px;
          border:1px solid rgba(15,23,42,.1);
          background:#fff;
          color:#4b5563;
          cursor:pointer;
          font-size:.75rem;
          font-weight:800;
        }
        .preview-font-btn.active {
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
        }
        .preview-color-row {
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:8px;
        }
        .preview-theme-head {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:8px;
        }
        .preview-color-btn {
          width:100%;
          height:25px;
          border-radius:999px;
          border:0;
          cursor:pointer;
          overflow:hidden;
          display:flex;
          padding:0;
        }
        .preview-color-btn span {
          flex:1;
          height:100%;
        }
        .preview-theme-next {
          width:26px;
          height:26px;
          display:inline-grid;
          place-items:center;
          border:1px solid rgba(15,23,42,.1);
          border-radius:8px;
          background:#fff;
          color:#4b5563;
          cursor:pointer;
          box-shadow:0 6px 16px rgba(15,23,42,.06);
        }
        .preview-theme-next:hover {
          color:var(--accent);
          border-color:rgba(255,106,22,.25);
        }
        .preview-option-row {
          display:flex;
          flex-wrap:wrap;
          gap:7px;
        }
        .preview-chip-btn {
          height:28px;
          padding:0 12px;
          border:1px solid rgba(15,23,42,.12);
          border-radius:999px;
          background:#fff;
          color:#4b5563;
          cursor:pointer;
          font-size:.74rem;
          font-weight:850;
        }
        .preview-chip-btn.active {
          background:#111;
          border-color:#111;
          color:#fff;
        }
        .preview-toggle-row {
          min-height:34px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
        }
        .preview-switch {
          width:42px;
          height:24px;
          border:0;
          border-radius:999px;
          background:#d1d5db;
          padding:3px;
          cursor:pointer;
          transition:background .18s;
        }
        .preview-switch span {
          display:block;
          width:18px;
          height:18px;
          border-radius:999px;
          background:#fff;
          box-shadow:0 2px 6px rgba(15,23,42,.16);
          transition:transform .18s;
        }
        .preview-switch.on {
          background:var(--accent);
        }
        .preview-switch.on span {
          transform:translateX(18px);
        }
        .preview-language-select {
          width:100%;
          height:36px;
          padding:0 12px;
          border:1px solid rgba(15,23,42,.1);
          border-radius:8px;
          background:#fff;
          color:var(--text-1);
          font-size:.86rem;
          font-weight:850;
        }
        .preview-template-float {
          position:absolute;
          right:0;
          top:50%;
          transform:translateY(-50%);
          z-index:62;
          min-height:172px;
          width:78px;
          display:inline-flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:8px;
          padding:14px 9px;
          border:2px solid rgba(185,28,28,.72);
          border-right:0;
          border-radius:999px;
          border-radius:12px 0 0 12px;
          background:linear-gradient(180deg, #991b1b, #7f1d1d);
          color:#fff;
          box-shadow:0 22px 54px rgba(185,28,28,.26), 0 0 0 6px rgba(185,28,28,.12), 0 8px 22px rgba(15,23,42,.14), inset 0 1px 0 rgba(255,255,255,.14);
          cursor:pointer;
          font-size:.84rem;
          font-weight:900;
          line-height:1.05;
          text-align:center;
          transition:transform .18s, box-shadow .18s;
          transform:translateY(-50%);
        }
        .preview-template-float:hover {
          transform:translateY(calc(-50% - 1px));
          background:linear-gradient(180deg, #b91c1c, #7f1d1d);
          box-shadow:0 28px 64px rgba(185,28,28,.32), 0 0 0 7px rgba(185,28,28,.16), 0 10px 26px rgba(15,23,42,.16), inset 0 1px 0 rgba(255,255,255,.18);
        }
        .preview-template-float svg {
          color:#fff;
          flex:0 0 auto;
        }
        .preview-template-float-text {
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:4px;
          white-space:normal;
        }
        .preview-template-float-text strong {
          max-width:56px;
          font-size:.78rem;
          line-height:1.05;
        }
        .preview-template-float-text span {
          font-size:.62rem;
          font-weight:850;
          line-height:1;
          opacity:.78;
        }
        .preview-drawer-scrim {
          position:fixed;
          inset:0;
          z-index:80;
          background:rgba(15,23,42,.24);
          opacity:0;
          visibility:hidden;
          transition:opacity .2s ease, visibility .2s ease;
        }
        .preview-drawer-scrim.open {
          opacity:1;
          visibility:visible;
        }
        .preview-template-drawer {
          position:fixed;
          top:0;
          right:0;
          bottom:0;
          z-index:81;
          width:min(430px, 94vw);
          display:flex;
          flex-direction:column;
          gap:14px;
          padding:18px;
          background:linear-gradient(180deg, #fff, #fff8f2 54%, #ffffff);
          border-left:1px solid rgba(15,23,42,.08);
          box-shadow:-24px 0 60px rgba(15,23,42,.18);
          transform:translateX(102%);
          transition:transform .24s ease;
          overflow:auto;
        }
        .preview-template-drawer.open {
          transform:translateX(0);
        }
        .preview-drawer-head {
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
          padding-bottom:2px;
        }
        .preview-drawer-kicker {
          color:var(--accent);
          font-size:.68rem;
          font-weight:950;
          letter-spacing:.08em;
          text-transform:uppercase;
        }
        .preview-drawer-title {
          margin-top:2px;
          color:var(--text-1);
          font-size:1.08rem;
          font-weight:950;
        }
        .preview-drawer-close {
          width:34px;
          height:34px;
          border-radius:10px;
          border:1px solid rgba(15,23,42,.1);
          background:#fff;
          cursor:pointer;
          color:#4b5563;
          font-weight:950;
        }
        .preview-drawer-select {
          width:100%;
          height:44px;
          padding:0 14px;
          border-radius:10px;
          border:1px solid rgba(15,23,42,.1);
          background:#fff;
          color:var(--text-1);
          font-size:.92rem;
          font-weight:900;
          box-shadow:0 8px 22px rgba(15,23,42,.04);
        }
        .preview-filter-panel {
          display:grid;
          grid-template-columns:repeat(2, minmax(0, 1fr));
          gap:12px;
          padding:14px;
          border:1px solid rgba(255,106,22,.12);
          border-radius:14px;
          background:#fffaf5;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.85), 0 10px 28px rgba(15,23,42,.05);
        }
        .preview-template-section {
          display:grid;
          gap:10px;
          padding-top:2px;
        }
        .preview-template-section-title {
          color:#8b8f97;
          font-size:.7rem;
          font-weight:950;
          letter-spacing:.08em;
          text-transform:uppercase;
        }
        @media(max-width:520px){
          .preview-filter-panel {
            grid-template-columns:1fr;
          }
        }
        .preview-package-list {
          display:grid;
          gap:8px;
        }
        .preview-template-list {
          display:grid;
          gap:9px;
        }
        .preview-template-option {
          min-height:86px;
          display:grid;
          grid-template-columns:76px 1fr auto;
          align-items:center;
          gap:10px;
          padding:10px;
          overflow:hidden;
          border:1px solid rgba(15,23,42,.1);
          border-radius:10px;
          background:#fff;
          color:var(--text-1);
          transition:border-color .18s, box-shadow .18s, transform .18s;
        }
        .preview-template-option:hover {
          transform:translateY(-1px);
          border-color:rgba(255,106,22,.32);
          box-shadow:0 12px 28px rgba(255,106,22,.08);
        }
        .preview-template-option.active {
          border-color:var(--accent);
          background:#fff;
          box-shadow:0 10px 24px rgba(255,106,22,.08);
        }
        .preview-template-thumb {
          width:76px;
          height:58px;
          border-radius:8px;
          background:#fffdf2 center/cover;
          border:1px solid rgba(15,23,42,.08);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.8);
        }
        .preview-template-title {
          display:block;
          color:var(--text-1);
          font-size:.86rem;
          font-weight:950;
          line-height:1.1;
        }
        .preview-template-meta {
          display:block;
          margin-top:4px;
          color:#8b8f97;
          font-size:.72rem;
          font-weight:750;
          line-height:1.05;
        }
        .preview-template-price {
          display:block;
          margin-top:6px;
          color:var(--accent);
          font-size:.84rem;
          font-weight:950;
        }
        .preview-selected-pill {
          min-width:64px;
          height:22px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius:999px;
          background:var(--accent-subtle);
          color:var(--accent);
          font-size:.62rem;
          font-weight:950;
          text-transform:uppercase;
        }
        .preview-mobile-bar { display:none; }
        .preview-mobile-head { display:none; }
        .preview-mobile-toggle { display:none; }
        .preview-mobile-scrim { display:none; }
        @media(max-width:767px){
          .preview-studio {
            height:100dvh;
            min-height:560px;
            padding:0;
            gap:0;
            grid-template-columns:1fr;
            grid-template-rows:minmax(0, 1fr);
          }
          .preview-workspace {
            grid-template-rows:minmax(0, 1fr);
          }
          .preview-workspace-head {
            gap:8px;
            padding:0 10px;
            display:none;
          }
          .preview-workspace-title h1 {
            font-size:.82rem;
          }
          .preview-head-actions {
            gap:6px;
          }
          .preview-head-actions .preview-device-tabs {
            width:76px;
          }
          .preview-head-actions .preview-device-tab {
            height:42px;
          }
          .preview-head-link {
            min-width:44px;
            min-height:42px;
            padding:0 10px;
            font-size:0;
          }
          .preview-head-link svg {
            width:16px;
            height:16px;
          }
          .preview-mobile-head {
            position:fixed;
            left:10px;
            right:10px;
            top:10px;
            z-index:64;
            display:grid;
            grid-template-columns:1fr 1fr 44px 44px;
            gap:7px;
            padding:7px;
            background:rgba(255,255,255,.94);
            border:1px solid rgba(15,23,42,.1);
            box-shadow:0 16px 36px rgba(15,23,42,.14);
            backdrop-filter:blur(16px);
          }
          .preview-mobile-mode,
          .preview-mobile-icon {
            height:40px;
            border:1px solid rgba(15,23,42,.1);
            background:#fff;
            color:#4b5563;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:7px;
            font-size:.78rem;
            font-weight:900;
          }
          .preview-mobile-mode.active {
            background:#111;
            border-color:#111;
            color:#fff;
          }
          .preview-mobile-icon {
            background:var(--accent);
            border-color:var(--accent);
            color:#fff;
          }
          .preview-topbar {
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            z-index:70;
            width:min(310px, 86vw);
            min-height:auto;
            flex-direction:column;
            align-items:stretch;
            transform:translateX(-102%);
            transition:transform .24s ease;
            overflow:auto;
            box-shadow:20px 0 50px rgba(15,23,42,.18);
            padding:16px;
          }
          .preview-topbar.mobile-open { transform:translateX(0); }
          .preview-topbar .preview-full-link,
          .preview-topbar .preview-device-section {
            display:none;
          }
          .preview-topbar-main {
            display:none;
          }
          .preview-device-tabs { width:100%; display:grid; grid-template-columns:1fr 1fr; }
          .preview-device-tab { width:100%; }
          .preview-full-link { width:100%; }
          .preview-side-actions { margin-top:0; }
          .preview-frame-shell { padding:0; }
          .preview-frame-shell {
            position:relative;
            align-items:flex-start;
            justify-content:center;
            padding:76px 12px 96px;
          }
          .preview-frame-shell.desktop-mode {
            padding-top:126px;
            padding-left:18px;
            padding-right:18px;
            overflow:hidden;
          }
          .preview-desktop-monitor {
            display:flex;
            width:max-content;
            max-width:100%;
            flex-direction:column;
            align-items:center;
            justify-content:flex-start;
          }
          .preview-device-frame.desktop {
            width:980px;
            max-width:none;
            height:700px;
            margin:4px 4px 0;
            padding:4px;
            border:14px solid #202124;
            border-top-width:20px;
            border-bottom-width:46px;
            border-radius:16px;
            background:#202124;
            box-sizing:border-box;
            box-shadow:0 22px 54px rgba(15,23,42,.26), inset 0 -34px 0 #2a2e35;
            zoom:.35;
          }
          .preview-device-frame.desktop:before {
            display:none;
          }
          .preview-device-frame.desktop:after {
            display:none;
          }
          .preview-device-frame.desktop iframe {
            height:100%;
            margin-top:0;
          }
          .preview-desktop-stand {
            position:relative;
            display:block;
            width:220px;
            height:60px;
            margin-top:-12px;
            pointer-events:none;
          }
          .preview-desktop-stand:before {
            content:"";
            position:absolute;
            top:0;
            left:50%;
            width:58px;
            height:48px;
            border-radius:0 0 14px 14px;
            background:linear-gradient(180deg, #30343b 0%, #242932 56%, #1f2329 100%);
            box-shadow:inset 0 10px 0 rgba(255,255,255,.035), 0 10px 18px rgba(15,23,42,.14);
            transform:translateX(-50%);
            pointer-events:none;
          }
          .preview-desktop-stand:after {
            content:"";
            position:absolute;
            left:50%;
            bottom:0;
            width:206px;
            height:16px;
            border-radius:999px 999px 7px 7px;
            background:linear-gradient(180deg, #515761 0%, #343a44 42%, #242932 100%);
            box-shadow:0 14px 24px rgba(15,23,42,.16);
            transform:translateX(-50%);
          }
          .preview-device-frame.mobile {
            width:min(284px, calc(100vw - 88px));
            height:min(600px, calc(100dvh - 198px));
            margin:0 auto;
            border-radius:24px;
            border:7px solid #111;
            box-shadow:0 20px 54px rgba(15,23,42,.25);
          }
          .preview-device-frame.mobile:before {
            top:6px;
            width:66px;
            height:5px;
          }
          .preview-device-frame.mobile:after {
            right:-11px;
            top:82px;
            height:46px;
          }
          .preview-customize-panel { display:grid; }
          .preview-mobile-scrim {
            display:block;
            position:fixed;
            inset:0;
            z-index:65;
            background:rgba(15,23,42,.28);
            opacity:0;
            visibility:hidden;
            transition:opacity .2s ease, visibility .2s ease;
          }
          .preview-mobile-scrim.open {
            opacity:1;
            visibility:visible;
          }
          .preview-mobile-bar {
            position:fixed;
            left:12px;
            right:12px;
            bottom:12px;
            z-index:60;
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:8px;
            padding:10px;
            border-radius:16px;
            background:rgba(255,255,255,.96);
            border:1px solid var(--border);
            box-shadow:0 12px 36px rgba(0,0,0,.14);
            backdrop-filter:blur(18px);
          }
          .preview-mobile-bar .btn {
            width:100%;
            min-width:0;
            padding:0 10px;
            font-size:.78rem;
            line-height:1.05;
            text-align:center;
          }
          .preview-mobile-bar .preview-mobile-change-btn {
            border:1px solid rgba(185,28,28,.44);
            background:linear-gradient(180deg, #b91c1c, #8f1717);
            color:#fff;
            box-shadow:0 10px 22px rgba(185,28,28,.22), inset 0 1px 0 rgba(255,255,255,.18);
          }
          .preview-mobile-bar .preview-mobile-change-btn:hover {
            background:linear-gradient(180deg, #c52222, #851515);
            border-color:rgba(185,28,28,.58);
            box-shadow:0 12px 26px rgba(185,28,28,.28), inset 0 1px 0 rgba(255,255,255,.2);
          }
          .preview-template-float {
            display:none;
          }
        }
        @media(max-width:980px) and (min-width:768px){
          .preview-workspace {
            grid-template-rows:66px minmax(0, 1fr);
          }
          .preview-workspace-head {
            grid-template-columns:minmax(0, 1fr) auto minmax(0, 1fr);
            padding:0 14px;
            gap:10px;
          }
          .preview-workspace-title h1 {
            font-size:.86rem;
            max-width:280px;
          }
          .preview-view-group {
            display:flex;
          }
          .preview-head-actions .preview-device-tabs {
            width:auto;
            height:40px;
            grid-template-columns:repeat(2, minmax(82px, auto));
          }
          .preview-head-actions .preview-device-tab {
            height:40px;
            padding:0 10px;
            font-size:.76rem;
          }
          .preview-head-link {
            min-width:82px;
            min-height:40px;
            padding:0 10px;
            font-size:.76rem;
          }
          .preview-head-link.continue {
            min-width:104px;
            min-height:38px;
            border-radius:12px;
            font-size:.76rem;
          }
        }
      `}</style>

      <section className="preview-studio">
        <div className="preview-mobile-head" aria-label="Mobile preview controls">
          {["desktop", "mobile"].map(item => (
            <button
              key={item}
              type="button"
              onClick={() => setDevice(item)}
              className={`preview-mobile-mode ${device === item ? "active" : ""}`}
            >
              <Icon name={item === "desktop" ? "monitor" : "smartphone"} className="h-4 w-4" />
              {item === "desktop" ? "Desktop" : "Mobile"}
            </button>
          ))}
          <Link href={fullHref} target="_blank" rel="noopener noreferrer" className="preview-mobile-icon" aria-label="Full preview">
            <Icon name="eye" className="h-4 w-4" />
          </Link>
          <button type="button" className="preview-mobile-icon" onClick={() => setMobilePanelOpen(true)} aria-label="Customize">
            <Icon name="sparkles" className="h-4 w-4" />
          </button>
        </div>
        <button type="button" aria-label="Close controls" className={`preview-mobile-scrim ${mobilePanelOpen ? "open" : ""}`} onClick={() => setMobilePanelOpen(false)} />
        <div className={`preview-topbar ${mobilePanelOpen ? "mobile-open" : ""}`}>
          <Link href="/" className="preview-sidebar-logo" aria-label="Web Launchy Fire home">
            <img src="/logo2.svg" alt="" className="preview-sidebar-logo-img" />
            <span className="preview-sidebar-logo-text">
              <span className="preview-sidebar-logo-top">Web</span>
              <span className="preview-sidebar-logo-name">Launchy<span className="preview-sidebar-logo-fire">Fire</span></span>
            </span>
          </Link>
          <div>
            <p className="preview-control-label">Customized</p>
            <div className={`preview-customize-panel ${mobilePanelOpen ? "mobile-open" : ""}`}>
              <div className="preview-tool-section">
                <span className="preview-field-label">Language</span>
                <select className="preview-language-select" value={language} onChange={e => setLanguage(e.target.value)}>
                  {LANGUAGES.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="preview-tool-section">
                <div className="preview-theme-head">
                  <span className="preview-field-label" style={{ marginBottom: 0 }}>Font style</span>
                  <button
                    type="button"
                    className="preview-theme-next"
                    onClick={() => setFontPage(page => (page + 1) % fontPageCount)}
                    aria-label="Show more font styles"
                  >
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="preview-font-row">
                  {visibleFonts.map(f => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFont(f.id)}
                      className={`preview-font-btn ${font === f.id ? "active" : ""}`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="preview-tool-section">
                <div className="preview-theme-head">
                  <span className="preview-field-label" style={{ marginBottom: 0 }}>Theme color</span>
                  <button
                    type="button"
                    className="preview-theme-next"
                    onClick={() => setThemePage(page => (page + 1) % themePageCount)}
                    aria-label="Show more theme colors"
                  >
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="preview-color-row">
                  {visibleThemes.map(({ id, primary, secondary, soft, panel, card, ink, muted, onPrimary, onCard, onPanel, line, onAccent, label }) => (
                    <button
                      key={id}
                      type="button"
                      className="preview-color-btn"
                      aria-label={label}
                      onClick={() => {
                        setAccent(primary);
                        setThemeColors({ bg: soft, soft, secondary, panel, card, ink, muted, onPrimary, onCard, onPanel, line, onAccent });
                      }}
                      style={{
                        boxShadow: accent === primary ? `0 0 0 2px #fff, 0 0 0 4px ${primary}` : "0 0 0 2px var(--border)",
                      }}
                    >
                      <span style={{ background: primary }} />
                      <span style={{ background: secondary }} />
                      <span style={{ background: soft }} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="preview-tool-section">
                <span className="preview-field-label">Corner style</span>
                <div className="preview-option-row">
                  {["Round", "Soft", "Sharp"].map(item => (
                    <button
                      key={item}
                      type="button"
                      className={`preview-chip-btn ${cornerStyle === item ? "active" : ""}`}
                      onClick={() => setCornerStyle(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="preview-tool-section is-disabled">
                <span className="preview-field-label">Dark mode preview</span>
                <div className="preview-toggle-row">
                  <span style={{ color: "#4b5563", fontSize: ".84rem", fontWeight: 850 }}>Coming soon</span>
                  <button
                    type="button"
                    className={`preview-switch ${darkPreview ? "on" : ""}`}
                    onClick={() => setDarkPreview(value => !value)}
                    aria-label="Toggle dark mode preview"
                  >
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="preview-workspace">
          <div className="preview-workspace-head">
            <div className="preview-workspace-title">
              <p>Template preview</p>
              <h1>{template.name} - Standard - Style 1</h1>
            </div>
            <div className="preview-head-actions">
              <div className="preview-view-group">
                <div className="preview-device-tabs" aria-label="Preview device">
                  {["mobile", "desktop"].map(item => (
                    <button
                      key={item}
                    type="button"
                    onClick={() => setDevice(item)}
                    className={`preview-device-tab ${item === "mobile" ? "mobile-segment" : "desktop-segment"} ${device === item ? "active" : ""}`}
                      aria-label={item === "desktop" ? "Desktop view" : "Mobile view"}
                    >
                      <Icon name={item === "desktop" ? "monitor" : "smartphone"} className="h-4 w-4" />
                      {item === "desktop" ? "Desktop" : "Mobile"}
                    </button>
                  ))}
                </div>
                <Link href={fullHref} target="_blank" rel="noopener noreferrer" className="preview-head-link primary">
                  <Icon name="eye" className="h-4 w-4" />
                  Full view
                </Link>
              </div>
              <Link href={`/launch?template=${template.id}&${previewQuery}`} className="preview-head-link continue">
                <Icon name="sparkles" className="h-4 w-4" />
                Launch this
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className={`preview-frame-shell ${device === "desktop" ? "desktop-mode" : ""}`}>
            <div className={device === "desktop" ? "preview-desktop-monitor" : undefined}>
              <div className={`preview-device-frame ${device}`}>
                <iframe
                  key={frameSrc}
                  src={frameSrc}
                  title={`${template.name} ${device} preview`}
                />
              </div>
              {device === "desktop" && <span className="preview-desktop-stand" aria-hidden="true" />}
            </div>
          </div>
          <button type="button" className="preview-template-float" onClick={() => setTemplateDrawerOpen(true)}>
            <Icon name="layout" className="h-4 w-4" />
            <span className="preview-template-float-text">
              <strong>Change template</strong>
              <span>or category</span>
            </span>
          </button>
        </div>
        <button type="button" aria-label="Close template drawer" className={`preview-drawer-scrim ${templateDrawerOpen ? "open" : ""}`} onClick={() => setTemplateDrawerOpen(false)} />
        <aside className={`preview-template-drawer ${templateDrawerOpen ? "open" : ""}`} aria-label="Change template">
          <div className="preview-drawer-head">
            <div>
              <p className="preview-drawer-kicker">Change template</p>
              <h2 className="preview-drawer-title">Choose a style</h2>
            </div>
            <button type="button" className="preview-drawer-close" onClick={() => setTemplateDrawerOpen(false)} aria-label="Close">
              x
            </button>
          </div>
          <div className="preview-filter-panel">
            <div>
              <span className="preview-field-label">Business</span>
              <select
                className="preview-drawer-select"
                value={drawerCategory}
                onChange={e => {
                  const nextCategory = e.target.value;
                  const nextBusiness = getCategory(nextCategory);
                  setDrawerCategory(nextCategory);
                  setDrawerSubcategory(nextBusiness?.subcategories[0]?.id || "");
                }}
              >
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <span className="preview-field-label">Category</span>
              <select className="preview-drawer-select" value={drawerSubcategory} onChange={e => setDrawerSubcategory(e.target.value)}>
                {drawerBusinessType.subcategories.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
          </div>
          <div className="preview-template-section">
            <p className="preview-template-section-title">Available templates</p>
            <div className="preview-template-list">
              {drawerTemplates.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/template-preview/${item.id}?${previewQuery}`}
                  className={`preview-template-option ${item.id === template.id ? "active" : ""}`}
                >
                  <span className="preview-template-thumb" style={{ backgroundImage: `url(${item.image})` }} />
                  <span>
                    <span className="preview-template-title">{item.name}</span>
                    <span className="preview-template-meta">{item.id === template.id ? "Current template" : `Style ${index + 1}`}</span>
                    <span className="preview-template-price">{item.price}</span>
                  </span>
                  {item.id === template.id && <span className="preview-selected-pill">Selected</span>}
                </Link>
              ))}
              {!drawerTemplates.length && (
                <p className="preview-template-meta" style={{ padding: "12px 2px" }}>No templates found for this category.</p>
              )}
            </div>
          </div>
        </aside>
      </section>

      <div className="preview-mobile-bar">
        <button
          type="button"
          className="btn btn-secondary btn-sm focus-ring preview-mobile-change-btn"
          style={{ borderRadius: 10, height: 42 }}
          onClick={() => setTemplateDrawerOpen(true)}
        >
          Change template
        </button>
        <Link href={`/launch?template=${template.id}&${previewQuery}`} className="btn btn-primary btn-sm focus-ring" style={{ borderRadius: 10, height: 42 }}>
          Start this
        </Link>
      </div>
    </div>
  );
}
