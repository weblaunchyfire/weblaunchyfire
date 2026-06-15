import Link from "next/link";
import { coachingHeroImages } from "./templateData";

function CoachingSlides() {
  return (
    <>
      {coachingHeroImages.map((image) => (
        <span key={image} className="lite-slide" style={{ backgroundImage: `url(${image})` }} />
      ))}
    </>
  );
}

function DoctorPanel({ labels }) {
  return (
    <div className="lite-doctor-panel">
      <strong>{labels?.doctorTitle || "Doctor profile ready"}</strong>
      <span>{labels?.doctorText || "Show specialist details, clinic timing, appointment CTA, and patient trust in one premium hero area."}</span>
    </div>
  );
}

export default function Hero({ business, template, labels }) {
  const isCoaching = template.category === "coaching-centre";
  const isClinic = template.category === "clinic-doctor";

  return (
    <section className="lite-hero">
      <div className="lite-hero-copy">
        <p className="lite-kicker">{business.kicker}</p>
        <h1>{business.title}</h1>
        <p>{business.description}</p>
        <div className="lite-actions">
          <Link href="/contact" className="lite-btn">{labels?.getStarted || "Get Started"}</Link>
          <Link href="#services" className="lite-btn dark">{labels?.seeServices || "See Services"}</Link>
        </div>
      </div>
      <div className="lite-hero-art">
        {isCoaching && <CoachingSlides />}
        {isClinic && <DoctorPanel labels={labels} />}
        <div className="lite-price">
          <div>
            {template.originalPrice && <del>{template.originalPrice}</del>}
            <strong>{template.price}</strong>
            <span>Lite</span>
          </div>
        </div>
      </div>
    </section>
  );
}
