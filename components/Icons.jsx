export function Icon({ name, className = "h-5 w-5", ...props }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M9 10v10" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </>
    ),
    smartphone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    tag: (
      <>
        <path d="M20 12v7a2 2 0 0 1-2 2h-7L3 13V5a2 2 0 0 1 2-2h8Z" />
        <path d="M7.5 7.5h.01" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9Z" />
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
        <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8Z" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    dumbbell: (
      <>
        <path d="M6 7v10" />
        <path d="M18 7v10" />
        <path d="M8 12h8" />
        <path d="M3 9v6" />
        <path d="M21 9v6" />
      </>
    ),
    coffee: (
      <>
        <path d="M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
        <path d="M16 10h2a3 3 0 0 1 0 6h-2" />
        <path d="M8 2v3" />
        <path d="M12 2v3" />
      </>
    ),
    utensils: (
      <>
        <path d="M4 3v8" />
        <path d="M7 3v8" />
        <path d="M4 7h3" />
        <path d="M5.5 11v10" />
        <path d="M16 3a4 4 0 0 1 4 4v5h-4Z" />
        <path d="M16 12v9" />
      </>
    ),
    book: (
      <>
        <path d="M4 5a3 3 0 0 1 3-3h13v18H7a3 3 0 0 0-3 3Z" />
        <path d="M4 5v18" />
      </>
    ),
    building: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 7h1" />
        <path d="M14 7h1" />
        <path d="M9 11h1" />
        <path d="M14 11h1" />
        <path d="M9 15h1" />
        <path d="M14 15h1" />
      </>
    ),
    school: (
      <>
        <path d="m3 9 9-5 9 5-9 5Z" />
        <path d="M6 11v5c2 2 10 2 12 0v-5" />
        <path d="M21 10v6" />
      </>
    ),
    "shopping-bag": (
      <>
        <path d="M6 8h12l-1 13H7Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />,
  };

  return <svg {...common} {...props}>{paths[name] || paths.sparkles}</svg>;
}
