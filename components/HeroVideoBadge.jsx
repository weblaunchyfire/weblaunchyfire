"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const HELP_VIDEO_ID = "qvQzW3oQByQ";
const HELP_VIDEO_EMBED_URL = `https://www.youtube-nocookie.com/embed/${HELP_VIDEO_ID}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0&disablekb=1`;

export default function HeroVideoBadge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const modal = open ? (
    <div className="hero-video-modal" role="dialog" aria-modal="true" aria-label="Help video">
          <button
            type="button"
            className="hero-video-backdrop"
            aria-label="Close help video"
            onClick={() => setOpen(false)}
          />
          <div className="hero-video-panel">
            <div className="hero-video-head">
              <div>
                <p>Help video</p>
                <h2>How Web Launchy Fire works</h2>
              </div>
              <button
                type="button"
                className="hero-video-close focus-ring"
                aria-label="Close help video"
                onClick={() => setOpen(false)}
              >
                x
              </button>
            </div>
            <div className="hero-video-frame">
              <iframe
                src={HELP_VIDEO_EMBED_URL}
                title="Web Launchy Fire help video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
  ) : null;

  return (
    <>
      <div className="hero-video-stack">
        <button
          type="button"
          className="hero-video-trigger focus-ring"
          onClick={() => setOpen(true)}
          aria-label="Watch quick guide"
        >
          <span className="hero-video-play" aria-hidden="true" />
          <span className="hero-video-label">Watch quick guide</span>
        </button>
      </div>

      {modal && typeof document !== "undefined" ? createPortal(modal, document.body) : null}

      <style jsx global>{`
        .hero-video-stack {
          display:inline-flex;
          flex-direction:column;
          align-items:center;
          gap:9px;
        }
        .hero-video-trigger {
          display:inline-flex;
          align-items:center;
          gap:10px;
          min-height:46px;
          padding:0 22px 0 14px;
          border-radius:9999px;
          cursor:pointer;
          font:inherit;
          font-weight:700;
          letter-spacing:.01em;
          color:var(--text-1);
          background:linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.82));
          border:1px solid rgba(21,21,21,.09);
          box-shadow:0 14px 32px rgba(21,21,21,.08), inset 0 1px 0 rgba(255,255,255,.9);
          transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .hero-video-trigger:hover {
          transform:translateY(-1px);
          border-color:rgba(255,106,22,.2);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.92), 0 16px 36px rgba(21,21,21,.1);
        }
        .hero-video-play {
          width:20px;
          height:20px;
          border-radius:9999px;
          background:var(--accent);
          box-shadow:0 0 0 6px rgba(255,106,22,.14);
          position:relative;
          flex:0 0 auto;
        }
        .hero-video-play:after {
          content:"";
          position:absolute;
          left:8px;
          top:6px;
          border-left:7px solid #fff;
          border-top:4px solid transparent;
          border-bottom:4px solid transparent;
        }
        .hero-video-label {
          display:inline-block;
          font-size:1rem;
          font-weight:700;
          line-height:1;
          white-space:nowrap;
        }
        .hero-video-modal {
          position:fixed;
          inset:0;
          z-index:100;
          display:grid;
          place-items:center;
          padding:24px;
        }
        .hero-video-backdrop {
          position:absolute;
          inset:0;
          border:0;
          cursor:pointer;
          background:rgba(12,12,18,.58);
          backdrop-filter:blur(12px);
        }
        .hero-video-panel {
          position:relative;
          z-index:1;
          width:min(920px, 100%);
          border-radius:18px;
          overflow:hidden;
          background:#fff;
          border:1px solid rgba(255,255,255,.72);
          box-shadow:0 34px 100px rgba(0,0,0,.3);
        }
        .hero-video-head {
          min-height:72px;
          padding:16px 18px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          border-bottom:1px solid rgba(15,23,42,.08);
        }
        .hero-video-head p {
          margin:0 0 4px;
          color:var(--accent);
          font-size:.72rem;
          font-weight:850;
          letter-spacing:.08em;
          text-transform:uppercase;
        }
        .hero-video-head h2 {
          margin:0;
          color:var(--text-1);
          font-size:1.05rem;
          font-weight:850;
          letter-spacing:0;
        }
        .hero-video-close {
          width:38px;
          height:38px;
          display:grid;
          place-items:center;
          border-radius:9999px;
          border:1px solid rgba(15,23,42,.12);
          background:#fff;
          color:var(--text-1);
          cursor:pointer;
          font-size:1.1rem;
          font-weight:800;
          line-height:1;
        }
        .hero-video-frame {
          position:relative;
          aspect-ratio:16 / 9;
          background:#111;
        }
        .hero-video-frame iframe {
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          border:0;
        }
        @media(max-width:640px) {
          .hero-video-trigger {
            min-height:38px;
            gap:8px;
            padding:0 15px 0 11px;
          }
          .hero-video-play {
            width:18px;
            height:18px;
            box-shadow:0 0 0 5px rgba(255,106,22,.13);
          }
          .hero-video-play:after {
            left:7px;
            top:5px;
            border-left-width:6px;
            border-top-width:4px;
            border-bottom-width:4px;
          }
          .hero-video-label {
            font-size:.86rem;
          }
          .hero-video-modal {
            padding:16px;
          }
          .hero-video-head {
            min-height:66px;
            padding:14px;
          }
          .hero-video-head h2 {
            font-size:.95rem;
          }
        }
      `}</style>
    </>
  );
}
