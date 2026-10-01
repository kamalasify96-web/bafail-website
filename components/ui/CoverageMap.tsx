"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cityKeys = [
  "cityJeddah",
  "cityMakkah",
  "cityRiyadh",
  "cityDammam",
  "cityQasim",
  "cityJazan",
  "cityKhamisMushait",
  "cityMadinah",
];

export default function CoverageMap() {
  const t = useTranslations("capabilities");

  return (
    <div className="navy-pattern navy-pattern--subtle bg-navy rounded-2xl p-8 text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(244,242,236,0.15) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative">
        <div className="text-[10px] tracking-[0.15em] uppercase text-cream/50 mb-8">
          {t("coverageTitle")}
        </div>

        <div className="flex flex-wrap gap-2.5 py-4">
          {cityKeys.map((key, i) => (
            <motion.span
              key={key}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="font-display text-xs text-cream bg-cream/8 border border-cream/15 rounded-full px-4 py-2"
            >
              {t(key)}
            </motion.span>
          ))}
        </div>

        <div className="text-center text-[11px] text-cream/50 mt-4">
          {t("coverageBody")}
        </div>
      </div>
    </div>
  );
}
