import { testimonials } from "./templateData";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-label"><span>Client Words</span></div>
      <h2 className="about-h2">What Our <em>Clients</em> Say</h2>
      <div className="test-grid">
        {testimonials.map(([name, role, text, avatarClass]) => (
          <article className="test-card" key={name}>
            <div className="test-stars">★★★★★</div>
            <p className="test-text">&quot;{text}&quot;</p>
            <div className="test-author">
              <div className={`test-avatar ${avatarClass}`} />
              <div><p className="test-name">{name}</p><p className="test-role">{role}</p></div>
            </div>
            <div className="test-quote-mark">&quot;</div>
          </article>
        ))}
      </div>
    </section>
  );
}
