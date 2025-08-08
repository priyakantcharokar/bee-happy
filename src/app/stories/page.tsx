"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  { id: "women-kutch", title: "Embroidery Circles in Kutch", excerpt: "A day with artisans whose craft holds generations.", image: "/images/unspalsh_4.avif" },
  { id: "mangrove-dawn", title: "Mangrove Dawn in Sunderbans", excerpt: "When the water breathes, the forest listens.", image: "/images/unspalsh_6.avif" },
  { id: "spiti-sky", title: "Thin Air, Wide Skies", excerpt: "Himalayan silence that hums with life.", image: "/images/unspalsh_1.avif" },
];

export default function StoriesPage() {
  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Typography variant="h4" fontWeight={800}>Stories</Typography>
      <Grid container spacing={2}>
        {stories.map((s, i) => (
          <Grid item xs={12} md={4} key={s.id}>
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
                <Image src={s.image} alt={s.title} width={1200} height={800} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                <div style={{ padding: 16 }}>
                  <Typography variant="h6" fontWeight={800}>{s.title}</Typography>
                  <Typography color="text.secondary">{s.excerpt}</Typography>
                </div>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

