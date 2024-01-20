import { config } from "@/config";
import { GetGourmetsQuery, GetGourmetsResponse } from "@/interface/gourmets";
import useSWR from "swr";

export const useFetchGourmets = (query: GetGourmetsQuery) => {
  const url = `${config.apiUrl}/gourmets?lat=${query.lat}&lng=${query.lng}&range=${query.range}`;
  return useSWR<GetGourmetsResponse[]>(url, fetcher);
};

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
};
