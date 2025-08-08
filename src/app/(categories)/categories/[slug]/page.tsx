"use client";
import { useParams } from "next/navigation";
import { Box, Grid, Typography } from "@mui/material";
import trips from "@/data/trips.json";
import TripCard, { Trip } from "@/components/TripCard";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const all = trips as unknown as Trip[];
  const filtered = all.filter((t) => t.tags.map((x) => x.toLowerCase()).includes(slug.replace("-", " ")));

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h4" fontWeight={800}>{slug.replace("-", " ").toUpperCase()}</Typography>
      <Grid container spacing={2}>
        {filtered.map((t) => (
          <Grid key={t.id} item xs={12} sm={6} md={4}>
            <TripCard trip={t} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

