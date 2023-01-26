import { useQuery } from "react-query";
import axios from "axios";
import { z } from "Zod";

const starshipSchema = z
  .object({
    name: z.string(),
    model: z.string(),
    starship_class: z.string(),
    manufacturer: z.string(),
    cost_in_credits: z.string(),
    length: z.string(),
    crew: z.string(),
    passengers: z.string(),
    max_atmosphering_speed: z.string(),
    hyperdrive_rating: z.string(),
    MGLT: z.string(),
    cargo_capacity: z.string(),
    consumables: z.string(),
  })
  .passthrough();
export type Starship = z.infer<typeof starshipSchema>;

const dataSchema = z
  .object({
    previous: z.nullable(z.string().url()),
    next: z.nullable(z.string().url()),
    results: z.array(starshipSchema),
  })
  .passthrough();
export type StarshipsData = z.infer<typeof dataSchema>;

const responseSchema = z
  .object({
    data: dataSchema,
  })
  .passthrough();

function getStarships(page: number) {
  return axios
    .get("https://swapi.dev/api/starships/", {
      params: {
        page: page,
      },
    })
    .then((res) => responseSchema.parse(res));
}

function useStarships(page: number) {
  return useQuery(
    ["starships", page],
    () => {
      return getStarships(page);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 500000,
    }
  );
}

export default useStarships;
