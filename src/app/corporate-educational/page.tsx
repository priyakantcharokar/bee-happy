"use client";
// @ts-nocheck
import { Box, Button, Card, CardContent, Container, Grid, Paper, Stack, Typography, Chip, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import TeamIcon from "@mui/icons-material/Groups";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const programs = [
  {
    type: "Corporate Retreat",
    title: "Sustainable Leadership Program",
    location: "Coorg, Karnataka",
    duration: "3-5 days",
    capacity: "20-50 participants",
    description: "Transform your team dynamics through immersive experiences in organic farming, sustainable practices, and mindful leadership in the serene hills of Coorg.",
    image: "/images/unspalsh_3.avif",
    features: ["Team building activities", "Leadership workshops", "Sustainability training", "Organic farming experience", "Wellness sessions"],
    price: "Custom pricing"
  },
  {
    type: "Educational Tour",
    title: "Environmental Conservation Program",
    location: "Sunderbans, West Bengal",
    duration: "4-6 days",
    capacity: "15-40 students",
    description: "Educational expedition focused on mangrove ecosystems, biodiversity conservation, and climate change impacts. Perfect for environmental science and biology students.",
    image: "/images/unspalsh_6.avif",
    features: ["Guided nature walks", "Conservation workshops", "Research activities", "Local community interaction", "Wildlife observation"],
    price: "₹18,999 per student"
  },
  {
    type: "Corporate CSR",
    title: "Community Development Initiative",
    location: "Spiti Valley, Himachal Pradesh",
    duration: "5-7 days",
    capacity: "10-30 participants",
    description: "Meaningful CSR engagement through education support, infrastructure development, and cultural exchange in remote Himalayan communities.",
    image: "/images/unspalsh_1.avif",
    features: ["School infrastructure projects", "Teaching support", "Cultural immersion", "Team collaboration", "Impact measurement"],
    price: "Custom pricing"
  }
];

const benefits = [
  "Enhanced team cohesion and communication",
  "Improved leadership and problem-solving skills",
  "Increased environmental awareness and responsibility",
  "Meaningful CSR impact and reporting",
  "Stress reduction and employee wellbeing",
  "Cultural sensitivity and global perspective"
];

const clients = [
  { name: "TCS", sector: "Technology", program: "Leadership Retreat" },
  { name: "IIT Delhi", sector: "Education", program: "Environmental Studies" },
  { name: "Wipro", sector: "Technology", program: "CSR Initiative" },
  { name: "IIM Bangalore", sector: "Education", program: "Sustainability Workshop" }
];

export default function CorporateEducationalPage() {
  return (
    <Box sx={{ display: "grid", gap: 6 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Stack alignItems="center" textAlign="center" spacing={3}>
            <Typography variant="h2" fontWeight={800} sx={{ maxWidth: 800 }}>
              Transform Teams Through Sustainable Experiences
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 700 }}>
              Custom corporate retreats and educational programs that build leadership, foster innovation, and create lasting positive impact on communities and environment.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" size="large">
                Plan Corporate Retreat
              </Button>
              <Button variant="outlined" size="large">
                Educational Programs
              </Button>
            </Stack>
          </Stack>
        </motion.div>
      </Container>

      {/* Programs */}
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ mb: 5 }}>
          Our Programs
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program, i) => (
            // @ts-expect-error MUI Grid item prop compatibility issue
            <Grid item xs={12} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card>
                  <Grid container>
                    <Grid item xs={12} md={5}>
                      <Box sx={{ position: "relative", height: { xs: 250, md: 350 } }}>
                        <Image src={program.image} alt={program.title} fill style={{ objectFit: "cover" }} />
                        <Box sx={{ position: "absolute", top: 16, left: 16 }}>
                          <Chip 
                            label={program.type} 
                            sx={{ bgcolor: "rgba(255,255,255,0.95)", fontWeight: 600 }}
                            icon={program.type === "Corporate Retreat" ? <BusinessIcon /> : program.type === "Educational Tour" ? <SchoolIcon /> : <TeamIcon />}
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <CardContent sx={{ p: 4, height: "100%" }}>
                        <Typography variant="h4" fontWeight={800} gutterBottom>
                          {program.title}
                        </Typography>
                        <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                          <Typography variant="body2" color="primary.main" fontWeight={600}>
                            📍 {program.location}
                          </Typography>
                          <Typography variant="body2" color="primary.main" fontWeight={600}>
                            ⏱️ {program.duration}
                          </Typography>
                          <Typography variant="body2" color="primary.main" fontWeight={600}>
                            👥 {program.capacity}
                          </Typography>
                        </Stack>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                          {program.description}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                          Program Features:
                        </Typography>
                        <Grid container spacing={1} sx={{ mb: 3 }}>
                          {program.features.map((feature, j) => (
                            <Grid item xs={12} sm={6} key={j}>
                              <Stack direction="row" spacing={1} alignItems="center">
                                <CheckCircleIcon sx={{ color: "primary.main", fontSize: 16 }} />
                                <Typography variant="body2">{feature}</Typography>
                              </Stack>
                            </Grid>
                          ))}
                        </Grid>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="h6" fontWeight={700} color="primary.main">
                            {program.price}
                          </Typography>
                          <Button variant="contained" size="large">
                            Get Quote
                          </Button>
                        </Stack>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Box sx={{ bgcolor: "background.paper", py: 6 }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight={800} gutterBottom>
                  Why Choose Our Programs?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Our corporate and educational programs go beyond traditional team building. We create transformative experiences that develop leadership, foster innovation, and build lasting connections with purpose.
                </Typography>
                <List>
                  {benefits.map((benefit, i) => (
                    <ListItem key={i} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h5" fontWeight={800} gutterBottom>
                    Trusted by Leading Organizations
                  </Typography>
                  <Grid container spacing={2}>
                    {clients.map((client, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Card variant="outlined" sx={{ 
                p: 2,
                borderRadius: 3,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(45, 125, 50, 0.1), 0 2px 4px rgba(45, 125, 50, 0.06)',
                  transform: 'translateY(-1px)',
                  borderColor: 'primary.main'
                }
              }}>
                          <Typography variant="subtitle1" fontWeight={600}>{client.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{client.sector}</Typography>
                          <Typography variant="caption" color="primary.main">{client.program}</Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6, textAlign: "center", borderRadius: 4, background: "linear-gradient(135deg, rgba(45,125,50,0.05) 0%, rgba(104,159,56,0.05) 100%)" }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Ready to Transform Your Team?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Let&apos;s design a custom program that aligns with your objectives and creates meaningful impact
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button variant="contained" size="large" component={Link} href="/contact">
                Get Custom Quote
              </Button>
              <Button variant="outlined" size="large">
                Download Brochure
              </Button>
            </Stack>
          </Paper>
        </Container>
      </motion.div>
    </Box>
  );
}