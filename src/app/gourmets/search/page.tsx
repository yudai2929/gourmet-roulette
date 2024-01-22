"use client";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";
import { useGeolocation } from "react-use";
import { SearchForm } from "./SearchForm";
import { Box, Divider, VStack } from "@chakra-ui/react";
import { GourmetCard } from "./GourmetCard";
const Search = () => {
  const geo = useGeolocation();

  const grommetParams = useMemo(() => {
    if (geo.latitude && geo.longitude) {
      return {
        lat: geo.latitude,
        lng: geo.longitude,
        range: 3,
      };
    }
  }, [geo.latitude, geo.longitude]);

  const { data: gourmets } = trpc.listGourmet.useQuery({
    lat: 35.6811673,
    lng: 139.7670516,
    range: 3,
  });

  return (
    <Box as="main" p={4}>
      <SearchForm />
      <Divider my={4} />
      <VStack>
        {gourmets?.map((gourmet) => (
          <GourmetCard
            key={gourmet.id}
            name={gourmet.name}
            url={gourmet.urls.pc}
            photoUrl={gourmet.photo.pc.l}
            address={gourmet.address}
            genre={gourmet.genre}
            lat={gourmet.lat}
            lng={gourmet.lng}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Search;
