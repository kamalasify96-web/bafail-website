import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  const t = useTranslations("about");

  const facts = [
    { label: t("factLegalName"), value: t("factLegalNameValue") },
    { label: t("factNumber"), value: "7001676415" },
    { label: t("factFounded"), value: "12/08/1972" },
    { label: t("factEntity"), value: t("factEntityValue") },
    { label: t("factHq"), value: "P.O. Box 530, Makkah" },
    { label: t("factOperations"), value: "Jeddah" },
  ];

  const values = [
    { title: t("value1Title"), body: t("value1Body") },
    { title: t("value2Title"), body: t("value2Body") },
    { title: t("value3Title"), body: t("value3Body") },
    { title: t("value4Title"), body: t("value4Body") },
  ];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />

      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-navy/75 leading-relaxed mb-5">{t("storyP1")}</p>
          <p className="text-navy/75 leading-relaxed">{t("storyP2")}</p>

          <div className="flex flex-wrap gap-x-10 gap-y-6 mt-14 pt-10 border-t border-navy/10">
            {facts.map((f) => (
              <div key={f.label}>
                <div className="text-[11px] tracking-[0.15em] uppercase text-gold-dark font-semibold mb-1.5">
                  {f.label}
                </div>
                <div className="font-display font-semibold text-navy text-sm">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="font-display text-[11px] tracking-[0.3em] uppercase text-gold-dark mb-5">
              {t("missionEyebrow")}
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy max-w-2xl mx-auto border-l-4 border-gold pl-6 text-left rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6 rtl:text-right mx-auto">
              {t("missionTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-7 border-l-3 border-gold rtl:border-l-0 rtl:border-r-[3px]"
              >
                <div className="font-display font-semibold text-navy mb-2">
                  {v.title}
                </div>
                <div className="text-sm text-navy/60 leading-relaxed">{v.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="font-display text-[11px] tracking-[0.3em] uppercase text-gold-dark mb-5">
              {t("leadershipEyebrow")}
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy">
              {t("leadershipTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            <div>
              <div className="bg-sand rounded-xl aspect-square mb-4" />
              <div className="font-display font-semibold text-navy text-center">
                {t("leaderCeoName")}
              </div>
              <div className="text-xs text-navy/50 text-center mt-1">
                {t("leaderCeoTitle")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
