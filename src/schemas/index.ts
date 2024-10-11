import { z } from "zod";

export const schemaResponse = z.object({
    count: z.number().positive(),
    next: z.string().nullable(),
    previous: z.string().nullable(),
});
