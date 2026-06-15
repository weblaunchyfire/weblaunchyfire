import About from "./About";
import Awards from "./Awards";
import Contact from "./Contact";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Services from "./Services";
import TemplateStyles from "./TemplateStyles";
import Testimonials from "./Testimonials";
import Ticker from "./Ticker";

export default function PrimeTemplateOne({ accent, themeOverride }) {
  const theme = themeOverride || {};
  const primary = accent || theme.primary || "#c4a882";
  const secondary = theme.secondary || "#9b4f2f";

  return (
    <div
      className="prime-template"
      style={{
        "--ink": theme.ink || "#0d0d0d",
        "--paper": theme.bg || "#f5f2ec",
        "--clay": primary,
        "--rust": secondary,
        "--sage": secondary,
        "--fog": theme.panel || "#e8e3d9",
        "--muted": theme.muted || "#6b6459",
      }}
    >
      <TemplateStyles />
      <CustomCursor />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}
