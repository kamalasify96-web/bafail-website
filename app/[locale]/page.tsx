import Link from "next/link";
import Image from "@/components/ui/Img";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import OpsDashboardCard from "@/components/ui/OpsDashboardCard";
import AnimatedHero from "@/components/ui/AnimatedHero";
import CategoryIcon from "@/components/ui/CategoryIcon";
import Marquee from "@/components/ui/Marquee";

const stats = [
  { key: "statYears", value: 55, suffix: "" },
  { key: "statSkus", value: 138, suffix: "", prefix: "" },
  { key: "statPrincipals", value: 7, suffix: "" },
  { key: "statWarehouses", value: 8, suffix: "" },
];

const categoryKeys = ["confectionery", "biscuits", "wafers", "sweets", "snacks", "beverages"];

const brandLogos = [
  { name: "Piccadeli", logo: "/brands/piccadeli.png" },
  { name: "Swich", logo: "/brands/swich.png" },
  { name: "Saray", logo: "/brands/saray.png" },
  { name: "Tunnock's", logo: "/brands/tunnocks.png" },
  { name: "Burton's", logo: "/brands/burtons.png" },
  { name: "Hazer Baba", logo: "/brands/hazerbaba.png" },
  { name: "Raja", logo: "/brands/raja.png" },
  { name: "TOWT", logo: "/brands/towt-transparent.png" },
];

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("home");
  const tc = useTranslations("categories");

  return (
    <>
      {/* HERO */}
      <AnimatedHero
        eyebrow={t("eyebrow")}
        title={t("heroTitle")}
        sub={t("heroSub")}
        partnerHref={`/${locale}/partner`}
        partnerCtaLabel={t("partnerCtaPrincipal")}
        downloadLabel={t("downloadProfile")}
        stats={stats.map((s) => ({ ...s, label: t(s.key) }))}
      />

      {/* CAPABILITIES SNAPSHOT */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <div className="font-display text-[11px] tracking-[0.3em] uppercase text-gold-dark mb-5">
                {t("capabilitiesEyebrow")}
              </div>
              <h2 className="font-display font-semibold text-2xl md:text-4xl text-navy mb-6">
                {t("capabilitiesTitle")}
              </h2>
              <p className="text-navy/60 mb-8 max-w-md leading-relaxed">
                {t("capabilitiesSub")}
              </p>
              <Link
                href={`/${locale}/capabilities`}
                className="inline-block font-display text-xs tracking-[0.15em] uppercase text-navy border-b-2 border-gold pb-1 hover:text-gold-dark transition-colors"
              >
                {t("capabilitiesCta")} <span className="inline-block rtl:rotate-180">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <OpsDashboardCard />
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-sand py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-14">
              <div className="font-display text-[11px] tracking-[0.3em] uppercase text-gold-dark mb-5">
                {t("categoriesEyebrow")}
              </div>
              <h2 className="font-display font-semibold text-2xl md:text-4xl text-navy">
                {t("categoriesTitle")}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {categoryKeys.map((key, i) => (
              <Reveal key={key} delay={i * 0.05}>
                <Link
                  href={`/${locale}/categories/${key}`}
                  className="bg-white rounded-2xl aspect-square flex flex-col items-center justify-center text-center p-4 gap-3 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <CategoryIcon category={key} className="w-8 h-8" />
                  <span className="font-display font-semibold text-sm text-navy">
                    {tc(key)}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="navy-pattern navy-pattern--feature relative bg-navy py-24 text-cream">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <div className="font-display text-[11px] tracking-[0.3em] uppercase text-gold mb-5">
              {t("brandsEyebrow")}
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl mb-10">
              {t("brandsTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mb-10">
              <Marquee>
                {brandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="group/logo h-[118px] w-[290px] shrink-0 rounded-lg border border-cream/35 bg-cream/85 px-10 py-5 flex items-center justify-center backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,.45)] transition-all hover:border-gold/60 hover:bg-cream/95"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={310}
                      height={124}
                      className="max-h-[78px] max-w-[210px] w-auto scale-[1.28] object-contain transition-transform duration-300 group-hover/logo:scale-[1.33]"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
            <Link
              href={`/${locale}/brands`}
              className="inline-block font-display text-xs tracking-[0.15em] uppercase text-gold border-b-2 border-gold pb-1 hover:text-cream transition-colors"
            >
              {t("brandsCta")} <span className="inline-block rtl:rotate-180">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-cream py-24">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <div className="font-display text-[11px] tracking-[0.3em] uppercase text-gold-dark mb-5">
              {t("partnerEyebrow")}
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl text-navy mb-4">
              {t("partnerTitle")}
            </h2>
            <p className="text-navy/60 mb-10 max-w-xl mx-auto">{t("partnerSub")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/partner#customer`}
                className="bg-navy text-cream font-display text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-navy/90 transition-colors"
              >
                {t("partnerCtaCustomer")}
              </Link>
              <Link
                href={`/${locale}/partner#principal`}
                className="border border-navy text-navy font-display text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-navy hover:text-cream transition-colors"
              >
                {t("partnerCtaPrincipal")}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
