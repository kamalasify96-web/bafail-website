import type { Metadata, Viewport } from "next";
import { Unbounded, Inter, Changa, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import TickerBar from "@/components/layout/TickerBar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { withBasePath } from "@/lib/basePath";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd, SITE_URL, OG_IMAGE, type Locale } from "@/lib/seo";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const changa = Changa({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-changa",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const locales = ["en", "ar"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1A2F",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bafail Group | FMCG Distributor in Saudi Arabia since 1972",
  description:
    "Bafail Group distributes leading confectionery, biscuits, wafers, sweets, snacks, rice and beverages to retailers and wholesalers across Saudi Arabia.",
  openGraph: {
    type: "website",
    siteName: "Bafail Group",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      translate="no"
      className="notranslate"
      suppressHydrationWarning
      style={{ "--mashrabiya-url": `url('${withBasePath("/mashrabiya-pattern.jpg")}')` } as React.CSSProperties}
    >
      <body
        translate="no"
        className={`notranslate ${unbounded.variable} ${inter.variable} ${changa.variable} ${ibmPlexArabic.variable} ${
          isRtl ? "font-body-ar" : "font-body"
        } antialiased`}
      >
        <JsonLd data={organizationJsonLd(locale as Locale)} />
        <NextIntlClientProvider messages={messages}>
          <LoadingScreen locale={locale} />
          <Navbar locale={locale} />
          <TickerBar />
          <main>{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
