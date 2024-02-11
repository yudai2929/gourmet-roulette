"use client";

import { useRouletteShop } from "@/hooks/domain/rouletteShot/hooks";

const Roulette = () => {
  const {
    value: rouletteShopList,
    getRouletteShopById,
    addRouletteShop,
    deleteRouletteShop,
    resetRouletteShop,
  } = useRouletteShop();

  return <div>Roulette</div>;
};

export default Roulette;
