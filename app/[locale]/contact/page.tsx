import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} />

      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-gold-dark font-semibold mb-2">
              {t("email")}
            </div>
            <div className="font-display font-semibold text-navy text-sm">
              info@osbafail.com
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-gold-dark font-semibold mb-2">
              {t("whatsapp")}
            </div>
            <div className="font-display font-semibold text-navy text-sm" dir="ltr">
              +966 50 663 7554
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-gold-dark font-semibold mb-2">
              {t("location")}
            </div>
            <div className="font-display font-semibold text-navy text-sm">
              {t("locationValue")}
            </div>
          </div>
        </div>

        <form className="max-w-xl mx-auto px-6 lg:px-10 space-y-4">
          <div className="font-display font-semibold text-navy text-lg mb-2 text-center">
            {t("formTitle")}
          </div>
          <input
            type="text"
            placeholder={t("formName")}
            className="w-full bg-white border border-navy/10 rounded-lg px-5 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold"
          />
          <input
            type="email"
            placeholder={t("formEmail")}
            className="w-full bg-white border border-navy/10 rounded-lg px-5 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold"
          />
          <textarea
            placeholder={t("formMessage")}
            rows={5}
            className="w-full bg-white border border-navy/10 rounded-lg px-5 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="w-full bg-navy text-cream font-display text-xs tracking-[0.15em] uppercase px-7 py-4 rounded-full hover:bg-navy/90 transition-colors"
          >
            {t("formSubmit")}
          </button>
        </form>
      </section>
    </>
  );
}
