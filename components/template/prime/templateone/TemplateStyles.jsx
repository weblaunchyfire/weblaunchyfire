export default function TemplateStyles() {
  return (
    <style jsx global>{`
      .prime-template, .prime-template * { box-sizing: border-box; }
      .prime-template {
        --ink:#0d0d0d;
        --paper:#f5f2ec;
        --clay:#c4a882;
        --rust:#9b4f2f;
        --sage:#4a5240;
        --fog:#e8e3d9;
        --white:#ffffff;
        --muted:#6b6459;
        background: var(--paper);
        color: var(--ink);
        font-family: "DM Sans", Inter, system-ui, sans-serif;
        overflow-x: hidden;
      }
      .prime-template a { color: inherit; text-decoration: none; }
      .prime-template svg { width: 20px; height: 20px; stroke: currentColor; stroke-width: 1.5; fill: none; }
      .prime-template .cursor, .prime-template .cursor-ring { display: none; }
      @media (hover:hover) and (pointer:fine) {
        .prime-template .cursor { position: fixed; display: block; width: 10px; height: 10px; background: var(--rust); border-radius: 50%; pointer-events: none; z-index: 9999; transition: transform .15s ease; mix-blend-mode: multiply; }
        .prime-template .cursor-ring { position: fixed; display: block; width: 40px; height: 40px; border: 1px solid var(--rust); border-radius: 50%; pointer-events: none; z-index: 9998; transition: all .3s ease; opacity: .5; }
      }
      .prime-nav { position: sticky; top: 0; z-index: 900; display: flex; align-items: center; justify-content: space-between; padding: 0 60px; height: 76px; background: rgba(245,242,236,.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(196,168,130,.2); }
      .prime-logo, .logo { display: flex; flex-direction: column; gap: 2px; }
      .logo-mark { font-family: Georgia, "Times New Roman", serif; font-size: 26px; font-weight: 900; letter-spacing: 6px; color: var(--ink); line-height: 1; }
      .logo-sub { font-family: "Roboto Mono", Consolas, monospace; font-size: 8px; letter-spacing: 4px; color: var(--clay); text-transform: uppercase; }
      .nav-links { display: flex; gap: 40px; list-style: none; align-items: center; margin: 0; padding: 0; }
      .nav-links a { font-size: 11px; letter-spacing: 2px; font-weight: 700; color: var(--muted); text-transform: uppercase; transition: color .2s; }
      .nav-links a:hover { color: var(--ink); }
      .nav-cta { display: flex; align-items: center; gap: 10px; padding: 12px 28px; background: var(--ink); color: var(--paper); font-size: 10px; letter-spacing: 2.5px; font-weight: 700; text-transform: uppercase; transition: background .25s; }
      .nav-cta:hover { background: var(--rust); }
      .nav-cta svg { width: 18px; height: 18px; }
      .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; border: 0; background: transparent; }
      .hamburger span { width: 24px; height: 1.5px; background: var(--ink); }
      .hero { min-height: calc(100vh - 76px); display: grid; grid-template-columns: 1fr 1fr; position: relative; }
      .hero-left { display: flex; flex-direction: column; justify-content: flex-end; padding: 80px 60px 80px 80px; background: var(--ink); position: relative; overflow: hidden; }
      .hero-left::before { content: "ARKA"; position: absolute; top: -40px; left: -20px; font-family: Georgia, serif; font-size: 260px; font-weight: 900; color: rgba(255,255,255,.03); line-height: 1; pointer-events: none; }
      .hero-eyebrow, .section-label { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
      .section-label { margin-bottom: 48px; }
      .hero-eyebrow span, .section-label span { font-family: "Roboto Mono", Consolas, monospace; font-size: 10px; letter-spacing: 3px; color: var(--clay); text-transform: uppercase; }
      .hero-eyebrow::before, .section-label::before { content: ""; width: 40px; height: 1px; background: var(--clay); }
      .section-label::before { width: 32px; }
      .hero-h1 { font-family: Georgia, "Times New Roman", serif; font-size: clamp(52px,6vw,84px); font-weight: 400; line-height: 1.05; color: var(--white); margin: 0 0 32px; letter-spacing: 0; }
      .hero-h1 em, .services-title em { font-style: italic; color: var(--clay); }
      .hero-desc { font-size: 14px; color: rgba(255,255,255,.58); line-height: 1.8; max-width: 360px; margin: 0 0 52px; }
      .hero-actions { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
      .btn-primary { padding: 16px 40px; background: var(--clay); color: var(--ink); font-size: 10px; letter-spacing: 3px; font-weight: 800; text-transform: uppercase; display: inline-block; transition: all .3s; border: 0; }
      .btn-primary:hover { background: var(--rust); color: var(--white); }
      .btn-link { font-size: 11px; letter-spacing: 2px; color: rgba(255,255,255,.45); display: flex; align-items: center; gap: 8px; transition: color .2s; }
      .btn-link:hover { color: var(--clay); }
      .btn-link::after { content: "→"; transition: transform .2s; }
      .btn-link:hover::after { transform: translateX(4px); }
      .hero-right { position: relative; overflow: hidden; background: #1a1a18; }
      .hero-img-placeholder { width: 100%; height: 100%; min-height: 520px; background: linear-gradient(135deg,#2a2520 0%,#1a1510 40%,#3a2e20 100%); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
      .hero-img-placeholder::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(196,168,130,.04) 40px,rgba(196,168,130,.04) 41px); }
      .hero-img-placeholder svg { opacity: .18; stroke: var(--clay); width: 80px; height: 80px; }
      .hero-img-label { position: absolute; bottom: 40px; left: 40px; background: rgba(0,0,0,.6); padding: 16px 24px; backdrop-filter: blur(10px); }
      .hero-img-label p { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: var(--clay); margin: 0 0 4px; text-transform: uppercase; }
      .hero-img-label h3 { font-family: Georgia, serif; font-size: 18px; color: var(--white); margin: 0; }
      .ticker { background: var(--rust); padding: 14px 0; overflow: hidden; white-space: nowrap; }
      .ticker-inner { display: inline-flex; animation: primeTicker 20s linear infinite; }
      .ticker-item { font-family: "Roboto Mono", Consolas, monospace; font-size: 11px; letter-spacing: 3px; color: var(--white); padding: 0 50px; text-transform: uppercase; opacity: .9; }
      .ticker-dot { color: var(--clay); opacity: .6; padding-left: 50px; }
      @keyframes primeTicker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .about, .contact { display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; }
      .about-left, .contact-left { padding: 100px 80px; display: flex; flex-direction: column; justify-content: center; }
      .about-h2, .portfolio-title, .contact-h2 { font-family: Georgia, "Times New Roman", serif; font-size: clamp(36px,4vw,56px); font-weight: 400; line-height: 1.15; margin: 0 0 32px; color: var(--ink); letter-spacing: 0; }
      .about-h2 em, .contact-h2 em { font-style: italic; color: var(--sage); }
      .about-text { font-size: 15px; line-height: 1.85; color: var(--muted); margin: 0 0 48px; max-width: 440px; }
      .about-stats { display: flex; gap: 40px; flex-wrap: wrap; }
      .stat-num { font-family: Georgia, serif; font-size: 48px; font-weight: 700; line-height: 1; color: var(--rust); }
      .stat-label { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2.5px; color: var(--muted); text-transform: uppercase; margin-top: 6px; }
      .about-right { background: var(--fog); display: grid; grid-template-rows: 1fr 1fr; }
      .about-img-top { background: linear-gradient(135deg,#b5a090,#8a7060); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; min-height: 260px; }
      .about-img-top::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(255,255,255,.03) 30px,rgba(255,255,255,.03) 31px); }
      .about-img-top svg { opacity: .24; stroke: var(--clay); width: 60px; height: 60px; }
      .about-img-bottom { background: var(--sage); padding: 48px; display: flex; flex-direction: column; justify-content: flex-end; }
      .quote-mark { font-family: Georgia, serif; font-size: 80px; line-height: .6; color: var(--clay); margin-bottom: 16px; }
      .quote-text { font-family: Georgia, serif; font-size: 20px; font-style: italic; color: var(--white); line-height: 1.5; margin: 0 0 16px; }
      .quote-author { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 3px; color: var(--clay); text-transform: uppercase; margin: 0; }
      .services { padding: 120px 80px; background: var(--ink); }
      .services-header, .portfolio-header { display: flex; justify-content: space-between; align-items: flex-end; gap: 32px; margin-bottom: 80px; }
      .services-title { font-family: Georgia, serif; font-size: clamp(36px,4vw,56px); font-weight: 400; color: var(--white); line-height: 1.15; margin: 0; letter-spacing: 0; }
      .services-link { font-family: "Roboto Mono", Consolas, monospace; font-size: 10px; letter-spacing: 2px; color: var(--clay); display: flex; align-items: center; gap: 8px; text-transform: uppercase; transition: gap .2s; }
      .services-link:hover { gap: 16px; }
      .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: rgba(255,255,255,.06); }
      .service-card { background: var(--ink); padding: 52px 40px; transition: background .3s; border: 1px solid rgba(196,168,130,.08); }
      .service-card:hover { background: rgba(196,168,130,.07); }
      .service-num { font-family: "Roboto Mono", Consolas, monospace; font-size: 11px; letter-spacing: 2px; color: rgba(196,168,130,.4); margin-bottom: 32px; display: block; }
      .service-icon, .info-icon { width: 44px; height: 44px; border: 1px solid rgba(196,168,130,.3); display: flex; align-items: center; justify-content: center; margin-bottom: 32px; color: var(--clay); }
      .service-name { font-family: Georgia, serif; font-size: 24px; font-weight: 400; color: var(--white); margin: 0 0 16px; }
      .service-desc { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,.38); margin: 0 0 32px; }
      .service-price { font-family: "Roboto Mono", Consolas, monospace; font-size: 12px; letter-spacing: 1px; color: var(--clay); }
      .portfolio { padding: 120px 0 0; }
      .portfolio-header { padding: 0 80px; margin-bottom: 60px; }
      .portfolio-title em { font-style: italic; color: var(--rust); }
      .portfolio-filter { display: flex; gap: 8px; flex-wrap: wrap; }
      .filter-btn { padding: 8px 20px; border: 1px solid rgba(196,168,130,.3); background: transparent; font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: var(--muted); cursor: pointer; transition: all .2s; text-transform: uppercase; }
      .filter-btn.active, .filter-btn:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
      .portfolio-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 340px 340px; gap: 4px; }
      .port-item { position: relative; overflow: hidden; cursor: pointer; background: var(--fog); }
      .port-item:first-child { grid-row: span 2; }
      .port-bg { width: 100%; height: 100%; transition: transform .6s ease; }
      .port-item:hover .port-bg { transform: scale(1.04); }
      .port-bg-1 { background: linear-gradient(145deg,#5c4a35,#3a2e20); }
      .port-bg-2 { background: linear-gradient(145deg,#4a5240,#2e3328); }
      .port-bg-3 { background: linear-gradient(145deg,#7a5540,#4a2e20); }
      .port-bg-4 { background: linear-gradient(145deg,#3a4535,#252e20); }
      .port-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 50%); opacity: 0; transition: opacity .3s; }
      .port-item:hover .port-overlay { opacity: 1; }
      .port-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px; transform: translateY(20px); opacity: 0; transition: all .3s; }
      .port-item:hover .port-info { transform: translateY(0); opacity: 1; }
      .port-cat { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: var(--clay); text-transform: uppercase; margin: 0 0 8px; }
      .port-name { font-family: Georgia, serif; font-size: 22px; color: var(--white); margin: 0; }
      .port-tag { position: absolute; top: 24px; left: 24px; background: rgba(0,0,0,.5); padding: 6px 12px; backdrop-filter: blur(8px); }
      .port-tag span { font-family: "Roboto Mono", Consolas, monospace; font-size: 8px; letter-spacing: 2px; color: var(--clay); text-transform: uppercase; }
      .process { padding: 120px 80px; background: var(--fog); }
      .process-header { margin-bottom: 80px; max-width: 560px; }
      .process-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; position: relative; }
      .process-steps::before { content: ""; position: absolute; top: 28px; left: 12.5%; right: 12.5%; height: 1px; background: rgba(196,168,130,.3); }
      .process-step { padding: 0 24px; text-align: center; position: relative; }
      .step-circle { width: 56px; height: 56px; border: 1px solid var(--clay); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; background: var(--fog); position: relative; z-index: 1; }
      .step-num { font-family: "Roboto Mono", Consolas, monospace; font-size: 12px; letter-spacing: 1px; color: var(--clay); }
      .step-name { font-family: Georgia, serif; font-size: 18px; font-weight: 400; color: var(--ink); margin: 0 0 12px; }
      .step-desc { font-size: 12px; line-height: 1.7; color: var(--muted); margin: 0; }
      .testimonials { padding: 120px 80px; background: var(--white); }
      .test-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 72px; }
      .test-card { padding: 52px; border: 1px solid var(--fog); position: relative; transition: border-color .3s; }
      .test-card:hover { border-color: var(--clay); }
      .test-stars { color: var(--clay); font-size: 14px; letter-spacing: 4px; margin-bottom: 28px; }
      .test-text { font-family: Georgia, serif; font-size: 18px; font-style: italic; line-height: 1.6; color: var(--ink); margin: 0 0 32px; }
      .test-author { display: flex; align-items: center; gap: 16px; padding-top: 24px; border-top: 1px solid var(--fog); }
      .test-avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg,var(--clay),var(--rust)); }
      .test-avatar.is-sage { background: linear-gradient(135deg,var(--sage),var(--ink)); }
      .test-name { font-weight: 800; font-size: 13px; color: var(--ink); margin: 0; }
      .test-role { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: var(--muted); margin: 2px 0 0; text-transform: uppercase; }
      .test-quote-mark { position: absolute; top: 32px; right: 32px; font-family: Georgia, serif; font-size: 60px; line-height: .8; color: var(--fog); }
      .awards { padding: 80px; background: var(--ink); display: flex; align-items: center; gap: 80px; overflow-x: auto; }
      .award-item { display: flex; flex-direction: column; align-items: center; gap: 12px; flex-shrink: 0; text-align: center; padding: 0 40px; border-right: 1px solid rgba(255,255,255,.06); }
      .award-item:last-child { border: none; }
      .award-year { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 3px; color: var(--clay); text-transform: uppercase; }
      .award-name { font-family: Georgia, serif; font-size: 16px; color: var(--white); }
      .award-org { font-size: 11px; color: rgba(255,255,255,.35); margin-top: 2px; }
      .contact-left { background: var(--paper); }
      .contact-h2 { margin-bottom: 48px; }
      .contact-info { display: flex; flex-direction: column; gap: 32px; margin-bottom: 52px; }
      .info-row { display: flex; align-items: flex-start; gap: 20px; }
      .info-icon { width: 40px; height: 40px; margin: 0; flex-shrink: 0; }
      .info-icon svg { width: 16px; height: 16px; }
      .info-text label { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: var(--clay); text-transform: uppercase; display: block; margin-bottom: 4px; }
      .info-text span { font-size: 14px; color: var(--ink); }
      .contact-form { padding: 100px 80px; background: var(--sage); }
      .form-title { font-family: Georgia, serif; font-size: 32px; color: var(--white); margin: 0 0 48px; line-height: 1.2; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
      .form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
      .form-group label { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: rgba(255,255,255,.55); text-transform: uppercase; }
      .form-group input, .form-group select, .form-group textarea { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); padding: 14px 18px; color: var(--white); font-family: inherit; font-size: 14px; outline: none; transition: border-color .2s; width: 100%; }
      .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,.32); }
      .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--clay); }
      .form-group select option { background: var(--sage); color: var(--white); }
      .form-group textarea { height: 100px; resize: none; }
      .btn-submit { width: 100%; padding: 18px; background: var(--clay); color: var(--ink); font-family: "Roboto Mono", Consolas, monospace; font-size: 11px; letter-spacing: 3px; font-weight: 700; text-transform: uppercase; border: none; cursor: pointer; transition: background .25s; }
      .btn-submit:hover { background: var(--rust); color: var(--white); }
      .wp-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 16px; background: rgba(37,211,102,.1); border: 1px solid rgba(37,211,102,.3); color: #25d366; font-family: "Roboto Mono", Consolas, monospace; font-size: 10px; letter-spacing: 2px; margin-top: 12px; transition: background .2s; text-transform: uppercase; }
      .wp-btn:hover { background: rgba(37,211,102,.2); }
      .wp-btn svg { width: 18px; height: 18px; fill: currentColor; stroke: none; }
      .prime-footer { background: var(--ink); padding: 80px; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 60px; border-top: 1px solid rgba(255,255,255,.04); }
      .footer-brand .logo-mark { color: var(--white); display: block; }
      .footer-brand .logo-sub { display: block; margin: 4px 0 20px; }
      .footer-brand p { font-size: 13px; color: rgba(255,255,255,.35); line-height: 1.7; max-width: 220px; margin: 0; }
      .footer-col h4 { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 3px; color: var(--clay); text-transform: uppercase; margin: 0 0 24px; }
      .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; margin: 0; padding: 0; }
      .footer-col a { font-size: 13px; color: rgba(255,255,255,.45); transition: color .2s; }
      .footer-col a:hover { color: var(--clay); }
      .footer-bottom { background: var(--ink); padding: 24px 80px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,.04); }
      .footer-bottom p { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: rgba(255,255,255,.25); margin: 0; }
      .social-links { display: flex; gap: 20px; }
      .social-links a { font-family: "Roboto Mono", Consolas, monospace; font-size: 9px; letter-spacing: 2px; color: rgba(255,255,255,.35); }
      .social-links a:hover { color: var(--clay); }
      @media (max-width: 900px) {
        .prime-nav { padding: 0 24px; }
        .nav-links, .nav-cta { display: none; }
        .hamburger { display: flex; }
        .hero, .about, .contact { grid-template-columns: 1fr; }
        .hero-left, .about-left, .contact-left, .contact-form { padding: 60px 24px; }
        .hero-left::before { font-size: 150px; top: -20px; }
        .hero-img-placeholder { min-height: 420px; }
        .services, .process, .testimonials { padding: 80px 24px; }
        .services-grid { grid-template-columns: 1fr; }
        .services-header, .portfolio-header { flex-direction: column; align-items: flex-start; gap: 24px; }
        .portfolio-header { padding: 0 24px; }
        .portfolio-grid { grid-template-columns: 1fr; grid-template-rows: repeat(4, 320px); }
        .port-item:first-child { grid-row: span 1; }
        .process-steps { grid-template-columns: 1fr 1fr; gap: 40px; }
        .process-steps::before { display: none; }
        .test-grid { grid-template-columns: 1fr; }
        .awards { padding: 60px 24px; flex-wrap: wrap; gap: 40px; }
        .prime-footer { padding: 60px 24px; grid-template-columns: 1fr 1fr; gap: 40px; }
        .footer-bottom { padding: 24px; flex-direction: column; gap: 12px; text-align: center; }
        .form-row { grid-template-columns: 1fr; }
      }
      @media (max-width: 560px) {
        .hero-h1 { font-size: 48px; }
        .hero-actions { align-items: stretch; flex-direction: column; gap: 18px; }
        .about-stats, .process-steps, .prime-footer { grid-template-columns: 1fr; }
        .about-stats { flex-direction: column; gap: 24px; }
        .test-card { padding: 36px 24px; }
        .portfolio-filter { width: 100%; }
        .filter-btn { flex: 1 1 auto; }
      }
    `}</style>
  );
}
