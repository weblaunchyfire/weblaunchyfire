import { Icon } from "@/components/Icons";
import { galleryColors } from "./templateData";

export default function Gallery({ title = "Inside The Brand", labels }) {
  return (
    <section className="lite-section">
      <div className="lite-wrap">
        <p className="lite-kicker">{labels?.gallery || "Gallery"}</p>
        <h2 className="lite-title">{title}</h2>
        <div className="lite-gallery">
          {galleryColors.map((color) => (
            <div key={color} className="lite-gallery-tile" style={{ background: color }}>
              <Icon name="eye" className="h-5 w-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
