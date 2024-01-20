import { z } from "zod";
import { publicProcedure } from ".";
import { searchGourmets } from "../dao/external/searchGourmets";

const listGourmetInput = z.object({
  lat: z.number(),
  lng: z.number(),
  range: z.number(),
});
const listGourmet = publicProcedure
  .input(listGourmetInput)
  .query(async (opts) => {
    const { lat, lng, range } = opts.input;
    const params = {
      lat: lat.toString(),
      lng: lng.toString(),
      range: range.toString(),
    };
    const gourmets = await searchGourmets(params);
    return gourmets;
  });

export const gourmetRouter = {
  listGourmet,
};
