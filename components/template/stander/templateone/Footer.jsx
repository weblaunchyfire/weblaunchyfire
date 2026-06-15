export default function Footer({ brand, labels }) {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-[var(--std-line)] bg-[var(--std-footer)] px-6 py-8 text-[var(--std-muted)] md:flex-row md:items-center md:px-14">
      <div className="flex flex-col leading-none">
        <strong className="font-[var(--std-heading)] text-[22px] font-black uppercase tracking-[3px] text-[var(--std-panel-text)]">{brand}</strong>
        <span className="mt-2 text-[8px] font-bold uppercase tracking-[5px] text-[var(--std-gold-light)]">{labels.premiumLabel}</span>
      </div>
      <p className="text-[10px]">© 2026 {brand}. All Rights Reserved.</p>
      <p className="text-[10px]">{labels.footerLine}</p>
    </footer>
  );
}
