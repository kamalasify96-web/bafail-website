import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import BrandTag from "@/components/ui/BrandTag";

const brands = [
  { slug: "piccadeli", name: "Piccadeli", logo: "/brands/piccadeli.png", categories: ["confectionery", "wafers", "sweets", "snacks"], skus: 56, type: "principal" as const },
  { slug: "swich", name: "Swich", logo: "/brands/swich.png", categories: ["biscuits"], skus: 18, type: "principal" as const },
  { slug: "saray", name: "Saray", logo: "/brands/saray.png", categories: ["biscuits", "confectionery"], skus: 14, type: "principal" as const },
  { slug: "tunnocks", name: "Tunnock's", logo: "/brands/tunnocks.png", categories: ["wafers", "biscuits", "confectionery"], skus: 9, type: "principal" as const },
  { slug: "burtons", name: "Burton's", logo: "/brands/burtons.png", categories: ["biscuits"], skus: 4, type: "principal" as const },
  { slug: "hazerbaba", name: "Hazer Baba", logo: "/brands/hazerbaba.png", categories: ["sweets"], skus: 23, type: "principal" as const },
  { slug: "raja", name: "Raja", logo: "/brands/raja.png", categories: ["snacks"], skus: 14, type: "principal" as const },
  { slug: "towt", name: "TOWT", logo: "/brands/towt-transparent.png", categories: ["beverages"], skus: 1, type: "private" as const },
];

export default function BrandsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("brands");
  const tc = useTranslations("categories");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />

      <section className="bg-cream py-20">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center mb-14">
            <p className="text-navy/70 leading-relaxed">{t("intro")}</p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.06}>
              <Link
                href={b.type === "private" ? `/${locale}/private-label` : `/${locale}/brands/${b.slug}`}
                className="bg-white rounded-xl p-8 text-center border border-navy/5 hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col items-center cursor-pointer"
              >
                <div className="mb-4">
                  <BrandTag type={b.type} />
                </div>
                <div className="h-[126px] flex items-center justify-center mb-3">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={360}
                    height={126}
                    className="max-h-[126px] w-auto object-contain rounded"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {b.categories.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] tracking-wide uppercase bg-sand text-navy/60 rounded-full px-3 py-1"
                    >
                      {tc(c)}
                    </span>
                  ))}
                </div>
                {b.skus != null && (
                  <div className="text-[11px] text-navy/40 mt-auto pt-2">{b.skus} SKUs</div>
                )}
              </Link>
            </Reveal>
          ))}

          <Reveal delay={brands.length * 0.06}>
            <div className="bg-white/40 border border-dashed border-gold/50 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full">
              <div className="font-display font-semibold text-gold-dark">
                {t("moreTitle")}
              </div>
              <div className="text-xs text-navy/50 mt-1">{t("moreBody")}</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
