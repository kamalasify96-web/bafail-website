import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import OpsDashboardCard from "@/components/ui/OpsDashboardCard";
import CoverageMap from "@/components/ui/CoverageMap";
import CertBadges from "@/components/ui/CertBadges";

export default function CapabilitiesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("capabilities");

  const blocks = [
    { title: t("warehousingTitle"), body: t("warehousingBody"), photo: "/capabilities/dry-warehousing.png" },
    { title: t("storageTitle"), body: t("storageBody"), photo: "/capabilities/cold-storage.png" },
    { title: t("fleetTitle"), body: t("fleetBody"), photo: "/capabilities/dry-transport.webp" },
    { title: t("coldTransportTitle"), body: t("coldTransportBody"), photo: "/capabilities/cold-transport.png" },
  ];

  const stats = [
    { value: 55, suffix: "", label: t("statYears") },
    { value: 138, suffix: "", prefix: "", label: t("statSkus") },
    { value: 7, suffix: "", label: t("statPrincipalBrands") },
    { value: 8, suffix: "", label: t("statWarehouses") },
    { value: 120, suffix: "", label: t("statFleetVehicles") },
    { value: 8, suffix: "", label: t("statCitiesNationwide") },
  ];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />

      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-navy/70 leading-relaxed text-lg">{t("intro")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <OpsDashboardCard />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-5 mb-14">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="relative rounded-xl overflow-hidden h-64 group">
                <Image
                  src={b.photo}
                  alt={b.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,26,47,0) 35%, rgba(10,26,47,.88) 100%)",
                  }}
                />
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <div className="font-display font-semibold text-cream text-base mb-1">
                    {b.title}
                  </div>
                  <div className="text-[13px] leading-relaxed text-cream/80 font-light">
                    {b.body}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <Reveal>
            <CoverageMap />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center">
              <CertBadges />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="navy-pattern navy-pattern--feature relative bg-navy py-20 text-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-white/5 rounded-xl p-7">
                  <div className="font-display font-extrabold text-4xl text-gold">
                    <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-cream/60 mt-3">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
