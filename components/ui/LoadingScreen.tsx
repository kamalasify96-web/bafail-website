"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(true);
  const [docking, setDocking] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const bar = barFillRef.current;
    if (bar) {
      requestAnimationFrame(() => {
        bar.style.width = "100%";
      });
    }

    const toDocking = window.setTimeout(() => setDocking(true), 1550);
    return () => window.clearTimeout(toDocking);
  }, []);

  useEffect(() => {
    if (!docking) return;

    const logo = logoRef.current;
    const target = document.getElementById("header-logo-target");

    if (logo && target) {
      const from = logo.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      const scale = to.width / from.width;
      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      requestAnimationFrame(() => {
        logo.style.transition = "transform 0.55s cubic-bezier(0.65,0,0.35,1)";
        logo.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      });
    }

    const bg = bgRef.current;
    if (bg) {
      bg.style.transition = "opacity 0.4s ease-out";
      bg.style.transitionDelay = "0.2s";
      bg.style.opacity = "0";
    }

    const toDone = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 620);

    return () => window.clearTimeout(toDone);
  }, [docking]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-navy"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 10%, #132a4a 0%, #0A1A2F 75%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.065] mix-blend-screen"
          style={{ backgroundImage: "url('/mashrabiya-pattern.jpg')" }}
        />
      </div>

      <div ref={logoRef} className="relative h-[120px] w-[203px] z-10" style={{ transformOrigin: "center" }}>
        <Image
          src={locale === "ar" ? "/logo-badge-arabic-v2.png" : "/logo-badge-outline-reversed.png"}
          alt={locale === "ar" ? "مجموعة بافيل" : "Bafail Group"}
          fill
          className="object-contain"
          priority
        />
      </div>

      {!docking && (
        <div className="relative z-10 w-40 h-[3px] bg-cream/10 rounded-full overflow-hidden mt-8">
          <div
            ref={barFillRef}
            className="h-full bg-gold rounded-full"
            style={{ width: "0%", transition: "width 1.4s cubic-bezier(0.65,0,0.35,1)" }}
          />
        </div>
      )}
    </div>
  );
}
