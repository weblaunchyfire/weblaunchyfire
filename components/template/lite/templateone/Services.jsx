import { Icon } from "@/components/Icons";

export default function Services({ services, icon, labels }) {
  return (
    <section id="services" className="lite-section">
      <div className="lite-wrap">
        <p className="lite-kicker">{labels?.servicesKicker || "What We Offer"}</p>
        <h2 className="lite-title">{labels?.servicesTitle || "Our Services"}</h2>
        <div className="lite-services">
          {services.map((service) => (
            <article key={service} className="lite-service-card">
              <Icon name={icon || "sparkles"} className="h-6 w-6" />
              <h3>{service}</h3>
              <p>{labels?.serviceText || "Focused service blocks with clear details, enquiry intent, and a direct conversion path."}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
