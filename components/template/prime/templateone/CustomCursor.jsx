"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (event) => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.left = `${event.clientX - 5}px`;
      cursorRef.current.style.top = `${event.clientY - 5}px`;
      ringRef.current.style.left = `${event.clientX - 20}px`;
      ringRef.current.style.top = `${event.clientY - 20}px`;
    };
    const grow = () => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = "scale(1.8)";
      ringRef.current.style.opacity = "0.3";
    };
    const shrink = () => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = "scale(1)";
      ringRef.current.style.opacity = "0.5";
    };
    document.addEventListener("mousemove", move);
    const targets = document.querySelectorAll(".prime-template a,.prime-template button");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", grow);
      target.addEventListener("mouseleave", shrink);
    });
    return () => {
      document.removeEventListener("mousemove", move);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", grow);
        target.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return <><div className="cursor" ref={cursorRef} /><div className="cursor-ring" ref={ringRef} /></>;
}
