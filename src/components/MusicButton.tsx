import { useState, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

const MUSIC_URL = "https://keslley-lima.github.io/bms-ads/music.mp3";

const MusicButton = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_URL);
      audioRef.current.loop = true;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pausar música" : "Tocar música"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      {playing ? <Music size={22} /> : <VolumeX size={22} />}
    </button>
  );
};

export default MusicButton;
