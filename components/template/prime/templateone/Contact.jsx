import Icon from "./Icon";
import { studio } from "./templateData";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <div className="section-label"><span>Get In Touch</span></div>
        <h2 className="contact-h2">Let&apos;s Build<br /><em>Something</em><br />Beautiful</h2>
        <div className="contact-info">
          <div className="info-row"><div className="info-icon"><Icon name="location" /></div><div className="info-text"><label>Studio Address</label><span>{studio.address}</span></div></div>
          <div className="info-row"><div className="info-icon"><Icon name="phone" /></div><div className="info-text"><label>Phone</label><span>{studio.phone}</span></div></div>
          <div className="info-row"><div className="info-icon"><Icon name="mail" /></div><div className="info-text"><label>Email</label><span>{studio.email}</span></div></div>
        </div>
        <a href={studio.whatsapp} className="btn-primary">WhatsApp Consultation</a>
      </div>
      <div className="contact-form">
        <h3 className="form-title">Start Your<br />Project</h3>
        <div className="form-row">
          <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
          <div className="form-group"><label>Phone</label><input type="tel" placeholder="+91 00000 00000" /></div>
        </div>
        <div className="form-group"><label>Project Type</label><select defaultValue="Residential Design"><option>Residential Design</option><option>Commercial Space</option><option>3D Visualization</option><option>Turnkey Project</option><option>Other</option></select></div>
        <div className="form-group"><label>Project Brief</label><textarea placeholder="Tell us about your space, vision, and timeline..." /></div>
        <button className="btn-submit" type="button">Send Inquiry →</button>
        <a href={`${studio.whatsapp}?text=Hi%20ARKA%2C%20I'm%20interested%20in%20your%20interior%20design%20services.`} className="wp-btn"><Icon name="whatsapp" />Chat on WhatsApp</a>
      </div>
    </section>
  );
}
