"use client";
import { notFound, useParams } from "next/navigation";
import { Box, Breadcrumbs, Button, Chip, Grid, Stack, Switch, Typography, FormControlLabel } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import trips from "@/data/trips.json";
import TripCard, { Trip } from "@/components/TripCard";
import QuickBookDialog from "@/components/dialogs/QuickBookDialog";
import EnquireDialog from "@/components/dialogs/EnquireDialog";
import { useMemo, useState } from "react";

export default function TripDetailPage() {
  const params = useParams<{ id: string }>();
  const all = trips as unknown as Trip[];
  const trip = useMemo(() => all.find((t) => t.id === params.id), [all, params.id]);
  const [openBook, setOpenBook] = useState(false);
  const [openEnq, setOpenEnq] = useState(false);

  if (!trip) return notFound();

  const also = all.filter((t) => t.id !== trip.id).slice(0, 3);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Typography color="text.primary">{trip.title}</Typography>
      </Breadcrumbs>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Image src={trip.images[0]} alt={trip.title} width={1200} height={800} style={{ width: "100%", height: "auto", borderRadius: 16, objectFit: "cover" }} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack gap={1}>
            <Typography variant="h4" fontWeight={800}>
              {trip.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {trip.destination} • {trip.durationDays} days
            </Typography>
            <Stack direction="row" gap={1} sx={{ my: 1 }}>
              {trip.tags.map((t) => (
                <Chip key={t} label={t} />
              ))}
            </Stack>
            <FormControlLabel
              control={<Switch />}
              label="Heritage focus"
              onChange={() => {
                // Placeholder: will tailor content (itinerary, highlights) when backend/data supports it
              }}
            />
            <Typography variant="h5">₹{trip.priceFrom.toLocaleString()}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} gap={1.25} sx={{ mt: 1 }}>
              <Button variant="contained" size="large" onClick={() => setOpenBook(true)}>
                Quick Book
              </Button>
              <Button variant="outlined" size="large" onClick={() => setOpenEnq(true)}>
                Enquire
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
          You might also like
        </Typography>
        <Grid container spacing={2}>
          {also.map((t) => (
            <Grid key={t.id} item xs={12} sm={6} md={4}>
              <TripCard trip={t} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <QuickBookDialog trip={trip} open={openBook} onClose={() => setOpenBook(false)} />
      <EnquireDialog trip={trip} open={openEnq} onClose={() => setOpenEnq(false)} />
    </Box>
  );
}

