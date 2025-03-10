import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string(),
  // CI: z.string().nullable(),
  MODE: z.enum(["production", "development", "test"]),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
});

export const env = envSchema.parse(import.meta.env);
