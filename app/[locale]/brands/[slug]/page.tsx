import Image from "@/components/ui/Img";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProductSlider from "@/components/ui/ProductSlider";
import { brandMeta, products, type BrandSlug } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(brandMeta).map((slug) => ({ slug }));
}

export default function BrandDetailPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("brands");
  const tc = useTranslations("categories");
  const brand = brandMeta[slug as BrandSlug];

  if (!brand) notFound();

  const brandProducts = products[slug as BrandSlug];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={brand.name} />

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 mb-14 pb-10 border-b border-navy/10">
              <div className="h-[144px] flex items-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={450}
                  height={144}
                  className="max-h-[144px] w-auto object-contain rounded"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {brand.categories.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] tracking-wide uppercase bg-sand text-navy/60 rounded-full px-3 py-1"
                  >
                    {tc(c)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {brandProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {brandProducts.map((p, i) => (
                <Reveal key={p.name + p.weight} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl p-6 h-full flex flex-col border border-navy/5 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <ProductSlider images={p.images} alt={p.name} />
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
            <Reveal>
              <div className="bg-white/50 border border-dashed border-gold/50 rounded-xl p-10 text-center">
                <p className="text-navy/50 text-sm">{t("moreBody")}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
