import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (value) => {
        // Iranian mobile number patterns
        const patterns = [
          /^09\d{9}$/, // 09xxxxxxxxx
          /^\+989\d{9}$/, // +989xxxxxxxxx
          /^00989\d{9}$/, // 00989xxxxxxxxx
        ];
        return patterns.some((pattern) => pattern.test(value));
      },
      {
        message:
          "Please enter a valid Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)",
      }
    ),
});

export type TLoginFormData = z.infer<typeof loginSchema>;
