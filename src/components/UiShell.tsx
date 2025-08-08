"use client";
import { ReactNode, useEffect, useMemo } from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import getTheme from "@/theme";
import { UiSettingsProvider } from "@/contexts/UiSettingsContext";
import { useUiSettings } from "@/contexts/UiSettingsContext";

function InnerTheme({ children }: { children: ReactNode }) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const { mode, cultural, setMode } = useUiSettings();
  useEffect(() => {
    setMode(prefersDark ? "dark" : "light");
  }, [prefersDark, setMode]);
  const theme = useMemo(() => getTheme(mode, cultural), [mode, cultural]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default function UiShell({ children }: { children: ReactNode }) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const initial = prefersDark ? "dark" : "light";
  return (
    <UiSettingsProvider initialMode={initial}>
      <InnerTheme>{children}</InnerTheme>
    </UiSettingsProvider>
  );
}

