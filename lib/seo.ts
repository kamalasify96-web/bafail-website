import type { Metadata } from "next";
import { brandMeta, type BrandSlug, type CategorySlug } from "@/lib/products";

export const SITE_URL = "https://osbafail.com";
export const SITE_NAME = { en: "Bafail Group", ar: "مجموعة بافيل" } as const;
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const CONTACT = { email: "info@osbafail.com", phone: "+966506637554" };

export type Locale = "en" | "ar";
type Copy = { title: string; description: string };

export const pagePaths = [
  "",
  "about",
  "brands",
  "capabilities",
  "categories",
  "contact",
  "news",
  "partner",
  "private-label",
] as const;
export type PagePath = (typeof pagePaths)[number];

const pages: Record<PagePath, Record<Locale, Copy>> = {
  "": {
    en: {
      title: "Bafail Group | FMCG Distributor in Saudi Arabia since 1972",
      description:
        "Bafail Group distributes leading confectionery, biscuits, wafers, sweets, snacks, rice and beverages to retailers and wholesalers across Saudi Arabia.",
    },
    ar: {
      title: "مجموعة بافيل | موزّع سلع استهلاكية في السعودية منذ 1972",
      description:
        "تورّد مجموعة بافيل وتوزّع أشهر علامات الحلويات والبسكويت والويفر والسكاكر والوجبات الخفيفة والأرز والمشروبات لتجار التجزئة والجملة في أنحاء المملكة.",
    },
  },
  about: {
    en: {
      title: "About Bafail Group | Five Decades Distributing in KSA",
      description:
        "Since 1972, Bafail Group has connected global food brands with Saudi shelves, importing, warehousing and delivering across the Kingdom with the same discipline.",
    },
    ar: {
      title: "من نحن | مجموعة بافيل: خمسة عقود من التوزيع في المملكة",
      description:
        "منذ عام 1972 تربط مجموعة بافيل أبرز العلامات الغذائية العالمية برفوف المملكة: استيراد وتخزين وتوصيل بانضباط واحد.",
    },
  },
  brands: {
    en: {
      title: "Brands We Distribute in Saudi Arabia | Bafail Group",
      description:
        "Piccadeli, Tunnock's, Saray, Swich, Malka, Hazer Baba, Raja, Burton's and TOWT: the brands Bafail Group imports and distributes across Saudi Arabia.",
    },
    ar: {
      title: "العلامات التي نوزّعها في السعودية | مجموعة بافيل",
      description:
        "Piccadeli وTunnock's وSaray وSwich وMalka وHazer Baba وRaja وBurton's وTOWT: العلامات التي تستوردها وتوزّعها مجموعة بافيل في المملكة.",
    },
  },
  capabilities: {
    en: {
      title: "Warehousing & Distribution Capabilities | Bafail Group",
      description:
        "Dry and cold storage, temperature-controlled transport and nationwide delivery: how Bafail Group moves FMCG products across Saudi Arabia.",
    },
    ar: {
      title: "إمكانيات التخزين والتوزيع | مجموعة بافيل",
      description:
        "تخزين جاف ومبرّد ونقل بدرجات حرارة محكومة وتوصيل في جميع أنحاء المملكة: كيف تنقل مجموعة بافيل منتجات السلع الاستهلاكية.",
    },
  },
  categories: {
    en: {
      title: "Product Categories | Chocolate, Biscuits, Rice & More",
      description:
        "Browse every category Bafail Group distributes in Saudi Arabia: chocolate and bars, biscuits, wafers, sweets, snacks, beverages and rice.",
    },
    ar: {
      title: "فئات المنتجات | الشوكولاتة والبسكويت والأرز وأكثر",
      description:
        "تصفّح كل فئة توزّعها مجموعة بافيل في السعودية: الشوكولاتة والألواح، البسكويت، الويفر، السكاكر، الوجبات الخفيفة، المشروبات والأرز.",
    },
  },
  contact: {
    en: {
      title: "Contact Bafail Group | Jeddah, Saudi Arabia",
      description:
        "Contact Bafail Group in Jeddah for retail supply, distribution partnerships and general enquiries. Email info@osbafail.com or WhatsApp +966 50 663 7554.",
    },
    ar: {
      title: "تواصل مع مجموعة بافيل | جدة، المملكة العربية السعودية",
      description:
        "تواصل مع مجموعة بافيل في جدة بخصوص التوريد للتجزئة وشراكات التوزيع والاستفسارات. البريد: info@osbafail.com، واتساب: 966506637554+.",
    },
  },
  news: {
    en: {
      title: "News & Updates | Bafail Group",
      description:
        "Trade shows, new principals and company news from Bafail Group, the FMCG distribution partner serving Saudi Arabia since 1972.",
    },
    ar: {
      title: "الأخبار والمستجدات | مجموعة بافيل",
      description:
        "المعارض التجارية والموردون الجدد وأخبار مجموعة بافيل، شريك توزيع السلع الاستهلاكية في السعودية منذ 1972.",
    },
  },
  partner: {
    en: {
      title: "Become a Partner | Retail Customers & Principals",
      description:
        "Retailers and wholesalers: stock our portfolio. Brands: enter the Saudi market with a trusted distributor. Start the conversation with Bafail Group.",
    },
    ar: {
      title: "كن شريكنا | عملاء التجزئة والموردون",
      description:
        "تجار التجزئة والجملة: اعرضوا محفظتنا. العلامات التجارية: ادخلوا السوق السعودي عبر موزّع موثوق. ابدأ الحوار مع مجموعة بافيل.",
    },
  },
  "private-label": {
    en: {
      title: "Private Label Brands | TOWT Crystal | Bafail Group",
      description:
        "Discover Bafail Group's own private-label products, including TOWT Crystal, a highly concentrated fruit-flavoured cordial. Non-alcoholic.",
    },
    ar: {
      title: "العلامات الخاصة | توت كريستال | مجموعة بافيل",
      description:
        "تعرّف على المنتجات التي تحمل علامة مجموعة بافيل الخاصة، ومنها توت كريستال: شراب مركّز بنكهة الفاكهة وخالٍ من الكحول.",
    },
  },
};

const categoryNames: Record<CategorySlug, Record<Locale, string>> = {
  confectionery: { en: "Chocolate & Bars", ar: "الشوكولاتة والألواح" },
  biscuits: { en: "Biscuits", ar: "البسكويت" },
  wafers: { en: "Wafers", ar: "الويفر" },
  sweets: { en: "Sweets & Candy", ar: "السكاكر والحلوى" },
  snacks: { en: "Snacks", ar: "الوجبات الخفيفة" },
  beverages: { en: "Beverages", ar: "المشروبات" },
  rice: { en: "Rice", ar: "الأرز" },
};

const categoryDescriptions: Record<CategorySlug, Record<Locale, string>> = {
  confectionery: {
    en: "Chocolate bars and confectionery from Piccadeli and Tunnock's, distributed to retailers and wholesalers across Saudi Arabia by Bafail Group.",
    ar: "ألواح الشوكولاتة والحلويات من Piccadeli وTunnock's، توزّعها مجموعة بافيل على تجار التجزئة والجملة في السعودية.",
  },
  biscuits: {
    en: "Biscuits and cookies from Swich, Saray, Tunnock's and Burton's, supplied nationwide in Saudi Arabia by Bafail Group.",
    ar: "بسكويت وكوكيز من Swich وSaray وTunnock's وBurton's، تورّدها مجموعة بافيل في جميع أنحاء المملكة.",
  },
  wafers: {
    en: "Wafer biscuits and wafer bars from Tunnock's, Piccadeli and Saray, distributed across Saudi Arabia by Bafail Group.",
    ar: "ويفر وألواح ويفر من Tunnock's وPiccadeli وSaray، توزّعها مجموعة بافيل في أنحاء المملكة.",
  },
  sweets: {
    en: "Sweets, toffees and candy from Piccadeli, Saray and Hazer Baba, distributed to Saudi retailers by Bafail Group.",
    ar: "سكاكر وتوفي وحلوى من Piccadeli وSaray وHazer Baba، توزّعها مجموعة بافيل على تجار التجزئة في السعودية.",
  },
  snacks: {
    en: "Snacks and cakes from Raja, Saray and Piccadeli, supplied to retailers and wholesalers across the Kingdom by Bafail Group.",
    ar: "وجبات خفيفة وكيك من Raja وSaray وPiccadeli، تورّدها مجموعة بافيل لتجار التجزئة والجملة في المملكة.",
  },
  beverages: {
    en: "TOWT Crystal fruit-flavoured cordial, a highly concentrated non-alcoholic drink from Bafail Group's own private label.",
    ar: "توت كريستال: شراب مركّز بنكهة الفاكهة وخالٍ من الكحول من العلامة الخاصة لمجموعة بافيل.",
  },
  rice: {
    en: "Malka extra long basmati rice, pearl and sella, in 1kg to 10kg packs. Distributed across Saudi Arabia by Bafail Group.",
    ar: "أرز Malka بسمتي طويل جدًا، لؤلؤي وسيلا، بعبوات من 1 إلى 10 كجم. توزّعه مجموعة بافيل في أنحاء السعودية.",
  },
};

const brandSummary: Record<BrandSlug, Record<Locale, string>> = {
  piccadeli: {
    en: "chocolates, wafers, sweets and snacks",
    ar: "الشوكولاتة والويفر والسكاكر والوجبات الخفيفة",
  },
  swich: { en: "biscuits and cookies", ar: "البسكويت والكوكيز" },
  saray: { en: "biscuits, cakes, wafers and candy", ar: "البسكويت والكيك والويفر والحلوى" },
  tunnocks: { en: "caramel wafers, logs and teacakes", ar: "ويفر الكراميل واللوغز والتي كيك" },
  burtons: { en: "biscuits", ar: "البسكويت" },
  hazerbaba: { en: "traditional sweets and candy", ar: "الحلويات والسكاكر التقليدية" },
  raja: { en: "snacks", ar: "الوجبات الخفيفة" },
  malka: { en: "extra long basmati rice (pearl and sella)", ar: "الأرز البسمتي طويل الحبة (لؤلؤي وسيلا)" },
  towt: { en: "TOWT Crystal fruit-flavoured cordial", ar: "شراب توت كريستال بنكهة الفاكهة" },
};

export function pageCopy(path: PagePath, locale: Locale): Copy {
  return pages[path][locale];
}

export function brandCopy(slug: BrandSlug, locale: Locale): Copy {
  const name = brandMeta[slug].name;
  if (locale === "ar") {
    return {
      title: `${name} في السعودية | مجموعة بافيل`,
      description: `منتجات ${name}: ${brandSummary[slug].ar}. تستوردها وتوزّعها مجموعة بافيل على تجار التجزئة والجملة في أنحاء المملكة.`,
    };
  }
  return {
    title: `${name} Distributor in Saudi Arabia | Bafail Group`,
    description: `${name} ${brandSummary[slug].en}, imported and distributed to retailers and wholesalers across Saudi Arabia by Bafail Group. Browse the range.`,
  };
}

export function categoryCopy(slug: CategorySlug, locale: Locale): Copy {
  const name = categoryNames[slug][locale];
  return {
    title:
      locale === "ar"
        ? `${name} | موزّع في السعودية | مجموعة بافيل`
        : `${name} Distributor in Saudi Arabia | Bafail Group`,
    description: categoryDescriptions[slug][locale],
  };
}

export function categoryName(slug: CategorySlug, locale: Locale) {
  return categoryNames[slug][locale];
}

/** Absolute URL for a locale + path, with trailing slash (matches the exported file layout). */
export function urlFor(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return `${SITE_URL}/${locale}/${clean ? clean + "/" : ""}`;
}

export function buildMetadata(locale: Locale, path: string, copy: Copy): Metadata {
  const url = urlFor(locale, path);
  return {
    metadataBase: new URL(SITE_URL),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        en: urlFor("en", path),
        ar: urlFor("ar", path),
        "x-default": urlFor("en", path),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME[locale],
      title: copy.title,
      description: copy.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export function breadcrumbJsonLd(locale: Locale, trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: SITE_NAME[locale], path: "" },
      ...trail,
    ].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: urlFor(locale, t.path),
    })),
  };
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Bafail Group",
        alternateName: "مجموعة بافيل",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-badge-transparent.png`,
        foundingDate: "1972",
        description: pages[""][locale].description,
        email: CONTACT.email,
        telephone: "+966 50 663 7554",
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jeddah",
          addressCountry: "SA",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME[locale],
        inLanguage: locale === "ar" ? "ar-SA" : "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
