import Link from "next/link";
import { Icon } from "@/components/Icons";
import { getCategoryName, getSubcategoryName } from "@/data/site";

export default function TemplateCard({ template, recommended = false }) {
  const categoryName = getCategoryName(template.category);
  const subcategoryName = getSubcategoryName(template.category, template.subcategory);
  const cardAccent = template.accent || "#ff6726";

  return (
    <article
      className={`template-card-pro ${recommended ? "is-recommended" : ""}`}
      style={{ "--card-accent": "#ff6416", "--chip-accent": cardAccent }}
    >
      <style>{`
        .template-card-pro {
          position:relative;
          height:460px;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          padding:10px;
          border-radius:0;
          background:
            linear-gradient(180deg, rgba(255,255,255,.98), #fff),
            radial-gradient(circle at 15% 0%, color-mix(in srgb, var(--card-accent) 10%, transparent), transparent 34%);
          border:1px solid rgba(15,23,42,.075);
          box-shadow:0 18px 48px rgba(15,23,42,.08), 0 1px 0 rgba(255,255,255,.8) inset;
          transition:transform .26s ease, box-shadow .26s ease, border-color .26s ease;
        }
        .template-card-pro:hover {
          transform:translateY(-6px);
          border-color:rgba(255,100,22,.28);
          box-shadow:0 34px 90px rgba(15,23,42,.16), 0 0 0 1px rgba(255,100,22,.08);
        }
        .template-card-pro.is-recommended {
          border-color:rgba(255,100,22,.34);
          box-shadow:0 26px 68px rgba(255,100,22,.12);
        }
        .template-shot {
          position:relative;
          flex:0 0 60%;
          overflow:hidden;
          border-radius:0;
          background:linear-gradient(180deg, #f8fafc, #f1f5f9);
          isolation:isolate;
        }
        .template-shot-img {
          position:absolute;
          inset:0;
          object-fit:cover;
          transform:scale(1.01);
          transition:transform .65s cubic-bezier(.2,.8,.2,1), filter .28s ease;
        }
        .template-shot:after {
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0) 48%, rgba(0,0,0,.18)),
            radial-gradient(circle at 20% 10%, rgba(255,255,255,.36), transparent 28%);
          pointer-events:none;
        }
        .template-price {
          position:absolute;
          top:14px;
          right:14px;
          z-index:3;
          min-height:36px;
          display:inline-flex;
          align-items:center;
          gap:7px;
          padding:0 12px;
          border-radius:7px;
          background:linear-gradient(180deg, #ff6416, #e94f0b);
          color:#fff;
          border:1px solid rgba(255,255,255,.34);
          box-shadow:0 16px 34px rgba(255,100,22,.24);
          font-size:.8rem;
          font-weight:950;
        }
        .template-price-original {
          color:rgba(255,255,255,.72);
          font-size:.68rem;
          text-decoration:line-through;
        }
        .template-price svg {
          width:14px;
          height:14px;
        }
        .template-card-pro:hover .template-shot-img {
          transform:scale(1.07);
          filter:saturate(1.08) contrast(1.03);
        }
        .template-body {
          flex:1;
          min-height:0;
          display:flex;
          flex-direction:column;
          padding:12px 8px 10px;
        }
        .template-meta {
          display:flex;
          align-items:center;
          gap:10px;
          min-width:0;
        }
        .template-type {
          min-height:25px;
          display:inline-flex;
          align-items:center;
          gap:6px;
          padding:0 10px;
          border-radius:7px;
          background:color-mix(in srgb, var(--chip-accent) 10%, #fff 90%);
          color:var(--chip-accent);
          box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--chip-accent) 22%, transparent);
          font-size:.62rem;
          font-weight:950;
          letter-spacing:.06em;
          text-transform:uppercase;
          flex:0 0 auto;
        }
        .template-connector {
          width:24px;
          height:1px;
          background:linear-gradient(90deg, #ff6416, rgba(255,100,22,0));
          flex:0 0 auto;
        }
        .template-title {
          min-width:0;
          overflow:hidden;
          color:#111827;
          font-size:1rem;
          font-weight:950;
          line-height:1.18;
          letter-spacing:0;
          white-space:nowrap;
          text-overflow:ellipsis;
          margin-top:0;
        }
        .template-desc {
          margin-top:6px;
          color:#707784;
          font-size:.86rem;
          line-height:1.35;
          display:-webkit-box;
          -webkit-line-clamp:1;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
        .template-includes {
          display:flex;
          gap:12px;
          margin-top:10px;
          color:#5b6472;
          font-size:.72rem;
          font-weight:850;
        }
        .template-includes span {
          display:inline-flex;
          align-items:center;
          justify-content:flex-start;
          gap:5px;
          min-height:auto;
          padding:0;
          border-radius:0;
          background:transparent;
          border:0;
          white-space:nowrap;
        }
        .template-includes svg {
          color:#ff6416;
        }
        .template-bottom {
          display:block;
          margin-top:auto;
          padding-top:10px;
        }
        .template-action {
          height:44px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          border-radius:4px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.22), transparent 34%),
            linear-gradient(180deg, #ff6a16, #f04d0b);
          color:#fff;
          border:1px solid rgba(159,51,0,.12);
          font-size:.9rem;
          font-weight:950;
          box-shadow:0 14px 24px rgba(255,100,22,.24), inset 0 1px 0 rgba(255,255,255,.28);
          transition:transform .18s ease, box-shadow .18s ease, filter .18s ease;
        }
        .template-action:hover {
          transform:translateY(-1px);
          filter:saturate(1.05) brightness(1.02);
          box-shadow:0 18px 32px rgba(255,100,22,.32), inset 0 1px 0 rgba(255,255,255,.3);
        }
        .template-actions {
          display:grid;
          grid-template-columns:.82fr 1fr;
          gap:10px;
          align-items:center;
        }
        .template-preview {
          height:44px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:7px;
          border-radius:4px;
          color:#111827;
          background:
            linear-gradient(180deg, #fff, #f8fafc);
          border:1px solid rgba(15,23,42,.14);
          font-size:.88rem;
          font-weight:950;
          box-shadow:0 8px 18px rgba(15,23,42,.05), inset 0 1px 0 #fff;
          transition:transform .18s ease, border-color .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .template-preview:hover {
          transform:translateY(-1px);
          border-color:rgba(255,100,22,.28);
          background:#fff;
          box-shadow:0 13px 26px rgba(15,23,42,.09), inset 0 1px 0 #fff;
        }
        @media(max-width:560px){
          .template-card-pro {
            width:100%;
            max-width:100%;
            height:460px;
            padding:10px;
            border-radius:0;
          }
          .template-shot {
            flex:0 0 60%;
            border-radius:0;
          }
          .template-price {
            top:10px;
            right:10px;
            min-height:32px;
            padding:0 9px;
            gap:5px;
            font-size:.72rem;
            border-radius:6px;
          }
          .template-price-original {
            font-size:.6rem;
          }
          .template-price svg {
            width:12px;
            height:12px;
          }
          .template-body {
            padding:13px 8px 10px;
          }
          .template-meta {
            gap:8px;
          }
          .template-type {
            min-height:24px;
            padding:0 8px;
            gap:5px;
            font-size:.58rem;
            max-width:42%;
            overflow:hidden;
            white-space:nowrap;
          }
          .template-connector {
            width:18px;
          }
          .template-title {
            font-size:.98rem;
          }
          .template-desc {
            font-size:.8rem;
            line-height:1.35;
          }
          .template-includes {
            gap:8px;
            font-size:.68rem;
            overflow:hidden;
          }
          .template-actions { grid-template-columns:1fr 1fr; }
          .template-action,
          .template-preview {
            width:100%;
            height:42px;
            font-size:.82rem;
          }
        }
      `}</style>

      <div className="template-shot">
        <img src={template.image} alt={`${template.name} - ${template.style} website template`} className="template-shot-img" loading="lazy" />
        <span className="template-price">
          <Icon name="tag" className="h-3.5 w-3.5" />
          {template.originalPrice && <span className="template-price-original">{template.originalPrice}</span>}
          <span>{template.price}</span>
        </span>
      </div>

      <div className="template-body">
        <div className="template-meta">
          <span className="template-type">
            <Icon name={template.icon || "sparkles"} className="h-3.5 w-3.5" />
            {subcategoryName || categoryName}
          </span>
          <span className="template-connector" />
          <h3 className="template-title">{template.name}</h3>
        </div>

        <p className="template-desc">{template.tagline}</p>

        <div className="template-includes">
          <span><Icon name="sparkles" className="h-3.5 w-3.5" />Colors</span>
          <span><Icon name="phone" className="h-3.5 w-3.5" />WhatsApp</span>
          <span><Icon name="clock" className="h-3.5 w-3.5" />48h</span>
        </div>

        <div className="template-bottom">
          <div className="template-actions">
            <Link href={`/template-preview/${template.id}`} className="template-preview focus-ring">
              <Icon name="eye" className="h-4 w-4" />
              View
            </Link>
            <Link href={`/launch?template=${template.id}`} className="template-action focus-ring">
              Buy Now
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
