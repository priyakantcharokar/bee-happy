"use client";
import { Dialog, DialogContent, DialogTitle, Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trip } from "../TripCard";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof Schema>;

export default function EnquireDialog({
  trip,
  open,
  onClose,
}: {
  trip: Trip;
  open: boolean;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log("Enquiry", { tripId: trip.id, ...data });
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Enquire — {trip.title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2} sx={{ mt: 1 }}>
            <TextField label="Full name" {...register("name")} error={!!errors.name} helperText={errors.name?.message} />
            <TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
            <TextField multiline minRows={4} label="Message" {...register("message")} error={!!errors.message} helperText={errors.message?.message} />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Enquiry"}
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

