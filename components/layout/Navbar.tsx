"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/nav";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLocale = locale === "en" ? "ar" : "en";
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
    <header className="navy-pattern navy-pattern--subtle sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href={`/${locale}`} className="shrink-0 flex items-center gap-3">
          <div id="header-logo-target" className="relative h-8 w-[54px]">
            <Image
              src={locale === "ar" ? "/logo-badge-arabic-v2.png" : "/logo-badge-outline-reversed.png"}
              alt={locale === "ar" ? "مجموعة بافيل" : "Bafail Group"}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            dir={locale === "ar" ? "rtl" : "ltr"}
            className={`font-display ${locale === "en" ? "font-display-latin" : ""} font-bold text-sm tracking-[0.1em] text-cream hidden sm:inline`}
          >
            {locale === "ar" ? "مجموعة بافيل" : "BAFAIL GROUP"}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={`/${otherLocale}${pathWithoutLocale}`}
            className={`font-display ${otherLocale === "en" ? "font-display-latin" : ""} text-gold hover:text-cream transition-colors ${
              otherLocale === "ar"
                ? "text-sm font-semibold"
                : "text-[11px] tracking-[0.15em] uppercase"
            }`}
          >
            {otherLocale === "ar" ? "العربية" : "EN"}
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-cream group"
            aria-label="Open menu"
          >
            <span className="font-display text-[11px] tracking-[0.2em] uppercase hidden sm:inline group-hover:text-gold transition-colors">
              {t("menu")}
            </span>
            <span className="flex flex-col gap-[5px] w-6">
              <span className="h-px w-full bg-current group-hover:bg-gold transition-colors" />
              <span className="h-px w-4 self-end bg-current group-hover:bg-gold group-hover:w-full transition-all" />
            </span>
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="navy-pattern navy-pattern--feature fixed inset-0 z-[60] bg-navy overflow-y-auto"
          >
            <div className="sticky top-0 bg-navy z-10 max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between border-b border-white/10">
              <Link href={`/${locale}`} className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <Image
                  src={locale === "ar" ? "/logo-badge-arabic-v2.png" : "/logo-badge-outline-reversed.png"}
                  alt={locale === "ar" ? "مجموعة بافيل" : "Bafail Group"}
                  width={56}
                  height={33}
                  className="h-8 w-auto"
                />
                <span
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  className={`font-display ${locale === "en" ? "font-display-latin" : ""} font-bold text-sm tracking-[0.1em] text-cream hidden sm:inline`}
                >
                  {locale === "ar" ? "مجموعة بافيل" : "BAFAIL GROUP"}
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-cream hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="max-w-4xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 gap-x-12 gap-y-2">
              {navItems.slice(1).map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display font-semibold text-2xl md:text-3xl text-cream hover:text-gold transition-colors group"
                  >
                    {t(item.key)}
                    <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-lg rtl:rotate-180 inline-block">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="max-w-4xl mx-auto px-6 lg:px-10 text-cream/40 text-[11px] tracking-[0.15em] uppercase">
              Jeddah, Saudi Arabia · info@osbafail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
