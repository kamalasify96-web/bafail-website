import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";

const retailPartners = ["fruit", "danube", "ninja"];

export default function PartnerPage() {
  const t = useTranslations("partner");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />

      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <div id="customer" className="bg-white rounded-2xl p-10 scroll-mt-24">
            <div className="font-display font-semibold text-xl text-navy mb-3">
              {t("customerTitle")}
            </div>
            <p className="text-sm text-navy/60 leading-relaxed mb-8">
              {t("customerBody")}
            </p>
            <a
              href="mailto:info@osbafail.com?subject=Retail%20Partnership%20Enquiry"
              className="inline-block bg-navy text-cream font-display text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-navy/90 transition-colors"
            >
              {t("customerCta")}
            </a>
          </div>

          <div id="principal" className="navy-pattern navy-pattern--subtle relative bg-navy text-cream rounded-2xl p-10 scroll-mt-24 overflow-hidden">
            <div className="font-display font-semibold text-xl mb-3">
              {t("principalTitle")}
            </div>
            <p className="text-sm text-cream/60 leading-relaxed mb-8">
              {t("principalBody")}
            </p>
            <a
              href="mailto:info@osbafail.com?subject=Principal%20Partnership%20Enquiry"
              className="inline-block bg-gold text-navy font-display text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-cream transition-colors"
            >
              {t("principalCta")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center mb-10">
          <div className="font-display font-semibold text-xl text-navy mb-2">
            {t("retailPartnersTitle")}
          </div>
          <p className="text-sm text-navy/60 leading-relaxed">{t("retailPartnersSub")}</p>
        </div>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 flex flex-wrap justify-center gap-5">
          {retailPartners.map((p) => (
            <div
              key={p}
              className="bg-white rounded-xl h-24 w-40 flex items-center justify-center p-4 border border-navy/5"
            >
              <Image
                src={`/retail-partners/${p}.png`}
                alt={p}
                width={120}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
