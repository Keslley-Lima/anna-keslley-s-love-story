import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";

const MUSIC_URL = "https://keslley-lima.github.io/bms-ads/music.mp3";

let sharedAudio: HTMLAudioElement | null = null;

const getAudio = () => {
  if (!sharedAudio) {
    sharedAudio = new Audio(MUSIC_URL);
    sharedAudio.loop = true;
    sharedAudio.volume = 0.5;
    sharedAudio.preload = "auto";
  }
  return sharedAudio;
};

export const startMusic = () => {
  const audio = getAudio();
  // Reset to start to ensure clean playback
  audio.currentTime = 0;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.warn("Audio play failed:", err);
    });
  }
};

const MusicButton = () => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = getAudio();
    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    // Sync initial state
    setPlaying(!audio.paused);
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggle = () => {
    const audio = getAudio();
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
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
