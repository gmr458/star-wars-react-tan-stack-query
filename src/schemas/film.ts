import { z } from "zod";

import { schemaResponse } from "@/schemas";

export const schemaFilm = z.object({
    title: z.string(),
    episode_id: z.number(),
    opening_crawl: z.string(),
    director: z.string(),
    producer: z.string(),
    release_date: z.string(),
    characters: z.array(z.string()),
    planets: z.array(z.string()),
    starships: z.array(z.string()),
    vehicles: z.array(z.string()),
    species: z.array(z.string()),
    created: z.string(),
    edited: z.string(),
    url: z.string(),
});
export type Film = z.infer<typeof schemaFilm>;

export const schemaResponseFilms = schemaResponse.extend({
    results: schemaFilm.array(),
});
export type ResponseFilms = z.infer<typeof schemaResponseFilms>;
