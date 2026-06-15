import { Icon } from "@/components/Icons";

export default function Contact({ business, labels }) {
  const timingLines = String(business.timing || "").split("\n");

  return (
    <section className="lite-section">
      <div className="lite-wrap lite-contact">
        <div>
          <p className="lite-kicker">{labels?.findUs || "Find Us"}</p>
          <h2 className="lite-title">{labels?.contactTitle || "Contact & Timing"}</h2>
          <div className="lite-info-row">
            <Icon name="clock" className="h-5 w-5" />
            <p>{timingLines.map((line) => <span key={line}>{line}<br /></span>)}</p>
          </div>
          <div className="lite-info-row">
            <Icon name="home" className="h-5 w-5" />
            <p>{business.address}</p>
          </div>
          <div className="lite-info-row">
            <Icon name="phone" className="h-5 w-5" />
            <p>{business.phone}</p>
          </div>
        </div>
        <div className="lite-map">
          <div>
            <Icon name="map" className="h-8 w-8" />
            <strong>{labels?.mapTitle || "View on Google Maps"}</strong>
            <p className="lite-copy" style={{ marginTop: 10 }}>{business.mapNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
