import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  location: z.string().min(1),
  venue: z.string().optional(),
  date: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  category: z.enum(["planner", "performer", "crew"]),
  details: z.object({}),
});