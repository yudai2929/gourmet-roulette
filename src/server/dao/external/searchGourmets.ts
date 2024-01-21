import { config } from "@/config";

type SearchGrommetsParams = {
  lat: string;
  lng: string;
  range: string;
};

type SearchGrommetsResPonse = {
  results: {
    api_version: string;
    results_available?: number;
    results_returned?: string;
    results_start?: number;
    shop?: ShopResponse[];
    error?: {
      message: string;
      code: number;
    };
  };
};

type ShopResponse = {
  id: string;
  name: string;
  logo_image: string;
  access: string;
  address: string;
  open: string;
  close: string;
  budget: {
    average: string;
  };
  urls: {
    pc: string;
  };
  photo: {
    mobile: {
      l: string;
      s: string;
    };
    pc: {
      l: string;
      m: string;
      s: string;
    };
  };
  genre: {
    name: string;
    catch: string;
    code: string;
  };
  lat: number;
  lng: number;
};

export const searchGourmets = async (
  params: SearchGrommetsParams
): Promise<ShopResponse[]> => {
  const key = config.recruitApiKye;
  const format = "json";
  const query = new URLSearchParams({ ...params, key, format });
  const url = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const res = await fetch(`${url}?${query.toString()}`);
  const json = (await res.json()) as SearchGrommetsResPonse;
  if (json.results.error) {
    throw new Error(json.results.error.message);
  }
  return json.results.shop ?? [];
};
