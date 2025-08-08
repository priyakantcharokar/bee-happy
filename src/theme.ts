import { createTheme } from "@mui/material/styles";

// Organic green palette inspired by nature and vegetables
const primary = { main: "#2D7D32", light: "#4CAF50", dark: "#1B5E20", contrastText: "#ffffff" }; // forest green
const secondary = { main: "#689F38", light: "#8BC34A", dark: "#33691E", contrastText: "#ffffff" }; // fresh green
const accentTerracotta = "#558B2F"; // nature green

const neutral = {
  50: "#F8FAF9",
  100: "#F1F5F4",
  200: "#E5ECEB",
  300: "#D5DEDD",
  400: "#9FAEAD",
  500: "#6D7A79",
  600: "#4D5857",
  700: "#394241",
  800: "#232827",
  900: "#151817",
};

export type ThemeMode = "light" | "dark";

export function getTheme(mode: ThemeMode = "light", cultural: boolean = false) {
  const baseBackground = mode === "light" ? neutral[50] : "#0E1A22"; // deep blue-black
  const basePaper = mode === "light" ? "#ffffff" : "#0F2230";
  const baseTextPrimary = mode === "light" ? neutral[900] : "#E6EEF2";
  const baseTextSecondary = mode === "light" ? neutral[700] : "#AECBDA";

  const decorativeBorder = mode === "light" ? neutral[200] : "#1F3746";

  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary,
      secondary,
      background: { default: baseBackground, paper: basePaper },
      text: { primary: baseTextPrimary, secondary: baseTextSecondary },
      warning: { main: accentTerracotta },
    },
    typography: {
      fontFamily:
        'InterVariable, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      h1: { fontWeight: 900, letterSpacing: -0.5, fontFamily: 'Playfair Display Variable, serif' },
      h2: { fontWeight: 800, letterSpacing: -0.25, fontFamily: 'Playfair Display Variable, serif' },
      h3: { fontWeight: 800, fontFamily: 'Playfair Display Variable, serif' },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      button: { textTransform: "none", fontWeight: 600, letterSpacing: 0.2 },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiButton: {
        defaultProps: { disableRipple: true },
        styleOverrides: {
          root: {
            borderRadius: 14,
            paddingInline: 20,
            paddingBlock: 12,
            boxShadow: mode === "light" ? "0 2px 0 rgba(0,0,0,0.06)" : "0 2px 0 rgba(0,0,0,0.5)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            boxShadow:
              mode === "light"
                ? "0 1px 2px rgba(0,0,0,0.04), 0 12px 28px rgba(16,54,77,0.10)"
                : "0 1px 2px rgba(0,0,0,0.6), 0 12px 28px rgba(0,0,0,0.4)",
            border: `1px solid ${decorativeBorder}`,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 999 },
        },
      },
    },
  });

  // Cultural mode could bump heading letterforms slightly and adjust secondary
  if (cultural) {
    theme.typography.h1 = { ...(theme.typography.h1 as NonNullable<typeof theme.typography.h1>), letterSpacing: -0.6 };
    theme.typography.h2 = { ...(theme.typography.h2 as NonNullable<typeof theme.typography.h2>), letterSpacing: -0.4 };
  }

  return theme;
}

export default getTheme;

