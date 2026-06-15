import Icon from "./Icon";
import { services } from "./templateData";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="services-title">What We<br /><em>Create</em></h2>
        <a href="#contact" className="services-link">All Services →</a>
      </div>
      <div className="services-grid">
        {services.map(([num, icon, name, desc, price]) => (
          <article className="service-card" key={name}>
            <span className="service-num">{num}</span>
            <div className="service-icon"><Icon name={icon} /></div>
            <h3 className="service-name">{name}</h3>
            <p className="service-desc">{desc}</p>
            <span className="service-price">{price}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
