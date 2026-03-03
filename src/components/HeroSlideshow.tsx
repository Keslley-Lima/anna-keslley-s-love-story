import { useState, useEffect, useRef } from "react";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import proposalVideo from "@/assets/proposal-video.mp4";

type Slide = { type: "image"; src: string } | { type: "video"; src: string };

const slides: Slide[] = [
  { type: "image", src: couple1 },
  { type: "image", src: couple2 },
  { type: "video", src: proposalVideo },
];

const INTERVAL = 8000;

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const slide = slides[current];
    if (slide.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl shadow-xl aspect-[9/16] relative bg-foreground/5">
      {slides.map((slide, i) =>
        slide.type === "image" ? (
          <img
            key={i}
            src={slide.src}
            alt={`Anna Flávia & Keslley - Foto ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms] ease-in-out"
            style={{
              opacity: current === i ? 1 : 0,
              transform: current === i ? "scale(1.03)" : "scale(1)",
            }}
          />
        ) : (
          <video
            key={i}
            ref={videoRef}
            src={slide.src}
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[4000ms] ease-in-out"
            style={{
              opacity: current === i ? 1 : 0,
              transform: current === i ? "scale(1.03)" : "scale(1)",
            }}
          />
        )
      )}
    </div>
  );
};

export default HeroSlideshow;
