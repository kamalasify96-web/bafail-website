"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const bars = [30, 48, 40, 62, 55, 74, 68];
const sparkPoints = "0,28 14,22 28,25 42,14 56,18 70,8 84,12 98,4";

export default function OpsDashboardCard() {
  const t = useTranslations("dashboard");

  return (
    <div className="navy-pattern navy-pattern--subtle relative bg-navy rounded-2xl p-7 text-cream w-full max-w-md mx-auto shadow-xl overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-display font-bold text-lg leading-none">1972</div>
          <div className="text-[10px] tracking-[0.1em] uppercase text-cream/50 mt-1.5">
            {t("founded")}
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-gold/15 rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] tracking-[0.1em] uppercase text-gold">
            {t("live")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { v: "8", l: t("warehouses") },
          { v: "120", l: t("fleet") },
          { v: "8", l: t("cities") },
        ].map((s) => (
          <div key={s.l} className="bg-white/5 rounded-lg p-3">
            <div className="font-display font-bold text-xl text-gold">{s.v}</div>
            <div className="text-[9px] tracking-[0.08em] uppercase text-cream/50 mt-1">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-lg p-4 mb-3">
        <div className="text-[9px] tracking-[0.1em] uppercase text-cream/50 mb-3">
          {t("channelGrowth")}
        </div>
        <div className="flex items-end gap-1.5 h-14">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-sm bg-gradient-to-t from-gold/40 to-gold"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
          <svg width="44" height="44" viewBox="0 0 44 44" className="shrink-0 -rotate-90">
            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(244,242,236,0.1)" strokeWidth="4" />
            <motion.circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#C9A86A"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 18}
              initial={{ strokeDashoffset: 2 * Math.PI * 18 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 18 * (1 - 0.82) }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div>
            <div className="font-display font-bold text-sm">82%</div>
            <div className="text-[8px] tracking-[0.08em] uppercase text-cream/50 leading-tight">
              {t("routeUtilization")}
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-[8px] tracking-[0.08em] uppercase text-cream/50 mb-2">
            {t("orderVelocity")}
          </div>
          <svg width="100%" height="32" viewBox="0 0 98 32" preserveAspectRatio="none">
            <motion.polyline
              points={sparkPoints}
              fill="none"
              stroke="#C9A86A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
