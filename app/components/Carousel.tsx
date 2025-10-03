import React, { useEffect, useState } from "react";

type CarouselProps = {
  slides: React.ReactNode[];
  interval?: number; // ms
};

export default function Carousel({ slides, interval = 4000 }: CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides, interval]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="min-w-full flex-shrink-0">
            {s}
          </div>
        ))}
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="bg-white/80 dark:bg-black/60 p-2 rounded-full shadow-sm"
        >
          ‹
        </button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="bg-white/80 dark:bg-black/60 p-2 rounded-full shadow-sm"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-foreground" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
