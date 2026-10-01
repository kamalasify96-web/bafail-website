"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { withBasePath } from "@/lib/basePath";

type Stat = { key: string; value: number; label: string; prefix?: string; suffix?: string };
const ease = [0.22, 1, 0.36, 1] as const;

export default function AnimatedHero({ eyebrow, title, sub, partnerHref, partnerCtaLabel, downloadLabel, stats }: {
  eyebrow: string; title: string; sub: string; partnerHref: string;
  partnerCtaLabel: string; downloadLabel: string; stats: Stat[];
}) {
  const words = title.split(" ");

  return (
    <section className="relative isolate overflow-hidden bg-navy text-cream">
      <div
        aria-hidden="true"
        className="hero-visual absolute inset-0"
        style={{ backgroundImage: `url('${withBasePath("/bafail-hero-logistics.png")}')` }}
      />
      <div
        aria-hidden="true"
        className="hero-visual-overlay absolute inset-0"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center opacity-[0.035] mix-blend-screen" style={{ backgroundImage: `url('${withBasePath("/mashrabiya-pattern.jpg")}')` }} />

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col px-6 pb-7 pt-12 sm:min-h-[650px] sm:pt-14 lg:min-h-[680px] lg:px-10 lg:pb-8 lg:pt-16">
        <div className="grid flex-1 items-center lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,.92fr)]">
          <div className="relative z-10 max-w-4xl lg:pe-8">
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, ease }} className="mb-5 flex items-center gap-4 font-display text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
              <span className="h-px w-10 bg-gold" />{eyebrow}
            </motion.div>

            <h1 className="max-w-3xl font-display text-[clamp(2.45rem,4.6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-cream">
              {words.map((word, index) => (
                <motion.span key={`${word}-${index}`} initial={{ opacity: 0, y: 42, rotateX: 18 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.8, delay: 0.08 + index * 0.065, ease }} className="me-[0.22em] inline-block origin-bottom last:me-0">
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45, ease }} className="mt-6 max-w-2xl border-s border-gold/60 ps-6 sm:ps-7">
              <p className="hero-body-copy max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">{sub}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href={partnerHref} className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 font-display text-[10px] uppercase tracking-[0.13em] text-navy transition-all hover:bg-cream hover:shadow-[0_12px_40px_rgba(201,168,106,.2)]">
                  {partnerCtaLabel}<span className="text-base transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
                </Link>
                <a href={withBasePath("/Bafail-Group-Company-Profile.pdf")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-6 py-3.5 font-display text-[10px] uppercase tracking-[0.13em] text-cream transition-all hover:border-gold/70 hover:text-gold">
                  {downloadLabel}<span aria-hidden="true" className="text-sm">↓</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.7, ease }} className="relative z-10 mt-8 grid grid-cols-2 border-y border-cream/10 bg-navy/25 backdrop-blur-sm sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.key} className="relative px-4 py-4 sm:px-6 lg:py-5 [&:not(:nth-child(2n+1))]:border-s [&:not(:nth-child(2n+1))]:border-cream/10 sm:[&:not(:first-child)]:border-s sm:[&:not(:first-child)]:border-cream/10">
              <span className="absolute end-3 top-3 font-display text-[8px] tracking-[0.2em] text-cream/20">0{index + 1}</span>
              <div className="font-display text-2xl font-semibold tracking-[-0.04em] text-gold sm:text-3xl"><CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} /></div>
              <div className="mt-2 text-[9px] uppercase tracking-[0.12em] text-cream/45 sm:text-[10px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
