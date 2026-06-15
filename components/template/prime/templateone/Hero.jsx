export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <div className="hero-eyebrow"><span>Est. 2009 - Siliguri</span></div>
        <h1 className="hero-h1">Spaces That<br /><em>Breathe</em><br />Luxury</h1>
        <p className="hero-desc">We design interiors that merge architectural precision with sensory delight, crafting environments that tell your story with every material, light, and line.</p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-link">Start a Project</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-placeholder">
          <svg width="80" height="80" fill="none" viewBox="0 0 80 80" aria-hidden="true">
            <rect x="10" y="10" width="60" height="60" />
            <line x1="10" y1="40" x2="70" y2="40" />
            <line x1="40" y1="10" x2="40" y2="70" />
          </svg>
        </div>
        <div className="hero-img-label">
          <p>Featured Project</p>
          <h3>The Himalayan Residence</h3>
        </div>
      </div>
    </section>
  );
}
