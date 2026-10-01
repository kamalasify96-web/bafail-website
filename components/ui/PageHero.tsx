export default function PageHero({
  eyebrow,
  title,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "navy-pattern navy-pattern--feature relative bg-navy text-cream" : "bg-cream text-navy"}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-24 pb-16 text-center">
        <div
          className={`font-display text-[11px] tracking-[0.3em] uppercase mb-5 ${
            dark ? "text-gold" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
