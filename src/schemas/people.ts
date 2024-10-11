import { z } from "zod";

import { schemaResponse } from "@/schemas";

export const schemaCharacter = z.object({
    name: z.string(),
    height: z.string(),
    mass: z.string(),
    hair_color: z.string(),
    skin_color: z.string(),
    eye_color: z.string(),
    birth_year: z.string(),
    gender: z.string(),
    homeworld: z.string(),
    films: z.array(z.string()),
    species: z.array(z.string()),
    vehicles: z.array(z.string()),
    starships: z.array(z.string()),
    created: z.string(),
    edited: z.string(),
    url: z.string(),
});
export type Character = z.infer<typeof schemaCharacter>;

export const schemaResponsePeople = schemaResponse.extend({
    results: schemaCharacter.array(),
});
export type ResponsePeople = z.infer<typeof schemaResponsePeople>;
