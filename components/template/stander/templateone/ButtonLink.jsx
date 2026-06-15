export default function ButtonLink({ href, children, primary = false, className = "", ...props }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2 border px-5 text-xs font-black uppercase tracking-[2px] text-[var(--std-text)] transition",
        primary
          ? "border-[var(--std-gold)] bg-[var(--std-gold)] text-[var(--std-accent-text)]"
          : "border-[var(--std-line)] hover:border-[var(--std-gold-light)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
