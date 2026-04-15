"use client";

import { useEffect, useState } from "react";

const POOL = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format",
];

export function HeroBg() {
  const [images, setImages] = useState<string[]>(() => POOL.slice(0, 5));
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const shuffled = [...POOL];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setImages(shuffled.slice(0, 5));
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out hero-bg-ken-burns"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/75 to-stone-950/90" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 0.8px, transparent 0.8px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 hero-entrance-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`size-2 rounded-full transition-all duration-500 ${
              i === idx ? "bg-teal-400 w-6" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
