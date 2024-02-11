import { LOCAL_STORAGE_KEY } from "@/constants/localStorageKey";
import { Shop } from "@/entities/shop";
import { useLocalStorage } from "@/hooks/helper/useLocalStorage";

export const useRouletteShop = () => {
  const [value = [], setValue] = useLocalStorage<Shop[]>(
    LOCAL_STORAGE_KEY.rouletteShop,
    []
  );

  const getRouletteShopById = (id: string) => {
    return value.find((v) => v.id === id);
  };

  const addRouletteShop = (shop: Shop) => {
    const getValue = getRouletteShopById(shop.id);
    if (getValue) {
      return;
    }
    const newValue = [...value, shop];
    setValue(newValue);
  };

  const deleteRouletteShop = (id: string) => {
    const newValue = value.filter((v) => v.id !== id);
    setValue(newValue);
  };

  const resetRouletteShop = () => {
    setValue([]);
  };

  return {
    value,
    getRouletteShopById,
    addRouletteShop,
    deleteRouletteShop,
    resetRouletteShop,
  };
};
