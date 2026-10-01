import Link from "next/link";
import Image from "@/components/ui/Img";
import { useTranslations } from "next-intl";
import { navItems } from "@/lib/nav";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const tc = useTranslations("contact");

  return (
    <footer className="navy-pattern relative bg-navy text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          <div>
            <Image
              src={locale === "ar" ? "/logo-badge-arabic-v2.png" : "/logo-badge-outline-reversed.png"}
              alt={locale === "ar" ? "مجموعة بافيل" : "Bafail Group"}
              width={120}
              height={71}
              className="h-14 w-auto mb-6"
            />
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              {tf("tagline")}
            </p>
          </div>

          <div>
            <div className="font-display text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
              {tf("quickLinks")}
            </div>
            <ul className="space-y-3">
              {navItems.slice(1).map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
              {tf("getInTouch")}
            </div>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>{tc("locationValue")}</li>
              <li>info@osbafail.com</li>
              <li className="text-start">
                <span dir="ltr" className="inline-block">+966 50 663 7554</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-center gap-3" dir="ltr">
          <span className="text-cream/35 text-xs tracking-wide">{tf("poweredBy")}</span>
          <a
            href="https://www.wavzstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-90 transition-opacity duration-200"
            aria-label="Wavz Studio"
          >
            <Image
              src="/wavzstudio-logo.png"
              alt="Wavz Studio"
              width={90}
              height={12}
              className="h-3 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
