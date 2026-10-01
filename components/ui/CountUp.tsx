"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      setDisplay(Math.round(easeOutQuint(t) * value));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return (
    <motion.span>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
