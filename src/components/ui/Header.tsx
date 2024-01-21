import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { PiSpinnerFill } from "react-icons/pi";
export const Header = () => {
  return (
    <Box as="header" p={2} borderBottomWidth={1} shadow={"sm"}>
      <HStack maxW="container.xl" mx="auto" justifyContent={"space-between"}>
        <Box as="h1" fontWeight={"bold"}>
          GOURMET ROULETTE
        </Box>

        <HStack alignItems={"center"} spacing={2}>
          <VStack spacing={0}>
            <PiSpinnerFill size={20} />
            <Text fontSize={"x-small"} fontWeight={"bold"}>
              ルーレット
            </Text>
          </VStack>

          <VStack spacing={0}>
            <IoIosSearch size={20} />
            <Text fontSize={"x-small"} fontWeight={"bold"}>
              検索
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};
