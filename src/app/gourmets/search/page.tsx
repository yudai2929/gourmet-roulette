"use client";
import { trpc } from "@/utils/trpc";
import { useCallback, useMemo } from "react";
import { useGeolocation } from "react-use";
import { SearchForm } from "./SearchForm";
import { Box, Divider, VStack, Text } from "@chakra-ui/react";
import { GourmetCard } from "./GourmetCard";
import { useRouletteShop } from "@/hooks/domain/rouletteShot/hooks";
const Search = () => {
  const geo = useGeolocation();

  const { data: gourmets } = trpc.listGourmet.useQuery({
    lat: 35.6811673,
    lng: 139.7670516,
    range: 3,
  });

  const { value, getRouletteShopById, addRouletteShop, deleteRouletteShop } =
    useRouletteShop();

  const handleClickAdd = (shopId: string) => {
    const shop = gourmets?.find((g) => g.id === shopId);
    if (!shop) {
      return;
    }
    addRouletteShop({ ...shop, logoImage: shop.photo.pc.l });
  };

  const handleClickRemove = (shopId: string) => {
    deleteRouletteShop(shopId);
  };

  const isActive = useCallback(
    (shopId: string) => {
      return value.some((v) => v.id === shopId);
    },
    [value]
  );

  return (
    <Box as="main" p={4}>
      <SearchForm />
      <Divider my={4} />
      <Box pb={2}>
        <Text fontWeight={"bold"}>検索結果：{gourmets?.length}</Text>
      </Box>
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
            onClickAdd={() => handleClickAdd(gourmet.id)}
            onClickRemove={() => handleClickRemove(gourmet.id)}
            isActive={isActive(gourmet.id)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Search;
