"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Chip, Divider, FormControlLabel, Grid, Stack, Switch, Typography } from "@mui/material";
import TripCard, { Trip } from "@/components/TripCard";
import trips from "@/data/trips.json";

export default function ExplorePage() {
  const params = useSearchParams();
  const q = params.get("q")?.toLowerCase() ?? "";
  const heritage = params.get("heritage") === "1";

  const data = useMemo(() => {
    const all = (trips as unknown as Trip[]).filter((t) => (heritage ? t.tags.map((x) => x.toLowerCase()).includes("heritage") : true));
    if (!q) return all;
    return all.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q) ||
        t.tags?.some((x) => x.toLowerCase().includes(q))
    );
  }, [q, heritage]);

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h4" fontWeight={800}>Explore trips</Typography>
      <Stack direction="row" gap={1} flexWrap="wrap" alignItems="center">
        {["Mountains", "Oceans", "Farms", "Voluntourism", "Weekend", "Fixed Departure"].map(
          (tag) => (
            <Chip key={tag} label={tag} clickable component="a" href={`/explore?q=${encodeURIComponent(tag)}`} />
          )
        )}
        <FormControlLabel
          control={<Switch checked={heritage} />}
          label="Heritage"
          onChange={() => {
            const next = new URLSearchParams(params.toString());
            if (heritage) next.delete("heritage"); else next.set("heritage", "1");
            window.location.href = `/explore?${next.toString()}`;
          }}
        />
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Grid container spacing={2}>
        {data.map((t) => (
          <Grid key={t.id} item xs={12} sm={6} md={4}>
            <TripCard trip={t} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

