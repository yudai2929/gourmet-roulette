import { config } from "@/config";
import { GetGourmetsResponse } from "@/interface/gourmets";
import { searchGourmets } from "@/server/external/searchGourmets";
import { NextRequest } from "next/server";

// TODO: ミドルウェアを使って、クエリパラメータを取得する

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  const shops = await searchGourmets({
    lat: searchParams.get("lat") ?? "",
    lng: searchParams.get("lng") ?? "",
    range: searchParams.get("range") ?? "",
  });

  const res: GetGourmetsResponse[] = shops.map((shop) => ({
    id: shop.id,
    name: shop.name,
    logo_image: shop.logo_image,
  }));

  return Response.json(res);
};
