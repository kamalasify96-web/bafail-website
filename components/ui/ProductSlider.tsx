"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div className="relative h-44 mb-4 group/slider">
      <Image src={images[index]} alt={alt} fill className="object-contain" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.preventDefault();
              go(-1);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A1A2F" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.preventDefault();
              go(1);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A1A2F" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                  i === index ? "bg-gold" : "bg-navy/15"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
