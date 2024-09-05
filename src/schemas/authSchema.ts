import { z } from "zod";
import { regex } from "../constants/regex";
import { errorMessages } from "../constants/errorMessages";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, errorMessages.email.required)
    .email(errorMessages.email.validity),
  password: z.string().min(1, errorMessages.password.required),
});

export const signupSchema = z.object({
  name: z.string().min(1, "Name is a required field!"),
  email: z
    .string()
    .min(1, errorMessages.email.required)
    .email(errorMessages.email.validity),
  password: z
    .string()
    .min(1, errorMessages.password.required)
    .regex(regex.password, errorMessages.password.validity),
});
