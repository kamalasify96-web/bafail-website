"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "@/components/ui/Img";

export type ShowcaseProduct = { brand: string; name: string; weight: string; image: string };
export type ShowcaseBrand = { slug: string; name: string; logo: string; products: ShowcaseProduct[] };

export default function CatalogueShowcase({
  brands,
  allLabel,
  allProducts,
  brandHref,
  viewBrandLabel,
  total,
}: {
  brands: ShowcaseBrand[];
  allLabel: string;
  allProducts: ShowcaseProduct[];
  brandHref: string;
  viewBrandLabel: string;
  total: number;
}) {
  const [active, setActive] = useState("all");
  const current = brands.find((b) => b.slug === active);
  const shown = current ? current.products : allProducts;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={active === "all"}
          onClick={() => setActive("all")}
          className={`h-14 px-6 rounded-full border font-display text-[11px] tracking-[0.15em] uppercase cursor-pointer transition-colors ${
            active === "all" ? "bg-navy text-cream border-navy" : "bg-white text-navy border-navy/10 hover:border-gold"
          }`}
        >
          {allLabel}
        </button>
        {brands.map((b) => (
          <button
            key={b.slug}
            type="button"
            role="tab"
            aria-selected={active === b.slug}
            aria-label={b.name}
            onClick={() => setActive(b.slug)}
            className={`h-14 w-32 rounded-full border bg-white flex items-center justify-center px-5 cursor-pointer transition-all ${
              active === b.slug ? "border-gold shadow-md ring-1 ring-gold" : "border-navy/10 hover:border-gold"
            }`}
          >
            <Image src={b.logo} alt={b.name} width={120} height={48} className="max-h-8 w-auto max-w-full object-contain" />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {shown.map((p) => (
          <div
            key={p.brand + p.name + p.weight}
            className="bg-white rounded-2xl p-5 flex flex-col border border-navy/5 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="relative h-40 mb-4">
              <Image src={p.image} alt={p.name} fill sizes="(min-width:768px) 22vw, 45vw" className="object-contain" />
            </div>
            <div className="text-[10px] tracking-wide uppercase text-gold-dark font-semibold text-center mb-1">{p.brand}</div>
            <div className="font-display font-semibold text-navy text-sm text-center">{p.name}</div>
            <div className="text-[11px] text-navy/50 text-center mt-1">{p.weight}</div>
          </div>
        ))}
      </div>

      {current && (
        <div className="text-center mt-8">
          <Link
            href={`${brandHref}/${current.slug}`}
            className="inline-block font-display text-xs tracking-[0.15em] uppercase text-navy border-b-2 border-gold pb-1 hover:text-gold-dark transition-colors"
          >
            {viewBrandLabel} {current.name} <span className="inline-block rtl:rotate-180">→</span>
          </Link>
        </div>
      )}
      <span className="sr-only">{total}</span>
    </div>
  );
}
