"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import SpaIcon from "@mui/icons-material/Spa";
import { useState } from "react";
import QuickBookDialog from "./dialogs/QuickBookDialog";
import EnquireDialog from "./dialogs/EnquireDialog";

export type Trip = {
  id: string;
  title: string;
  destination: string;
  durationDays: number;
  priceFrom: number;
  images: string[];
  tags: string[];
  sustainabilityScore?: number;
};

export default function TripCard({ trip }: { trip: Trip }) {
  const [openBook, setOpenBook] = useState(false);
  const [openEnq, setOpenEnq] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: 420, // Fixed height for all cards
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(45, 125, 50, 0.15), 0 8px 16px rgba(45, 125, 50, 0.1)',
            transform: 'translateY(-4px)',
          }
        }}
      >
      <CardActionArea component={Link} href={`/trips/${trip.id}`}>
        <CardMedia
          component="img"
          height="180"
          image={trip.images[0] ?? "/hero.jpg"}
          alt={trip.title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </CardActionArea>
      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        p: 2.5,
        height: 'calc(100% - 180px)' // Remaining height after image
      }}>
        <Box>
          {/* Title and Location */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
            <Box sx={{ flexGrow: 1, pr: 1 }}>
              <Typography 
                variant="subtitle1" 
                fontWeight={700} 
                sx={{ 
                  lineHeight: 1.3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '2.6em', // Reserve space for 2 lines
                  mb: 0.5
                }}
              >
                {trip.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {trip.destination} • {trip.durationDays}D
              </Typography>
            </Box>
            <Stack alignItems="end" sx={{ flexShrink: 0 }}>
              <Typography variant="subtitle2" color="text.secondary">
                From
              </Typography>
              <Typography variant="h6">₹{trip.priceFrom.toLocaleString()}</Typography>
            </Stack>
          </Stack>

          {/* Tags */}
          <Stack direction="row" gap={1} sx={{ mb: 2, minHeight: '32px', alignItems: 'flex-start' }}>
            {trip.tags.slice(0, 2).map((t) => (
              <Chip key={t} size="small" label={t} />
            ))}
            {trip.sustainabilityScore && (
              <Chip
                size="small"
                icon={<SpaIcon fontSize="small" />}
                label={`Eco ${trip.sustainabilityScore}/10`}
              />
            )}
          </Stack>
        </Box>

        {/* Action Buttons */}
        <Box>
          <Divider sx={{ mb: 2 }} />
          <Stack direction={{ xs: "column", sm: "row" }} gap={1.25}>
            <Button fullWidth variant="contained" startIcon={<BoltIcon />} onClick={() => setOpenBook(true)}>
              Quick Book
            </Button>
            <Button fullWidth variant="outlined" onClick={() => setOpenEnq(true)}>
              Enquire
            </Button>
          </Stack>
        </Box>
      </CardContent>
        <QuickBookDialog trip={trip} open={openBook} onClose={() => setOpenBook(false)} />
        <EnquireDialog trip={trip} open={openEnq} onClose={() => setOpenEnq(false)} />
      </Card>
    </motion.div>
  );
}

