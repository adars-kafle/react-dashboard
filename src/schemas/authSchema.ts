import { z } from "zod";
import { regex } from "../constants/regex";

const errorMessages = {
  email: {
    required: "Email is a required field!",
    validity: "Please enter a valid email address!",
  },
  password: {
    required: "Password is a required field!",
    charLimit: "Password must be of at least 8 characters.",
    validity:
      "Password should contain at least an uppercase letter, a lowercase letter, a special character, and a number!",
  },
};

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, errorMessages.email.required)
    .email(errorMessages.email.validity),
  password: z
    .string()
    .min(1, errorMessages.password.required)
    .regex(regex.password, errorMessages.password.validity),
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
