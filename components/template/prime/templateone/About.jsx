import { stats } from "./templateData";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="section-label"><span>Our Studio</span></div>
        <h2 className="about-h2">Where Form Meets<br /><em>Function</em> & Soul</h2>
        <p className="about-text">Since 2009, ARKA has been North Bengal&apos;s most sought-after interior architecture studio. We believe great spaces are not designed, they are discovered within the structure, the light, and the life that will inhabit them.</p>
        <div className="about-stats">
          {stats.map(([num, label]) => <div className="stat-item" key={label}><div className="stat-num">{num}</div><div className="stat-label">{label}</div></div>)}
        </div>
      </div>
      <div className="about-right">
        <div className="about-img-top">
          <svg width="60" height="60" fill="none" viewBox="0 0 60 60" aria-hidden="true">
            <circle cx="30" cy="30" r="20" /><circle cx="30" cy="30" r="10" /><line x1="0" y1="30" x2="60" y2="30" /><line x1="30" y1="0" x2="30" y2="60" />
          </svg>
        </div>
        <div className="about-img-bottom">
          <div className="quote-mark">&quot;</div>
          <p className="quote-text">Good design is not about what it looks like, it&apos;s about how it makes you feel when you walk in.</p>
          <p className="quote-author">- Arjun Kapoor, Principal Designer</p>
        </div>
      </div>
    </section>
  );
}
