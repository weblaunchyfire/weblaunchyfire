import { Icon } from "@/components/Icons";
import Kicker from "./Kicker";
import { products, waLink } from "./templateData";

export default function Products({ phone, labels }) {
  return (
    <section className="min-w-0 overflow-hidden border-b border-[var(--std-line)] bg-[var(--std-bg-2)] px-6 py-14 text-[var(--std-panel-text)] md:px-10 lg:px-14 lg:py-[88px]" id="products">
      <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <Kicker>{labels.shop}</Kicker>
          <h2 className="mt-3 font-[var(--std-heading)] text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-normal">{labels.ourProducts}</h2>
        </div>
        <a className="text-[9px] font-black uppercase tracking-[2px] text-[var(--std-gold-light)]" href="#contact">{labels.viewAll}</a>
      </div>
      <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3">
        {products.map((product, index) => (
          <article className={`min-w-0 overflow-hidden border bg-[var(--std-card)] text-[var(--std-card-text)] ${index === 0 ? "border-[var(--std-gold-light)]" : "border-[var(--std-line)]"}`} key={product.name}>
            <img className="block aspect-square w-full object-cover" src={product.image} alt={product.name} />
            <div className="p-3.5">
              <p className="text-[8px] font-black uppercase tracking-[2px] text-[var(--std-gold-light)]">{product.category}</p>
              <p className="mt-1 font-[var(--std-heading)] text-base font-bold">{product.name}</p>
              <p className="my-1 flex items-center gap-2 text-[13px] font-black text-[var(--std-gold-light)]">{product.price} <del className="text-[10px] font-semibold text-[var(--std-muted)]">{product.oldPrice}</del></p>
              <a className="flex min-h-[38px] min-w-0 items-center justify-center gap-2 border border-[var(--std-line)] px-2 py-2 text-center text-[9px] font-black uppercase leading-snug tracking-[.6px] text-[var(--std-card-text)]" href={waLink(phone, `I'm interested in ${product.name}`)} target="_blank" rel="noreferrer">
                <Icon name="phone" className="h-3.5 w-3.5 shrink-0" />
                <span className="min-w-0 [overflow-wrap:anywhere]">{labels.orderViaWhatsApp}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
