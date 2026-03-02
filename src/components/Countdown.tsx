import { useState, useEffect } from "react";

const TARGET = new Date("2026-04-17T10:15:00-03:00").getTime();

const Countdown = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const items = [
    { value: days, label: "Dias" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Minutos" },
    { value: seconds, label: "Segundos" },
  ];

  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      {items.map(({ value, label }) => (
        <div key={label} className="text-center">
          <p className="font-serif-elegant text-3xl sm:text-4xl font-light text-foreground leading-none">
            {String(value).padStart(2, "0")}
          </p>
          <p className="font-sans-elegant text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-1.5">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
