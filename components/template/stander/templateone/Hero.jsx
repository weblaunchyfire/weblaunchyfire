import ButtonLink from "./ButtonLink";
import Kicker from "./Kicker";

export default function Hero({ business, brand, image, stats, labels }) {
  return (
    <section className="grid min-h-0 border-b border-[var(--std-line)] lg:min-h-[620px] lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)]">
      <div className="flex min-w-0 flex-col justify-center border-b border-[var(--std-line)] px-6 py-14 md:px-10 lg:border-b-0 lg:border-r lg:px-[60px] lg:py-[86px]">
        <Kicker>{business.kicker || "Est. 2018 - Siliguri's finest"}</Kicker>
        <h1 className="my-6 max-w-[760px] font-[var(--std-heading)] text-[42px] font-bold leading-[1.04] tracking-normal md:text-[clamp(48px,7vw,82px)] lg:max-w-[620px] lg:text-[clamp(50px,5.8vw,78px)]">
          {business.title || <>Where Every Detail <em className="font-normal italic text-[var(--std-gold-light)]">Speaks</em> Excellence.</>}
        </h1>
        <p className="max-w-[390px] text-[13px] leading-[1.9] text-[var(--std-muted)]">{business.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#contact" primary>{labels.bookConsultation}</ButtonLink>
          <ButtonLink href="#services">{labels.exploreServices}</ButtonLink>
        </div>
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-5 px-6 py-14 md:px-10 lg:px-16 lg:py-[86px]">
        <div className="h-60 overflow-hidden border border-[var(--std-line)] bg-[var(--std-card)] md:h-[340px] lg:h-[300px]">
          <img className="block h-full w-full object-cover contrast-[1.03] saturate-[.9]" src={image} alt={`${brand} hero`} />
        </div>
        <div className="grid grid-cols-1 border border-[var(--std-line)] sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div className="flex min-h-[76px] flex-col justify-center border-b border-[var(--std-line)] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" key={`${value}-${label}`}>
              <strong className="font-[var(--std-heading)] text-[28px] leading-none text-[var(--std-gold-light)]">{value}</strong>
              <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[1.8px] text-[var(--std-muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
