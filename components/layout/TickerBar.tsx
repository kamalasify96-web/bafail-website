"use client";

import { useTranslations } from "next-intl";

export default function TickerBar() {
  const t = useTranslations("ticker");
  const items = [t("i1"), t("i2"), t("i3"), t("i4"), t("i5")];
  return (
    <div dir="ltr" className="bg-gold/10 border-b border-gold/20 overflow-hidden">
      <div className="flex w-max whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? "true" : undefined}>
            {[0, 1, 2].map((repeat) => (
              <div key={repeat} className="flex shrink-0">
                {items.map((item, i) => (
                  <span
                    key={i}
                    dir="auto"
                    className="flex shrink-0 items-center font-display text-[10px] tracking-[0.2em] uppercase text-gold-dark px-6 py-2"
                  >
                    <span className="w-1 h-1 shrink-0 rounded-full bg-gold-dark inline-block me-2" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
