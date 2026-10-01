"use client";

import { useTranslations } from "next-intl";

export default function BrandTag({ type }: { type: "principal" | "private" }) {
  const t = useTranslations("brandTag");
  return (
    <span
      className={`inline-block text-[9px] tracking-[0.12em] uppercase font-display font-semibold rounded-full px-3 py-1 ${
        type === "principal"
          ? "bg-gold/15 text-gold-dark"
          : "bg-navy/10 text-navy"
      }`}
    >
      {type === "principal" ? t("principal") : t("private")}
    </span>
  );
}
