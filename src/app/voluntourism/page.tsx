"use client";
import { Box, Button, Card, CardContent, Container, Grid, Paper, Stack, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SpaIcon from "@mui/icons-material/Spa";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";

const programs = [
  {
    id: "mangrove-conservation",
    title: "Mangrove Conservation - Sunderbans",
    location: "West Bengal",
    duration: "4-7 days",
    impact: "Plant 50+ saplings per volunteer",
    description: "Join local communities in protecting the world's largest mangrove forest. Participate in sapling plantation, wildlife monitoring, and community education programs.",
    image: "/images/unspalsh_6.avif",
    activities: ["Mangrove plantation", "Wildlife monitoring", "Community workshops", "Traditional fishing techniques"],
    price: 14999
  },
  {
    id: "organic-farming",
    title: "Organic Farming Initiative - Coorg",
    location: "Karnataka", 
    duration: "3-5 days",
    impact: "Support 10+ farming families",
    description: "Work alongside local farmers to learn sustainable agriculture practices. Help with organic cultivation, composting, and traditional farming methods.",
    image: "/images/unspalsh_3.avif",
    activities: ["Organic farming", "Composting workshops", "Spice cultivation", "Coffee processing"],
    price: 8999
  },
  {
    id: "education-support",
    title: "Rural Education Support - Spiti",
    location: "Himachal Pradesh",
    duration: "7-10 days",
    impact: "Teach 100+ children",
    description: "Support education in remote Himalayan villages. Teach English, conduct environmental awareness programs, and help with infrastructure development.",
    image: "/images/unspalsh_1.avif",
    activities: ["Teaching English", "Environmental education", "Library setup", "Cultural exchange"],
    price: 24999
  }
];

const impacts = [
  { icon: <SpaIcon />, title: "Environmental Impact", desc: "10,000+ trees planted, 500+ acres restored" },
  { icon: <GroupsIcon />, title: "Community Empowerment", desc: "200+ families supported, 50+ projects completed" },
  { icon: <SchoolIcon />, title: "Education Support", desc: "1,000+ children educated, 20+ schools supported" },
  { icon: <VolunteerActivismIcon />, title: "Volunteer Network", desc: "2,000+ volunteers, 95% satisfaction rate" }
];

export default function VoluntourismPage() {
  return (
    <Box sx={{ display: "grid", gap: 6 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Stack alignItems="center" textAlign="center" spacing={3}>
            <Typography variant="h2" fontWeight={800} sx={{ maxWidth: 800 }}>
              Travel with Purpose, Create Lasting Impact
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600 }}>
              Join meaningful voluntourism programs that combine authentic travel experiences with community development and environmental conservation.
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Start Your Journey
            </Button>
          </Stack>
        </motion.div>
      </Container>

      {/* Impact Stats */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Box sx={{ bgcolor: "background.paper", py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ mb: 4 }}>
              Our Collective Impact
            </Typography>
            <Grid container spacing={3}>
              {impacts.map((impact, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
                      <Box sx={{ color: "primary.main", mb: 2, fontSize: 40 }}>{impact.icon}</Box>
                      <Typography variant="h6" fontWeight={700} gutterBottom>{impact.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{impact.desc}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Programs */}
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ mb: 5 }}>
          Voluntourism Programs
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Card sx={{ 
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
              borderRadius: 3,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                boxShadow: '0 12px 24px rgba(45, 125, 50, 0.12), 0 4px 8px rgba(45, 125, 50, 0.08)',
                transform: 'translateY(-2px)',
              }
            }}>
                  <Box sx={{ position: "relative", height: 250 }}>
                    <Image src={program.image} alt={program.title} fill style={{ objectFit: "cover" }} />
                    <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                      <Chip label={program.duration} sx={{ bgcolor: "rgba(255,255,255,0.9)" }} />
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" fontWeight={800} gutterBottom>
                      {program.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main" gutterBottom>
                      {program.location} • {program.impact}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {program.description}
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      Activities:
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                      {program.activities.map((activity, j) => (
                        <Chip key={j} label={activity} size="small" variant="outlined" />
                      ))}
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" fontWeight={700}>
                        ₹{program.price.toLocaleString()}
                      </Typography>
                      <Button variant="contained">
                        Join Program
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6, textAlign: "center", borderRadius: 4 }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Ready to Make a Difference?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join our community of conscious travelers creating positive impact across India
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button variant="contained" size="large">
                Apply Now
              </Button>
              <Button variant="outlined" size="large" component={Link} href="/contact">
                Learn More
              </Button>
            </Stack>
          </Paper>
        </Container>
      </motion.div>
    </Box>
  );
}