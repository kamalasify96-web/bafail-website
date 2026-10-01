import Link from "next/link";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import CategoryIcon from "@/components/ui/CategoryIcon";

const categoryKeys = ["confectionery", "biscuits", "wafers", "sweets", "snacks", "beverages"];

export default function CategoriesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("categories");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />

      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center mb-14">
          <p className="text-navy/70 leading-relaxed">{t("categoryIntro")}</p>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categoryKeys.map((key) => (
            <Link
              key={key}
              href={`/${locale}/categories/${key}`}
              className="bg-white rounded-2xl aspect-square flex flex-col items-center justify-center text-center p-4 gap-3 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <CategoryIcon category={key} className="w-8 h-8" />
              <span className="font-display font-semibold text-sm text-navy">
                {t(key)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
