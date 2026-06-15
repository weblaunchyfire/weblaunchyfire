"use client";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Nav from "./Nav";
import Products from "./Products";
import Services from "./Services";
import { LABELS as liteLanguageLabels } from "@/components/template/lite/templateone/TemplateOne";
import { defaultBusiness, getFontFamily, getHeadingFont } from "@/components/template/lite/templateone/templateData";
import { splitBrand } from "./templateData";
import { standardLanguageTextData } from "./languageTextData";

export default function StandardTemplateOne({ template, accent, font, relatedHref, themeOverride, language }) {
  const theme = { ...(themeOverride || {}) };
  const baseLabels = standardLanguageTextData[language] || standardLanguageTextData.English;
  const liteLabels = liteLanguageLabels[language] || liteLanguageLabels.English;
  const labels = { ...baseLabels, serviceText: liteLabels.serviceText };
  const contentLabels = liteLabels.content || null;
  const business = { ...defaultBusiness, ...(template.business || {}), ...(contentLabels || {}) };
  const brand = splitBrand(business);
  const services = business.services?.length ? business.services.slice(0, 6) : defaultBusiness.services;
  const stats = business.stats?.length
    ? business.stats.slice(0, 3)
    : [["500+", "Clients"], ["6 Yrs", "Excellence"], ["98%", "Satisfaction"]];
  const phone = business.phone || "+91 98765 43210";
  const address = business.address || "12, Pradhan Nagar, Siliguri, WB 734003";
  const email = business.email || "hello@elitestudio.in";
  const timing = business.timing || "Mon - Sat: 5:00 AM - 10:00 PM\nSunday: 7:00 AM - 8:00 PM";
  const image = template.image || business.image;

  return (
    <div
      className="min-h-screen bg-[var(--std-bg-3)] text-[var(--std-text)] [font-family:var(--std-font)] [&_*]:box-border [&_a]:text-inherit [&_a]:no-underline"
      style={{
        "--std-gold": accent || template.accent || "#a0732a",
        "--std-gold-light": theme.secondary || accent || template.accent || "#c49a45",
        "--std-accent-text": theme.onPrimary || theme.onAccent || "#ffffff",
        "--std-bg": theme.bg || "#f7f3ea",
        "--std-bg-2": theme.panel || "#e8eef4",
        "--std-bg-3": theme.soft || "#f2efe7",
        "--std-card": theme.card || "#ffffff",
        "--std-nav": theme.panel || theme.bg || "#f7f3ea",
        "--std-footer": theme.panel || "#e8eef4",
        "--std-text": theme.ink || "#172033",
        "--std-muted": theme.muted || "#5f6673",
        "--std-card-text": theme.onCard || theme.ink || "#172033",
        "--std-panel-text": theme.onPanel || theme.ink || "#172033",
        "--std-line": theme.line || "color-mix(in srgb, var(--std-text) 16%, transparent)",
        "--std-font": getFontFamily(font || template.font),
        "--std-heading": getHeadingFont(font || template.font),
      }}
    >
      <main className="min-w-0 w-full bg-[var(--std-bg)] shadow-[0_18px_70px_rgba(18,24,32,.12)]">
        <Nav brand={brand} phone={phone} relatedHref={relatedHref} labels={labels} />
        <Hero business={business} brand={brand} image={image} stats={stats} labels={labels} />
        <About business={business} />
        <Services services={services} template={template} labels={labels} />
        <Products phone={phone} labels={labels} />
        <Gallery brand={brand} business={business} image={image} labels={labels} />
        <Contact brand={brand} services={services} phone={phone} email={email} address={address} timing={timing} labels={labels} />
        <Footer brand={brand} labels={labels} />
      </main>
    </div>
  );
}
