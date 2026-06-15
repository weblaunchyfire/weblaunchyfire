import Kicker from "./Kicker";
import { galleryImages } from "./templateData";

export default function Gallery({ brand, business, image, labels }) {
  return (
    <section className="border-b border-[var(--std-line)] px-6 py-14 md:px-14 md:py-[88px]" id="gallery">
      <Kicker>{labels.gallery}</Kicker>
      <h2 className="mt-3 font-[var(--std-heading)] text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-normal">Inside {business.brandName || brand}</h2>
      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:grid-rows-[180px_150px_150px] lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[190px_190px]">
        {galleryImages.map((item, index) => (
          <div className={`${index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""} overflow-hidden border border-[var(--std-line)] bg-[var(--std-card)]`} key={item}>
            <img className="block h-full min-h-[180px] w-full object-cover" src={index === 0 ? image || item : item} alt={`${brand} gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
