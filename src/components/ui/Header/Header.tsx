import { pagesPath } from "@/utils/$path";
import { Box, HStack } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IoIosSearch } from "react-icons/io";
import { PiSpinnerFill } from "react-icons/pi";
import { NavigationTab } from "./NavigationTab";

const tabPath = {
  search: pagesPath.gourmets.search.$url().pathname,
  roulette: pagesPath.roulette.$url().pathname,
} as const;

type TabPath = (typeof tabPath)[keyof typeof tabPath];

export const Header = () => {
  const currentPathname = usePathname();
  const router = useRouter();

  const isActive = useCallback(
    (pathname: TabPath) => {
      return pathname === currentPathname;
    },
    [currentPathname]
  );

  const onTabClick = useCallback(
    (pathname: TabPath) => {
      router.push(pathname);
    },
    [router]
  );

  return (
    <Box as="header" p={2} borderBottomWidth={1} shadow={"sm"}>
      <HStack maxW="container.xl" mx="auto" justifyContent={"space-between"}>
        <Box as="h1" fontWeight={"bold"}>
          GOURMET ROULETTE
        </Box>

        <HStack alignItems={"center"} spacing={2}>
          <NavigationTab
            isActive={isActive(tabPath.roulette)}
            name={"ルーレット"}
            Icon={PiSpinnerFill}
            onTabClick={() => onTabClick(tabPath.roulette)}
          />

          <NavigationTab
            isActive={isActive(tabPath.search)}
            name={"検索"}
            Icon={IoIosSearch}
            onTabClick={() => onTabClick(tabPath.search)}
          />
        </HStack>
      </HStack>
    </Box>
  );
};
