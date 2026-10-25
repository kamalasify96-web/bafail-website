import Link from "next/link";
import Image from "@/components/ui/Img";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import BrandTag from "@/components/ui/BrandTag";
import ProductSlider from "@/components/ui/ProductSlider";
import { brandMeta, getProductCategory, products, type BrandSlug, type CategorySlug } from "@/lib/products";
import { buildMetadata, pageCopy, brandCopy, categoryCopy, breadcrumbJsonLd, categoryName, type Locale } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

const categorySlugs: CategorySlug[] = ["confectionery", "biscuits", "wafers", "sweets", "snacks", "beverages", "rice"];

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
  if (!categorySlugs.includes(slug as CategorySlug)) return {};
  return buildMetadata(locale as Locale, `categories/${slug}`, categoryCopy(slug as CategorySlug, locale as Locale));
}

export default function CategoryDetailPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("categories");

  if (!categorySlugs.includes(slug as CategorySlug)) notFound();

  const brandSlugs = Object.keys(brandMeta) as BrandSlug[];
  const brandsInCategory = brandSlugs.filter((b) => brandMeta[b].categories.includes(slug as CategorySlug));

  const categoryProducts = brandSlugs.flatMap((b) =>
    products[b]
      .filter((p) => getProductCategory(b, p) === slug)
      .map((p) => ({ ...p, brandSlug: b, brandName: brandMeta[b].name }))
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: locale === "ar" ? "الفئات" : "Categories", path: "categories" },
          { name: categoryName(slug as CategorySlug, locale as Locale), path: `categories/${slug}` },
        ])}
      />
      <PageHero eyebrow={t("eyebrow")} title={t(slug)} />

      <section className="bg-cream py-20">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center mb-14">
            <p className="text-navy/70 leading-relaxed">{t("categoryIntro")}</p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {brandsInCategory.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <Link
                  href={b === "towt" ? `/${locale}/private-label` : `/${locale}/brands/${b}`}
                  className="bg-white rounded-xl p-6 flex items-center justify-between border border-navy/5 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Image
                    src={brandMeta[b].logo.replace(".png", "-tight.png")}
                    alt={brandMeta[b].name}
                    width={180}
                    height={64}
                    className="h-14 w-auto max-w-[200px] object-contain"
                  />
                  <BrandTag type={brandMeta[b].type ?? "principal"} />
                </Link>
              </Reveal>
            ))}
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categoryProducts.map((p, i) => (
                <Reveal key={p.brandSlug + p.name + p.weight} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl p-6 h-full flex flex-col border border-navy/5 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <ProductSlider images={p.images} alt={p.name} />
                    <div className="text-[10px] tracking-wide uppercase text-gold-dark font-semibold text-center mb-1">
                      {p.brandName}
                    </div>
                    <div className="font-display font-semibold text-navy text-sm text-center">
                      {p.name}
                    </div>
                    <div className="text-[11px] text-navy/50 text-center mt-1">
                      {p.weight}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.1}>
              <div className="bg-white/50 border border-dashed border-gold/50 rounded-xl p-10 text-center">
                <p className="text-navy/50 text-sm">{t("comingSoon")}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
