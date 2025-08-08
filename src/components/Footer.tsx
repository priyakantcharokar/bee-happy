"use client";
import { Box, Container, Divider, Grid, Link as MuiLink, Stack, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const socialLinks = [
    { icon: <FacebookIcon />, url: "https://facebook.com/beehappy", label: "Facebook" },
    { icon: <InstagramIcon />, url: "https://instagram.com/beehappy", label: "Instagram" },
    { icon: <TwitterIcon />, url: "https://twitter.com/beehappy", label: "Twitter" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com/company/beehappy", label: "LinkedIn" },
    { icon: <YouTubeIcon />, url: "https://youtube.com/@beehappy", label: "YouTube" },
    { icon: <WhatsAppIcon />, url: "https://wa.me/919876543210", label: "WhatsApp" }
  ];

  return (
    <Box component="footer" sx={{ mt: 6, py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack gap={2}>
              <Typography variant="h6" fontWeight={800} color="primary.main">
                Bee Happy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Where every journey heals the planet and awakens your soul.
              </Typography>
              
              {/* Social Media Icons */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        color: "text.secondary",
                        bgcolor: "rgba(45,125,50,0.1)",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "white",
                          transform: "translateY(-2px)"
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Stack gap={1.25}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Explore</Typography>
              <MuiLink component={Link} href="/explore" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                All Trips
              </MuiLink>
              <MuiLink component={Link} href="/categories/eco-destinations" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                Eco Destinations
              </MuiLink>
              <MuiLink component={Link} href="/categories/farms" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                Farms
              </MuiLink>
              <MuiLink component={Link} href="/voluntourism" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                Voluntourism
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Stack gap={1.25}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Company</Typography>
              <MuiLink component={Link} href="/stories" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                Stories
              </MuiLink>
              <MuiLink component={Link} href="/partners" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                Partners
              </MuiLink>
              <MuiLink component={Link} href="/about" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                About
              </MuiLink>
              <MuiLink component={Link} href="/contact" color="inherit" sx={{ "&:hover": { color: "primary.main" } }}>
                Contact
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Stack gap={1.25}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Reach Us</Typography>
              <Typography variant="body2" color="text.secondary">
                📧 beehappycare@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                📞 +91 98765 43210
              </Typography>
              <Typography variant="body2" color="text.secondary">
                🕒 Mon–Fri 09:00 – 17:00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                📍 Bangalore, Karnataka
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        {/* Bottom Section */}
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            Made with 💚 for conscious travelers • Creating positive impact, one journey at a time
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <MuiLink href="/privacy-policy" color="text.secondary" sx={{ "&:hover": { color: "primary.main" } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink href="/terms-conditions" color="text.secondary" sx={{ "&:hover": { color: "primary.main" } }}>
              Terms & Conditions
            </MuiLink>
            <MuiLink href="/sitemap" color="text.secondary" sx={{ "&:hover": { color: "primary.main" } }}>
              Sitemap
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

