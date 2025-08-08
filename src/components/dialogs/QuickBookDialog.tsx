"use client";
import { Dialog, DialogContent, DialogTitle, Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trip } from "../TripCard";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  travellers: z.number().min(1),
  startDate: z.string().optional(),
});

type FormValues = z.infer<typeof Schema>;

export default function QuickBookDialog({
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
  } = useForm<FormValues>({ resolver: zodResolver(Schema), defaultValues: { travellers: 2 } });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("QuickBook", { tripId: trip.id, ...data });
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Quick Book — {trip.title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2} sx={{ mt: 1 }}>
            <TextField label="Full name" {...register("name")} error={!!errors.name} helperText={errors.name?.message} />
            <TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
            <TextField label="Phone" {...register("phone")} error={!!errors.phone} helperText={errors.phone?.message} />
            <TextField type="number" label="Travellers" {...register("travellers", { valueAsNumber: true })} />
            <TextField label="Preferred start date (optional)" {...register("startDate")} />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? "Booking…" : "Confirm Booking"}
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

