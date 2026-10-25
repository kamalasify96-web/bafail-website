import type { MetadataRoute } from "next";
import { brandMeta } from "@/lib/products";
import { pagePaths, urlFor } from "@/lib/seo";

export const dynamic = "force-static";

const categorySlugs = ["confectionery", "biscuits", "wafers", "sweets", "snacks", "beverages", "rice"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pagePaths.map((p) => p),
    ...Object.keys(brandMeta).map((b) => `brands/${b}`),
    ...categorySlugs.map((c) => `categories/${c}`),
  ];
  const now = new Date();
  return paths.flatMap((path) =>
    (["en", "ar"] as const).map((locale) => ({
      url: urlFor(locale, path),
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.includes("/") ? 0.6 : 0.8,
      alternates: {
        languages: { en: urlFor("en", path), ar: urlFor("ar", path) },
      },
    }))
  );
}


