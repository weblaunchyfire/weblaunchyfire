export default function About({ business, stats }) {
  return (
    <section className="lite-section">
      <div className="lite-wrap lite-about-grid">
        <div>
          <p className="lite-kicker">{business.aboutKicker}</p>
          <h2 className="lite-title">{business.aboutTitle}</h2>
          <p className="lite-copy" style={{ marginTop: 18 }}>
            {business.about}
          </p>
        </div>
        <div>
          <div className="lite-stats">
            {stats.map(([value, label]) => (
              <div key={label} className="lite-stat"><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
