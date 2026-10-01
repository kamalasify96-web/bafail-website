import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";

export default function NewsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("news");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />
      <section className="bg-cream py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-navy/70 leading-relaxed mb-6">{t("body")}</p>
          <div className="bg-white/50 border border-dashed border-gold/50 rounded-xl p-10">
            <p className="text-navy/50 text-sm">{t("comingSoon")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
