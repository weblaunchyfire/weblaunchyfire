export default function TemplateStyles({ template }) {
  return (
    <style>{`
      .lite-template {
        min-height:100vh;
        background:var(--lite-bg);
        color:var(--lite-ink);
        font-family:var(--lite-font);
      }
      .lite-wrap {
        width:min(100%, 1280px);
        margin:0 auto;
        padding:0 clamp(18px, 3vw, 32px);
      }
      .lite-nav {
        position:sticky;
        top:0;
        z-index:10;
        background:color-mix(in srgb, var(--lite-surface) 92%, transparent);
        border-bottom:1px solid var(--lite-line);
        backdrop-filter:blur(18px);
      }
      .lite-nav .lite-wrap {
        min-height:64px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px;
      }
      .lite-brand {
        display:flex;
        align-items:center;
        gap:6px;
        color:var(--lite-ink);
        font-family:var(--lite-heading-font);
        font-size:1.02rem;
        font-weight:900;
      }
      .lite-brand span:first-child { color:var(--lite-accent); font-family:var(--lite-font); }
      .lite-call {
        min-height:34px;
        display:inline-flex;
        align-items:center;
        gap:8px;
        padding:0 13px;
        border:1px solid var(--lite-line);
        border-radius:var(--lite-radius);
        color:var(--lite-ink);
        font-size:.78rem;
        font-weight:800;
        text-decoration:none;
      }
      .lite-hero {
        width:min(100%, 1280px);
        margin:0 auto;
        display:grid;
        grid-template-columns:minmax(0, .96fr) minmax(0, 1.04fr);
        min-height:clamp(560px, calc(100vh - 72px), 680px);
        border-bottom:1px solid var(--lite-line);
      }
      .lite-hero-copy {
        padding:clamp(58px, 6.5vw, 92px) clamp(28px, 4.2vw, 64px);
        background:
          radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--lite-panel) 68%, transparent), transparent 42%),
          linear-gradient(135deg, var(--lite-bg), color-mix(in srgb, var(--lite-panel) 44%, var(--lite-surface)));
      }
      .lite-kicker {
        color:var(--lite-accent);
        font-size:.72rem;
        font-weight:950;
        letter-spacing:.16em;
        text-transform:uppercase;
      }
      .lite-hero h1,
      .lite-title {
        font-family:var(--lite-heading-font);
        letter-spacing:0;
      }
      .lite-hero h1 {
        max-width:500px;
        margin-top:16px;
        font-size:clamp(2.35rem, 5.4vw, 4.65rem);
        line-height:.96;
        overflow-wrap:break-word;
      }
      .lite-hero p {
        max-width:430px;
        margin-top:20px;
        color:var(--lite-muted);
        font-size:.95rem;
        line-height:1.75;
      }
      .lite-actions {
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        margin-top:28px;
      }
      .lite-btn {
        min-height:42px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:0 16px;
        border-radius:var(--lite-radius);
        border:1px solid color-mix(in srgb, var(--lite-accent) 28%, transparent);
        background:var(--lite-accent);
        color:var(--lite-on-accent);
        font-size:.78rem;
        font-weight:900;
        text-decoration:none;
      }
      .lite-btn.dark {
        background:var(--lite-ink);
        color:var(--lite-bg);
      }
      .lite-hero-art {
        position:relative;
        min-height:clamp(560px, calc(100vh - 72px), 680px);
        display:grid;
        place-items:center;
        overflow:hidden;
        background:url(${template.image});
        background-size:cover;
        background-position:center;
      }
      .lite-hero-art:before { display:none; }
      .lite-logo-mark {
        position:relative;
        display:grid;
        gap:12px;
        place-items:center;
        color:var(--lite-accent);
        font-size:.68rem;
        font-weight:950;
        letter-spacing:.18em;
        text-transform:uppercase;
      }
      .lite-price {
        position:absolute;
        right:clamp(24px, 3vw, 42px);
        bottom:clamp(24px, 3vw, 42px);
        width:clamp(126px, 11vw, 156px);
        min-height:78px;
        display:grid;
        place-items:center;
        border:1px solid color-mix(in srgb, var(--lite-accent) 75%, white 5%);
        border-radius:var(--lite-radius);
        background:color-mix(in srgb, var(--lite-surface) 88%, transparent);
        color:var(--lite-ink);
        box-shadow:0 18px 44px rgba(15,23,42,.12);
        text-align:center;
        padding:12px;
      }
      .lite-price strong {
        color:var(--lite-accent);
        font-size:1.28rem;
        font-weight:950;
      }
      .lite-price del {
        display:block;
        margin-bottom:2px;
        color:var(--lite-muted);
        font-size:.78rem;
        font-weight:800;
      }
      .lite-price span {
        display:block;
        margin-top:2px;
        color:var(--lite-muted);
        font-size:.62rem;
        font-weight:800;
      }
      .lite-section {
        padding:70px 0;
        border-bottom:1px solid var(--lite-line);
      }
      .lite-title {
        margin-top:10px;
        font-size:clamp(1.8rem, 4vw, 3rem);
        line-height:1;
      }
      .lite-about-grid {
        display:grid;
        grid-template-columns:1fr .8fr;
        gap:42px;
        align-items:end;
      }
      .lite-copy {
        color:var(--lite-muted);
        line-height:1.75;
        font-size:.96rem;
      }
      .lite-stats {
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        gap:22px;
        margin-top:30px;
      }
      .lite-stat strong {
        color:var(--lite-accent);
        font-size:1.55rem;
        font-weight:950;
      }
      .lite-stat span {
        display:block;
        margin-top:5px;
        color:var(--lite-muted);
        font-size:.72rem;
        font-weight:800;
      }
      .lite-services {
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        gap:16px;
        margin-top:34px;
      }
      .lite-service-card {
        min-height:154px;
        padding:22px;
        border:1px solid var(--lite-line);
        border-radius:var(--lite-radius);
        background:var(--lite-card);
        box-shadow:0 14px 34px rgba(15,23,42,.06);
      }
      .lite-service-card svg {
        color:var(--lite-accent);
        margin-bottom:22px;
      }
      .lite-service-card h3 {
        font-size:1rem;
        line-height:1.2;
        color:var(--lite-ink);
      }
      .lite-service-card p {
        margin-top:8px;
        color:var(--lite-muted);
        font-size:.78rem;
        line-height:1.55;
      }
      .lite-gallery {
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        gap:14px;
        margin-top:34px;
      }
      .lite-gallery-tile {
        min-height:154px;
        display:grid;
        place-items:center;
        border-radius:var(--lite-radius);
        color:color-mix(in srgb, var(--lite-accent) 70%, var(--lite-muted));
      }
      .lite-contact {
        display:grid;
        grid-template-columns:1fr .95fr;
        gap:42px;
        align-items:start;
      }
      .lite-info-row {
        display:grid;
        grid-template-columns:28px 1fr;
        gap:13px;
        padding:17px 0;
        border-bottom:1px solid var(--lite-line);
      }
      .lite-info-row svg { color:var(--lite-accent); }
      .lite-info-row p {
        color:var(--lite-muted);
        font-size:.82rem;
        line-height:1.55;
      }
      .lite-map {
        min-height:230px;
        display:grid;
        place-items:center;
        border:1px solid var(--lite-line);
        border-radius:var(--lite-radius);
        background:var(--lite-card);
        color:var(--lite-muted);
        box-shadow:0 14px 34px rgba(15,23,42,.06);
        text-align:center;
      }
      .lite-map svg { color:var(--lite-accent); margin:0 auto 10px; }
      .lite-footer {
        display:grid;
        place-items:center;
        gap:18px;
        padding:42px 24px;
        background:var(--lite-ink);
        color:var(--lite-bg);
        text-align:center;
      }
      .lite-wa-btn {
        min-height:48px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        padding:0 26px;
        border:1px solid color-mix(in srgb, var(--lite-bg) 20%, transparent);
        border-radius:999px;
        background:#25D366;
        color:#fff;
        font-size:.9rem;
        font-weight:950;
        text-decoration:none;
        box-shadow:0 18px 42px rgba(37,211,102,.22);
      }
      .lite-footer-copy {
        color:color-mix(in srgb, var(--lite-bg) 52%, transparent);
        font-size:.75rem;
        font-weight:700;
      }
      .lite-template.is-clinic-doctor .lite-hero {
        grid-template-columns:minmax(440px, .92fr) minmax(0, 1.08fr);
      }
      .lite-template.is-clinic-doctor .lite-hero-copy {
        background:linear-gradient(135deg, var(--lite-panel), var(--lite-surface));
        padding-right:clamp(34px, 4vw, 62px);
      }
      .lite-template.is-clinic-doctor .lite-hero h1 {
        max-width:560px;
        font-size:clamp(2.45rem, 4.45vw, 4.05rem);
        line-height:1.02;
      }
      .lite-template.is-clinic-doctor .lite-hero-art {
        place-items:end center;
        background:url(${template.image});
        background-size:cover;
        background-position:center top;
      }
      .lite-doctor-panel {
        position:relative;
        z-index:2;
        width:min(360px, calc(100% - 48px));
        margin-bottom:clamp(34px, 5vw, 62px);
        margin-left:0;
        padding:20px;
        border:1px solid var(--lite-line);
        border-radius:var(--lite-radius);
        background:color-mix(in srgb, var(--lite-surface) 88%, transparent);
        backdrop-filter:blur(14px);
        box-shadow:0 24px 70px rgba(0,0,0,.3);
      }
      .lite-doctor-panel strong {
        display:block;
        color:var(--lite-ink);
        font-size:1.05rem;
      }
      .lite-doctor-panel span {
        display:block;
        margin-top:7px;
        color:var(--lite-muted);
        font-size:.8rem;
        line-height:1.5;
      }
      .lite-template.is-coaching-centre .lite-hero {
        grid-template-columns:.95fr 1.05fr;
      }
      .lite-template.is-coaching-centre .lite-hero-copy {
        background:linear-gradient(135deg, var(--lite-panel), var(--lite-surface));
      }
      .lite-template.is-coaching-centre .lite-hero-art {
        background:var(--lite-soft);
      }
      .lite-slide {
        position:absolute;
        inset:0;
        background-size:cover;
        background-position:center;
        opacity:0;
        animation:liteSlide 12s infinite;
      }
      .lite-slide:nth-child(1) { animation-delay:0s; }
      .lite-slide:nth-child(2) { animation-delay:4s; }
      .lite-slide:nth-child(3) { animation-delay:8s; }
      .lite-template.is-coaching-centre .lite-hero-art:after { display:none; }
      @keyframes liteSlide {
        0%, 100% { opacity:0; transform:scale(1); }
        8%, 32% { opacity:1; transform:scale(1.04); }
        42% { opacity:0; transform:scale(1.07); }
      }
      @media(max-width:760px){
        .lite-wrap { padding:0 18px; }
        .lite-hero,
        .lite-template.is-clinic-doctor .lite-hero,
        .lite-template.is-coaching-centre .lite-hero,
        .lite-about-grid,
        .lite-contact {
          grid-template-columns:1fr;
        }
        .lite-hero-copy {
          padding:50px 18px;
        }
        .lite-hero h1,
        .lite-template.is-clinic-doctor .lite-hero h1 {
          font-size:clamp(2.15rem, 12vw, 3.35rem);
          line-height:1;
        }
        .lite-hero-art {
          min-height:330px;
        }
        .lite-services,
        .lite-gallery,
        .lite-stats {
          grid-template-columns:1fr;
        }
        .lite-section { padding:54px 0; }
        .lite-price {
          right:22px;
          bottom:22px;
        }
        .lite-doctor-panel {
          width:calc(100% - 36px);
          margin-bottom:24px;
        }
      }
    `}</style>
  );
}
