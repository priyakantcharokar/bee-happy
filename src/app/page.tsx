"use client";
import { Box, Grid, Typography, Container, Paper, Stack, Button, Card, Avatar, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import HeroSearch from "@/components/HeroSearch";
import TripCard, { Trip } from "@/components/TripCard";
import trips from "@/data/trips.json";
import SpaIcon from "@mui/icons-material/Spa";
import GroupsIcon from "@mui/icons-material/Groups";
import ExploreIcon from "@mui/icons-material/Explore";
import ForestIcon from "@mui/icons-material/Forest";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const featured: Trip[] = (trips as unknown as Trip[]).slice(0, 6);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const features = [
    { icon: <SpaIcon />, title: "Climate-Positive", desc: "Zero carbon emissions with sustainable practices" },
    { icon: <ExploreIcon />, title: "Off-Beat Destinations", desc: "Hidden gems not on typical tourist maps" },
    { icon: <GroupsIcon />, title: "Cultural Immersion", desc: "Connect with local communities and traditions" },
    { icon: <ForestIcon />, title: "Eco-Conscious", desc: "Afforestation and organic farming experiences" },
    { icon: <VolunteerActivismIcon />, title: "Meaningful Impact", desc: "Every journey contributes to local conservation and community upliftment" },
    { icon: <CameraAltIcon />, title: "Soul-Stirring Stories", desc: "Create memories that inspire others to travel responsibly" }
  ];

  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai", text: "The Spiti trip was life-changing. Authentic experiences with zero guilt about environmental impact.", rating: 5 },
    { name: "Rahul Gupta", location: "Delhi", text: "GoSmiles showed us the real India. The mangrove conservation work in Sunderbans was incredible.", rating: 5 },
    { name: "Anita Desai", location: "Bangalore", text: "Perfect blend of adventure and sustainability. The organic farm stay in Coorg was magical.", rating: 5 },
    { name: "Vikram Singh", location: "Jaipur", text: "Incredible voluntourism experience! Planting mangroves while learning about conservation was deeply meaningful.", rating: 5 },
    { name: "Meera Patel", location: "Ahmedabad", text: "The organic farming program in Coorg taught us so much about sustainable living. Highly recommended!", rating: 5 },
    { name: "Arjun Kumar", location: "Chennai", text: "Corporate retreat with a purpose. Our team bonded while contributing to environmental restoration.", rating: 5 }
  ];

  // Auto-rotate testimonials every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const categories = [
    { title: "Eco Destinations", count: "12+ locations", image: "/images/unspalsh_1.avif", link: "/categories/eco-destinations" },
    { title: "Farm Stays", count: "8+ experiences", image: "/images/unspalsh_3.avif", link: "/categories/farms" },
    { title: "Voluntourism", count: "6+ projects", image: "/images/unspalsh_2.avif", link: "/voluntourism" },
    { title: "Corporate Retreats", count: "Custom programs", image: "/images/unspalsh_5.avif", link: "/corporate-educational" }
  ];

  return (
    <Box sx={{ display: "grid", gap: 8 }}>
      <HeroSearch />

      {/* Value Proposition Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={4} textAlign="center">
            <Typography variant="h3" fontWeight={800} sx={{ maxWidth: 600 }}>
              Your Climate-Positive Journey Starts Here
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
              Embark on transformative adventures that restore nature while enriching communities. 
              From mystical mountains to pristine coastlines — your journey becomes a force for good.
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {features.map((feature, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Paper sx={{ 
                      p: 3, 
                      textAlign: "center", 
                      height: "100%", 
                      borderRadius: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: '0 12px 24px rgba(45, 125, 50, 0.12), 0 4px 8px rgba(45, 125, 50, 0.08)',
                        transform: 'translateY(-4px)',
                        bgcolor: 'rgba(45, 125, 50, 0.02)'
                      }
                    }}>
                      <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h6" fontWeight={700} gutterBottom>{feature.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </motion.div>

      <Box className="divider-arches" sx={{ height: 28, borderRadius: 2 }} />

      {/* Trip Categories */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={4}>
            <Typography variant="h4" fontWeight={800} textAlign="center">
              Explore by Experience
            </Typography>
            <Grid container spacing={3}>
              {categories.map((cat, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Card 
                      component={Link}
                      href={cat.link}
                      sx={{ 
                        textDecoration: "none", 
                        height: 300,
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 3,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": { 
                          transform: "translateY(-8px)",
                          boxShadow: '0 20px 40px rgba(45, 125, 50, 0.2), 0 8px 16px rgba(45, 125, 50, 0.15)'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${cat.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          alignItems: "end",
                          p: 3
                        }}
                      >
                        <Box sx={{ color: "white" }}>
                          <Typography variant="h6" fontWeight={800}>{cat.title}</Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>{cat.count}</Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </motion.div>

      {/* Featured Trips */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Typography variant="h4" fontWeight={800}>
              Featured Experiences
            </Typography>
            <Button component={Link} href="/explore" variant="outlined" size="large">
              View All Trips
            </Button>
          </Stack>
          <Grid container spacing={3}>
            {featured.map((t) => (
              <Grid key={t.id} item xs={4} sm={4} md={4}>
                <TripCard trip={t} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>

      {/* Testimonials Carousel */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Box sx={{ bgcolor: "background.paper", py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ mb: 5 }}>
              Traveler Stories
            </Typography>
            
            {/* Carousel Container */}
            <Box sx={{ position: "relative", maxWidth: 800, mx: "auto" }}>
              {/* Navigation Buttons */}
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                  display: { xs: "none", md: "flex" }
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                  display: { xs: "none", md: "flex" }
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>

              {/* Testimonial Cards */}
              <Box sx={{ overflow: "hidden", borderRadius: 3 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card sx={{ 
                      p: 4, 
                      textAlign: "center", 
                      minHeight: 300,
                      borderRadius: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: '0 12px 24px rgba(45, 125, 50, 0.12), 0 4px 8px rgba(45, 125, 50, 0.08)',
                        transform: 'translateY(-2px)',
                      }
                    }}>
                      <Stack spacing={3} alignItems="center">
                        <Stack direction="row" spacing={0.5} justifyContent="center">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <StarIcon key={i} sx={{ color: "warning.main", fontSize: 24 }} />
                          ))}
                        </Stack>
                        <Typography variant="h6" sx={{ fontStyle: "italic", maxWidth: 600, lineHeight: 1.6 }}>
                          &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
                            {testimonials[currentTestimonial].name.charAt(0)}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" fontWeight={600}>
                              {testimonials[currentTestimonial].name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonials[currentTestimonial].location}
                            </Typography>
                          </Box>
                        </Stack>
                      </Stack>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </Box>

              {/* Dots Indicator */}
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: currentTestimonial === index ? "primary.main" : "grey.300",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: currentTestimonial === index ? "primary.dark" : "grey.400"
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Container maxWidth="md">
          <Paper sx={{ 
          p: 6, 
          textAlign: "center", 
          borderRadius: 4, 
          background: "linear-gradient(135deg, rgba(45,125,50,0.05) 0%, rgba(104,159,56,0.05) 100%)",
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 16px 32px rgba(45, 125, 50, 0.15), 0 6px 12px rgba(45, 125, 50, 0.1)',
            transform: 'translateY(-2px)',
            background: "linear-gradient(135deg, rgba(45,125,50,0.08) 0%, rgba(104,159,56,0.08) 100%)"
          }
        }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Ready for Your Sustainable Adventure?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of conscious travelers who choose climate-positive journeys
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button variant="contained" size="large" component={Link} href="/explore">
                Explore Trips
              </Button>
              <Button variant="outlined" size="large" component={Link} href="/contact">
                Plan Custom Trip
              </Button>
            </Stack>
          </Paper>
        </Container>
      </motion.div>
    </Box>
  );
}
