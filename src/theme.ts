import { createTheme } from "@mui/material/styles";

// Organic green palette inspired by nature and vegetables
const primary = { main: "#2D7D32", light: "#4CAF50", dark: "#1B5E20", contrastText: "#ffffff" }; // forest green
const secondary = { main: "#689F38", light: "#8BC34A", dark: "#33691E", contrastText: "#ffffff" }; // fresh green
const accentTerracotta = "#558B2F"; // nature green

// Typography colors for high contrast and accessibility (MakeMyTrip-inspired)
const typographyColors = {
  primary: "#2D2D2D",     // High contrast for headings
  secondary: "#4F4F4F",   // Softer for body text
  disabled: "#9E9E9E",    // Light for helper text
  hint: "#757575"         // Medium for secondary info
};

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
      // Primary font for UI & body text - Inter with system fallbacks
      fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      
      // Base font size and line height for optimal readability
      fontSize: 16,
      
      // Heading typography - Bold, high contrast, tighter letter-spacing
      h1: { 
        fontFamily: 'Roboto, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: typographyColors.primary
      },
      h2: { 
        fontFamily: 'Roboto, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
        color: typographyColors.primary
      },
      h3: { 
        fontFamily: 'Roboto, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        color: typographyColors.primary
      },
      h4: { 
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.3,
        color: typographyColors.primary
      },
      h5: { 
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.3,
        color: typographyColors.primary
      },
      h6: { 
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.4,
        color: typographyColors.primary
      },
      
      // Body text - Medium weight, optimal readability
      body1: {
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        color: typographyColors.secondary
      },
      body2: {
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        color: typographyColors.secondary
      },
      
      // Subtitles and captions
      subtitle1: {
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.4,
        color: typographyColors.secondary
      },
      subtitle2: {
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.4,
        color: typographyColors.secondary
      },
      caption: {
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 300,
        fontSize: '0.75rem',
        lineHeight: 1.4,
        color: typographyColors.hint
      },
      overline: {
        fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 500,
        fontSize: '0.75rem',
        lineHeight: 1.4,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: typographyColors.hint
      },
      
      // Button typography - Poppins for prominence
      button: { 
        fontFamily: 'Poppins, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: 1.4,
        letterSpacing: '0.02em',
        textTransform: 'none'
      },
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
          root: { 
            borderRadius: 999,
            fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 500,
            fontSize: '0.75rem'
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputLabel-root': {
              fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 300,
              color: typographyColors.hint
            },
            '& .MuiInputBase-input': {
              fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400,
              fontSize: '1rem'
            }
          }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: typographyColors.hint
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            position: 'fixed',
            top: 0,
            zIndex: 1100,
            backdropFilter: 'blur(10px)',
            backgroundColor: mode === 'light' ? 'rgba(248, 250, 249, 0.9)' : 'rgba(14, 26, 34, 0.9)',
            borderBottom: `1px solid ${decorativeBorder}`,
            boxShadow: mode === 'light' 
              ? '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)'
              : '0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
          }
        }
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

