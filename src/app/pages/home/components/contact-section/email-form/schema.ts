import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .min(1, "Email is required")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address",
    ),
});

export type EmailFormProps = z.infer<typeof emailSchema>;
