"use client";
import Link from "next/link";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, Stack, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import { useUiSettings } from "@/contexts/UiSettingsContext";

export default function TopNav() {
  const { mode, setMode, cultural, setCultural } = useUiSettings();
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ py: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography variant="h6" fontWeight={800} color="primary.main">
            GoSmiles
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button component={Link} href="/" color="inherit">
              Home
            </Button>
            <Button component={Link} href="/explore" color="inherit">
              Explore All
            </Button>
            <Button component={Link} href="/categories/eco-destinations" color="inherit">
              Eco Destinations
            </Button>
            <Button component={Link} href="/categories/farms" color="inherit">
              Farm Stays
            </Button>
            <Button component={Link} href="/voluntourism" color="inherit">
              Voluntourism
            </Button>
            <Button component={Link} href="/stories" color="inherit">
              Stories
            </Button>
            <Button component={Link} href="/corporate-educational" color="inherit">
              Corporate
            </Button>
          </Box>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Cultural motifs">
              <IconButton color={cultural ? "primary" : "default"} onClick={() => setCultural(!cultural)}>
                <TempleHinduIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={mode === "dark" ? "Switch to light" : "Switch to dark"}>
              <IconButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>{mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
            </Tooltip>
          </Stack>
          <Button variant="contained" color="primary" component={Link} href="/contact" sx={{ ml: 1 }}>
            Contact
          </Button>
          <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

