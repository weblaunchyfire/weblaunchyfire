import { Icon } from "@/components/Icons";
import Kicker from "./Kicker";
import { serviceDescription } from "./templateData";

export default function Services({ services, template, labels }) {
  return (
    <section className="border-b border-[var(--std-line)] px-6 py-14 md:px-14 md:py-[88px]" id="services">
      <div className="mb-11">
        <Kicker>{labels.whatWeOffer}</Kicker>
        <h2 className="mt-3 font-[var(--std-heading)] text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-normal">{labels.ourServices}</h2>
        <div className="mt-[18px] h-px w-12 bg-[var(--std-gold-light)]" />
      </div>
      <div className="grid border border-[var(--std-line)] md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article className="min-h-[230px] border-b border-[var(--std-line)] bg-[var(--std-card)] p-7 text-[var(--std-card-text)] md:border-r lg:p-9 [&:nth-child(2n)]:md:border-r-0 [&:nth-child(3n)]:lg:border-r-0" key={service}>
            <span className="mb-5 grid h-10 w-10 place-items-center border border-[var(--std-line)] text-[var(--std-gold-light)]">
              <Icon name={index === 2 ? "dumbbell" : index === 3 ? "coffee" : template.icon || "sparkles"} className="h-5 w-5" />
            </span>
            <h3 className="mb-2 font-[var(--std-heading)] text-lg font-bold">{service}</h3>
            <p className="text-xs leading-[1.75] text-[var(--std-muted)]">{labels.serviceText || serviceDescription(service, index)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
