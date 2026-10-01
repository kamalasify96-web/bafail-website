"use client";

import { ReactNode } from "react";

export default function Marquee({
  children,
  durationSeconds = 28,
}: {
  children: ReactNode;
  durationSeconds?: number;
}) {
  return (
    <div dir="ltr" className="relative w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      <div
        className="flex w-max [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? "true" : undefined}>
            {[0, 1].map((repeat) => (
              <div key={repeat} className="flex shrink-0 gap-5 pe-5">
                {children}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
