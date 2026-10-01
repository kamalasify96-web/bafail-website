import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export default function PrivateLabelPage() {
  const t = useTranslations("privateLabel");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />
      <section className="bg-cream py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center mb-16">
          <span className="inline-block font-display text-[11px] tracking-[0.2em] uppercase bg-gold/10 text-gold-dark rounded-full px-4 py-1.5 mb-6">
            {t("badge")}
          </span>
          <p className="text-navy/70 leading-relaxed">{t("body")}</p>
        </div>

        <Reveal>
          <div className="max-w-sm mx-auto bg-white rounded-2xl border border-navy/5 shadow-lg overflow-hidden">
            <div className="bg-white px-8 pb-6 pt-7 flex h-72 flex-col items-center justify-center gap-3">
              <Image
                src="/brands/towt-transparent.png"
                alt="TOWT"
                width={180}
                height={110}
                className="h-16 w-auto max-w-[180px] object-contain"
              />
              <Image
                src="/private-label/towt-crystal.png"
                alt={t("towtName")}
                width={220}
                height={280}
                className="min-h-0 flex-1 w-auto object-contain"
              />
            </div>
            <div className="p-6 text-center border-t border-navy/5">
              <div className="font-display font-bold text-xl text-navy mb-1">
                {t("towtName")}
              </div>
              <div className="text-xs text-gold-dark uppercase tracking-wide mb-3">
                {t("towtSize")}
              </div>
              <p className="text-sm text-navy/60 leading-relaxed">{t("towtDesc")}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
