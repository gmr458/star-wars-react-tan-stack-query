import { z } from "zod";

import { schemaResponse } from "@/schemas";

export const schemaPlanet = z.object({
    name: z.string(),
    rotation_period: z.string(),
    orbital_period: z.string(),
    diameter: z.string(),
    climate: z.string(),
    gravity: z.string(),
    terrain: z.string(),
    surface_water: z.string(),
    population: z.string(),
    residents: z.string().array(),
    films: z.string().array(),
    created: z.string(),
    edited: z.string(),
    url: z.string(),
});
export type Planet = z.infer<typeof schemaPlanet>;

export const schemaResponsePlanets = schemaResponse.extend({
    results: schemaPlanet.array(),
});
export type ResponsePlanets = z.infer<typeof schemaResponsePlanets>;
