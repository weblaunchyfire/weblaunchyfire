import Icon from "./Icon";
import { navLinks, studio } from "./templateData";

export default function Nav() {
  return (
    <nav className="prime-nav">
      <a href="#top" className="prime-logo" aria-label="ARKA home">
        <span className="logo-mark">{studio.name}</span>
        <span className="logo-sub">{studio.descriptor}</span>
      </a>
      <ul className="nav-links">
        {navLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
      </ul>
      <a href={studio.phoneHref} className="nav-cta"><Icon name="phone" />{studio.phone}</a>
      <button className="hamburger" type="button" aria-label="Menu"><span /><span /><span /></button>
    </nav>
  );
}
