"use client";
import { trpc } from "@/utils/trpc";
import { useEffect } from "react";
import { useGeolocation } from "react-use";
const Search = () => {
  const gourmets = trpc.listGourmet.useQuery({
    lat: 35.6811673,
    lng: 139.7670516,
    range: 3,
  });

  useEffect(() => {
    console.log(gourmets.data);
  }, [gourmets.data]);

  useEffect;
  return <main>hello world </main>;
};

export default Search;
