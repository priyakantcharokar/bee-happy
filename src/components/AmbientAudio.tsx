"use client";
import { useEffect, useRef } from "react";
import { useUiSettings } from "@/contexts/UiSettingsContext";

export default function AmbientAudio() {
  const { ambient } = useUiSettings();
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;
    audio.volume = 0.12;
    if (ambient) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [ambient]);

  return (
    <audio ref={ref} loop preload="none" src="/ambient/river.webm" />
  );
}

