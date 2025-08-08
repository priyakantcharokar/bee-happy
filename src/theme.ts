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
      // Primary font - Charter for body text with elegant serif fallbacks
      fontFamily: 'Charter, "Charter BT", "Bitstream Charter", "Times New Roman", Times, serif',
      
      // Base font size and line height for optimal readability
      fontSize: 16,
      
      // Heading typography - Kievit for headings with geometric precision
      h1: { 
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: mode === 'light' ? typographyColors.primary : baseTextPrimary
      },
      h2: { 
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
        color: mode === 'light' ? typographyColors.primary : baseTextPrimary
      },
      h3: { 
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        color: mode === 'light' ? typographyColors.primary : baseTextPrimary
      },
      h4: { 
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.3,
        color: mode === 'light' ? typographyColors.primary : baseTextPrimary
      },
      h5: { 
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.3,
        color: mode === 'light' ? typographyColors.primary : baseTextPrimary
      },
      h6: { 
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.4,
        color: mode === 'light' ? typographyColors.primary : baseTextPrimary
      },
      
      // Body text - Charter for elegant readability
      body1: {
        fontFamily: 'Charter, "Charter BT", "Bitstream Charter", "Times New Roman", Times, serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.6,
        color: mode === 'light' ? typographyColors.secondary : baseTextSecondary
      },
      body2: {
        fontFamily: 'Charter, "Charter BT", "Bitstream Charter", "Times New Roman", Times, serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: mode === 'light' ? typographyColors.secondary : baseTextSecondary
      },
      
      // Subtitles and captions - Kievit for UI elements
      subtitle1: {
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.4,
        color: mode === 'light' ? typographyColors.secondary : baseTextSecondary
      },
      subtitle2: {
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.4,
        color: mode === 'light' ? typographyColors.secondary : baseTextSecondary
      },
      caption: {
        fontFamily: 'Charter, "Charter BT", "Bitstream Charter", "Times New Roman", Times, serif',
        fontWeight: 300,
        fontSize: '0.75rem',
        lineHeight: 1.4,
        color: mode === 'light' ? typographyColors.hint : baseTextSecondary
      },
      overline: {
        fontFamily: 'Kievit, "Kievit Offc", Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '0.75rem',
        lineHeight: 1.4,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: mode === 'light' ? typographyColors.hint : baseTextSecondary
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
            borderRadius: 24,
            background: mode === 'light' 
              ? 'linear-gradient(145deg, #ffffff 0%, #fafbfa 100%)'
              : 'linear-gradient(145deg, #1a2b32 0%, #0f1f26 100%)',
            boxShadow: mode === "light"
              ? "0 4px 6px rgba(0,0,0,0.02), 0 12px 40px rgba(45,125,50,0.08), 0 0 0 1px rgba(45,125,50,0.04)"
              : "0 4px 6px rgba(0,0,0,0.3), 0 12px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(45,125,50,0.1)",
            border: 'none',
            overflow: 'visible', // Prevent edge cutting
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 24,
              padding: '1px',
              background: mode === 'light'
                ? 'linear-gradient(145deg, rgba(45,125,50,0.1), rgba(104,159,56,0.05))'
                : 'linear-gradient(145deg, rgba(45,125,50,0.2), rgba(104,159,56,0.1))',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              pointerEvents: 'none'
            },
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === "light"
                ? "0 8px 25px rgba(45,125,50,0.15), 0 4px 10px rgba(0,0,0,0.08)"
                : "0 8px 25px rgba(0,0,0,0.4), 0 4px 10px rgba(45,125,50,0.2)"
            }
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

