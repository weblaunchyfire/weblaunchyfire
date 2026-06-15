import { Icon } from "@/components/Icons";
import ButtonLink from "./ButtonLink";
import Kicker from "./Kicker";
import { waLink } from "./templateData";

export default function Contact({ brand, services, phone, email, address, timing, labels }) {
  return (
    <section className="border-b border-[var(--std-line)] bg-[var(--std-bg-2)] px-6 py-14 text-[var(--std-panel-text)] md:px-14 md:py-[88px]" id="contact">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-14">
        <div>
          <Kicker>{labels.getInTouch}</Kicker>
          <h2 className="mt-3 font-[var(--std-heading)] text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-normal">{labels.contactUs}</h2>
          <p className="mt-3 text-[13px] leading-[1.9] text-[var(--std-muted)]">{labels.contactIntro}</p>
          <form className="mt-6 grid gap-3.5">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field label={labels.firstName}><input placeholder="Rahul" /></Field>
              <Field label={labels.lastName}><input placeholder="Sharma" /></Field>
            </div>
            <Field label={labels.emailAddress}><input type="email" placeholder="rahul@email.com" /></Field>
            <Field label={labels.phoneNumber}><input type="tel" placeholder={phone} /></Field>
            <Field label={labels.serviceInterestedIn}>
              <select defaultValue={services[0]}>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
            </Field>
            <Field label={labels.message}><textarea placeholder={labels.message} /></Field>
            <button className="min-h-[42px] border border-[var(--std-gold)] bg-[var(--std-gold)] text-[10px] font-black uppercase tracking-[2px] text-[var(--std-accent-text)]" type="button">{labels.sendMessage}</button>
          </form>
        </div>
        <div>
          <div className="border-t border-[var(--std-line)]">
            {[
              ["map", labels.address, address],
              ["phone", labels.phone, phone],
              ["sparkles", labels.email, email],
              ["clock", labels.hours, timing],
            ].map(([icon, label, value]) => (
              <div className="grid grid-cols-[40px_1fr] gap-3.5 border-b border-[var(--std-line)] py-[18px]" key={label}>
                <span className="grid h-10 w-10 place-items-center border border-[var(--std-line)] text-[var(--std-gold-light)]"><Icon name={icon} className="h-4 w-4" /></span>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[2px] text-[var(--std-gold-light)]">{label}</p>
                  <p className="mt-1 whitespace-pre-line text-[13px] leading-normal text-[var(--std-panel-text)]">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            <ButtonLink href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer"><Icon name="map" className="h-4 w-4" />{labels.viewOnGoogleMaps}</ButtonLink>
            <ButtonLink href={waLink(phone, `I want to enquire about ${brand}`)} target="_blank" rel="noreferrer" primary><Icon name="phone" className="h-4 w-4" />{labels.chatOnWhatsApp}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5 [&_input]:min-h-10 [&_input]:w-full [&_input]:border [&_input]:border-[var(--std-line)] [&_input]:bg-[var(--std-card)] [&_input]:px-3 [&_input]:py-2.5 [&_input]:text-xs [&_input]:text-[var(--std-card-text)] [&_input]:outline-0 [&_select]:min-h-10 [&_select]:w-full [&_select]:border [&_select]:border-[var(--std-line)] [&_select]:bg-[var(--std-card)] [&_select]:px-3 [&_select]:py-2.5 [&_select]:text-xs [&_select]:text-[var(--std-card-text)] [&_select]:outline-0 [&_textarea]:min-h-[100px] [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:border [&_textarea]:border-[var(--std-line)] [&_textarea]:bg-[var(--std-card)] [&_textarea]:px-3 [&_textarea]:py-2.5 [&_textarea]:text-xs [&_textarea]:text-[var(--std-card-text)] [&_textarea]:outline-0">
      <span className="text-[8px] font-black uppercase tracking-[2px] text-[var(--std-gold-light)]">{label}</span>
      {children}
    </label>
  );
}
