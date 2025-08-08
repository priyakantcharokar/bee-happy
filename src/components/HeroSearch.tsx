"use client";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography, Paper, Stack, Chip, InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";

export default function HeroSearch() {
  const router = useRouter();
  const [where, setWhere] = useState("");
  const [start, setStart] = useState<Dayjs | null>(null);
  const [end, setEnd] = useState<Dayjs | null>(null);
  const [guests, setGuests] = useState(2);

  const onSearch = () => {
    const params = new URLSearchParams();
    if (where) params.set("q", where);
    if (start) params.set("start", start.format("YYYY-MM-DD"));
    if (end) params.set("end", end.format("YYYY-MM-DD"));
    params.set("guests", String(guests));
    router.push(`/explore?${params.toString()}`);
  };

  const popularDestinations = ["Spiti Valley", "Coorg", "Andaman", "Sunderbans", "Rajasthan"];

  return (
    <Box 
      className="hero-bg" 
      sx={{ 
        display: "grid", 
        gap: 4, 
        pt: { xs: 2, md: 6 }, 
        pb: { xs: 3, md: 4 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/images/unspalsh_10.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: -2
        }
      }}
    >
      {/* Hero Title */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Stack alignItems="center" textAlign="center" spacing={2}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            background: "linear-gradient(135deg, #2D7D32 0%, #689F38 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1
          }}>
            Gosmiles — Go Sustainable Miles
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.6 }}>
            Your adventure awaits — where every journey heals the planet and awakens your soul.
          </Typography>
        </Stack>
      </motion.div>

      {/* Enhanced Search Card */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, md: 3 },
            borderRadius: 4,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            maxWidth: 1000,
            mx: "auto"
          }}
        >
          {/* Single Row Search Bar */}
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            spacing={{ xs: 2, md: 0 }} 
            sx={{ 
              border: "2px solid",
              borderColor: "divider",
              borderRadius: 3,
              overflow: "hidden",
              backgroundColor: "background.paper",
              minHeight: { md: 64 }
            }}
          >
            {/* Where Field */}
            <Box sx={{ 
              flex: 2, 
              borderRight: { md: "1px solid" }, 
              borderRightColor: { md: "divider" },
              display: "flex",
              alignItems: "center"
            }}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Where do you want to go?"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    px: 3,
                    py: 2.5,
                    fontSize: "1rem",
                    height: 64,
                    display: "flex",
                    alignItems: "center"
                  }
                }}
              />
            </Box>

            {/* Check In */}
            <Box sx={{ 
              flex: 1.2, 
              borderRight: { md: "1px solid" }, 
              borderRightColor: { md: "divider" },
              display: "flex",
              alignItems: "center"
            }}>
              <DatePicker
                value={start}
                onChange={setStart}
                slotProps={{ 
                  textField: { 
                    fullWidth: true,
                    variant: "standard",
                    placeholder: "Check in",
                    InputProps: {
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon color="primary" />
                        </InputAdornment>
                      ),
                    },
                    sx: {
                      "& .MuiInputBase-root": {
                        px: 3,
                        py: 2.5,
                        fontSize: "1rem",
                        height: 64,
                        display: "flex",
                        alignItems: "center"
                      }
                    }
                  } 
                }}
              />
            </Box>

            {/* Check Out */}
            <Box sx={{ 
              flex: 1.2, 
              borderRight: { md: "1px solid" }, 
              borderRightColor: { md: "divider" },
              display: "flex",
              alignItems: "center"
            }}>
              <DatePicker
                value={end}
                onChange={setEnd}
                slotProps={{ 
                  textField: { 
                    fullWidth: true,
                    variant: "standard",
                    placeholder: "Check out",
                    InputProps: {
                      disableUnderline: true,
                    },
                    sx: {
                      "& .MuiInputBase-root": {
                        px: 3,
                        py: 2.5,
                        fontSize: "1rem",
                        height: 64,
                        display: "flex",
                        alignItems: "center"
                      }
                    }
                  } 
                }}
              />
            </Box>

            {/* Guests */}
            <Box sx={{ 
              flex: 1, 
              borderRight: { md: "1px solid" }, 
              borderRightColor: { md: "divider" },
              display: "flex",
              alignItems: "center"
            }}>
              <TextField
                fullWidth
                variant="standard"
                type="number"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                inputProps={{ min: 1, max: 20 }}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    px: 3,
                    py: 2.5,
                    fontSize: "1rem",
                    height: 64,
                    display: "flex",
                    alignItems: "center"
                  }
                }}
              />
            </Box>

            {/* Search Button */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              p: 1,
              minHeight: 64
            }}>
              <Button 
                variant="contained" 
                onClick={onSearch}
                sx={{ 
                  minWidth: { xs: "100%", md: 120 },
                  height: 48,
                  borderRadius: 2,
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #2D7D32 0%, #689F38 100%)",
                  boxShadow: "0 4px 16px rgba(45,125,50,0.3)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1B5E20 0%, #33691E 100%)",
                    transform: "translateY(-1px)",
                    boxShadow: "0 6px 20px rgba(45,125,50,0.4)",
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <SearchIcon sx={{ mr: 1 }} />
                Search
              </Button>
            </Box>
          </Stack>

          {/* Popular Destinations */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Box sx={{ mt: 2.5 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 500, textAlign: "center" }}>
                ✨ Trending destinations
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap justifyContent="center">
                {popularDestinations.map((dest, index) => (
                  <motion.div
                    key={dest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  >
                    <Chip
                      label={dest}
                      clickable
                      onClick={() => setWhere(dest)}
                      sx={{
                        borderRadius: 3,
                        px: 1,
                        py: 0.5,
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        background: "rgba(45, 125, 50, 0.08)",
                        border: "1px solid rgba(45, 125, 50, 0.2)",
                        color: "primary.dark",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "white",
                          transform: "translateY(-2px) scale(1.05)",
                          boxShadow: "0 4px 12px rgba(45, 125, 50, 0.3)",
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Paper>
      </motion.div>
    </Box>
  );
}