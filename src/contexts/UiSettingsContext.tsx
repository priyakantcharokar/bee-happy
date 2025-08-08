"use client";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import type { ThemeMode } from "@/theme";

type UiSettings = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  cultural: boolean;
  setCultural: (v: boolean) => void;
};

const UiSettingsContext = createContext<UiSettings | null>(null);

export function UiSettingsProvider({ children, initialMode }: { children: ReactNode; initialMode: ThemeMode }) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const [cultural, setCultural] = useState<boolean>(true);

  const value = useMemo(
    () => ({ mode, setMode, cultural, setCultural }),
    [mode, cultural]
  );

  return <UiSettingsContext.Provider value={value}>{children}</UiSettingsContext.Provider>;
}

export function useUiSettings(): UiSettings {
  const ctx = useContext(UiSettingsContext);
  if (!ctx) throw new Error("useUiSettings must be used within UiSettingsProvider");
  return ctx;
}

