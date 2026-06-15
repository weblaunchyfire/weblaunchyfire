export default function Kicker({ children }) {
  return (
    <p className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[4px] text-[var(--std-gold-light)]">
      <span className="h-px w-10 bg-[var(--std-gold-light)]" />
      {children}
    </p>
  );
}
