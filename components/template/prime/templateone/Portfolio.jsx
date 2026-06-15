"use client";

import { useState } from "react";
import { portfolio } from "./templateData";

const filters = ["All", "Residential", "Commercial", "Hospitality"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? portfolio : portfolio.filter(([cat]) => cat === active);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Selected<br /><em>Works</em></h2>
        <div className="portfolio-filter">
          {filters.map((filter) => (
            <button className={`filter-btn ${active === filter ? "active" : ""}`} type="button" onClick={() => setActive(filter)} key={filter}>{filter}</button>
          ))}
        </div>
      </div>
      <div className="portfolio-grid">
        {visible.map(([cat, meta, name, bg]) => (
          <article className="port-item" key={name}>
            <div className={`port-bg ${bg}`} />
            <div className="port-tag"><span>{cat}</span></div>
            <div className="port-overlay" />
            <div className="port-info"><p className="port-cat">{meta}</p><h3 className="port-name">{name}</h3></div>
          </article>
        ))}
      </div>
    </section>
  );
}
