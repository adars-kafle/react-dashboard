import { z } from "zod";

export const supplierSchema = z.object({
  name: z.string().min(1, "Supplier name is required!"),
  address: z.string().min(1, "Address is required!"),
  email: z
    .string()
    .min(1, "Email is a required field!")
    .email("Please enter a valid email!"),
  phone: z.string().min(10, "Phone number should at least be 10 digits!"),
});
