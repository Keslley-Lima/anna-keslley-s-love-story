import { useState, useEffect } from "react";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";

const images = [couple1, couple2, couple3];
const INTERVAL = 5000;

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl shadow-xl aspect-[9/16] relative bg-foreground/5">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Anna Flávia & Keslley - Foto ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1.05)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
