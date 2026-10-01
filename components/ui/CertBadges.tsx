"use client";

import { useTranslations } from "next-intl";

const certs = [
  { name: "SFDA", held: true },
  { name: "HACCP", held: false },
  { name: "ISO 22000", held: false },
  { name: "ISO 9001", held: false },
];

export default function CertBadges() {
  const t = useTranslations("capabilities");

  return (
    <div>
      <div className="text-[10px] tracking-[0.15em] uppercase text-navy/50 mb-4">
        {t("certTitle")}
      </div>
      <div className="flex flex-wrap gap-3">
        {certs.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 bg-white border border-navy/10 rounded-lg px-4 py-2.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.held ? "#A8864A" : "#94A3B8"} strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6" />
            </svg>
            <span className="font-display font-semibold text-xs text-navy">{c.name}</span>
            <span className={`text-[9px] uppercase tracking-wide ${c.held ? "text-gold-dark font-semibold" : "text-navy/40"}`}>
              {c.held ? t("certHeld") : t("certPending")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
