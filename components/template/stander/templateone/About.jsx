import Kicker from "./Kicker";
import { aboutStats } from "./templateData";

export default function About({ business }) {
  return (
    <section className="border-b border-[var(--std-line)] bg-[var(--std-bg-2)] px-6 py-14 text-[var(--std-panel-text)] md:px-14 md:py-[88px]">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-[72px]">
        <div>
          <Kicker>{business.aboutKicker || "Our Story"}</Kicker>
          <h2 className="mt-3 font-[var(--std-heading)] text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-normal">{business.aboutTitle || "Built on Trust, Defined by Quality"}</h2>
          <div className="mt-[18px] h-px w-12 bg-[var(--std-gold-light)]" />
          <p className="mt-6 text-[13px] leading-[1.9] text-[var(--std-muted)]">{business.about}</p>
          <p className="my-6 border-l border-[var(--std-gold-light)] px-[18px] py-3 font-[var(--std-heading)] text-lg italic leading-[1.55] text-[var(--std-panel-text)]">We do not just serve clients, we build relationships that last a lifetime.</p>
          <p className="text-[13px] leading-[1.9] text-[var(--std-muted)]">Our team is committed to understanding each need and crafting solutions that go beyond expectations.</p>
        </div>
        <div className="grid grid-cols-1 border border-[var(--std-line)] sm:grid-cols-2">
          {aboutStats.map(([value, label], index) => (
            <div className={`flex min-h-[126px] flex-col justify-center border-[var(--std-line)] p-[26px] ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 2 ? "border-b" : ""}`} key={`${value}-${label}`}>
              <strong className="font-[var(--std-heading)] text-[28px] leading-none text-[var(--std-gold-light)]">{value}</strong>
              <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[1.8px] text-[var(--std-muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
