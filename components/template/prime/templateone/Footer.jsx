import { studio } from "./templateData";

export default function Footer() {
  return (
    <>
      <footer className="prime-footer">
        <div className="footer-brand"><span className="logo-mark">{studio.name}</span><span className="logo-sub">{studio.descriptor}</span><p>Crafting extraordinary interiors across North Bengal since 2009.</p></div>
        <div className="footer-col"><h4>Services</h4><ul><li><a href="#services">Residential Design</a></li><li><a href="#services">Commercial Spaces</a></li><li><a href="#services">3D Visualization</a></li><li><a href="#services">Turnkey Projects</a></li></ul></div>
        <div className="footer-col"><h4>Studio</h4><ul><li><a href="#about">About Us</a></li><li><a href="#process">Our Process</a></li><li><a href="#portfolio">Awards</a></li><li><a href="#contact">Contact</a></li></ul></div>
        <div className="footer-col"><h4>Connect</h4><ul><li><a href="#">Instagram</a></li><li><a href="#">Pinterest</a></li><li><a href="#">Houzz</a></li><li><a href="#">LinkedIn</a></li></ul></div>
      </footer>
      <div className="footer-bottom"><p>© 2025 ARKA Interior Architecture. All Rights Reserved.</p><div className="social-links"><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">LinkedIn</a></div></div>
    </>
  );
}
