import React, { useEffect, useState } from "react";

type CarouselProps = {
  slides: React.ReactNode[];
  interval?: number; // ms
};

export default function Carousel({ slides, interval = 4000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const t = setInterval(() => {
      setIsTransitioning(true);
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(t);
  }, [slides, interval]);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex === index || isTransitioning) return;
    setIsTransitioning(true);
    setIndex(newIndex);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-lg group animate-fade-in">
      <div 
        className="flex transition-all duration-500 ease-in-out" 
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full flex-shrink-0">
            {s}
          </div>
        ))}
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          aria-label="Previous slide"
          onClick={() => handleSlideChange((index - 1 + slides.length) % slides.length)}
          className="bg-white/90 dark:bg-black/70 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black/80 transition-all duration-300 hover:scale-110"
        >
          <span className="text-lg">‹</span>
        </button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          aria-label="Next slide"
          onClick={() => handleSlideChange((index + 1) % slides.length)}
          className="bg-white/90 dark:bg-black/70 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black/80 transition-all duration-300 hover:scale-110"
        >
          <span className="text-lg">›</span>
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index 
                ? "bg-primary scale-125" 
                : "bg-white/60 hover:bg-white/80 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
