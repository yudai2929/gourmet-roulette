"use client";
import { useFetchGourmets } from "@/hooks/domain/useFetchGourmets";
import { useEffect } from "react";
import { useGeolocation } from "react-use";
const Search = () => {
  const query = {
    lat: 35.0714438263,
    lng: 135.7121833807,
    range: 5,
  };

  const { data, error } = useFetchGourmets(query);

  const { loading, longitude, latitude, error: geoError } = useGeolocation();

  useEffect(() => {
    console.log({ loading, longitude, latitude, geoError });
  }, [loading, longitude, latitude, geoError]);

  return <main>hello world </main>;
};

export default Search;
