import { VStack, Text, Image, Divider, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
type Props = {
  name: string;
  url: string;
  photoUrl: string;
  address: string;
  genre: {
    name: string;
    catch: string;
  };
  lat: number;
  lng: number;
};

// TODO: ホットペッパーのURLを開く。GoogleMapを開く。
export const GourmetCard = (props: Props) => {
  return (
    <VStack alignItems={"left"} borderWidth={1} p={2} w={"full"} shadow={"md"}>
      <Box>
        <HStack
          justifyContent={"space-between"}
          w={"full"}
          alignItems={"start"}
        >
          <Text fontWeight={"bold"}>{props.name}</Text>
          <IoMdAddCircleOutline size={24} />
        </HStack>

        <Text fontSize={"sm"} color={"gray"}>
          {props.genre.name} | {props.genre.catch}
        </Text>
      </Box>

      <Image src={props.photoUrl} alt={props.name} w={"full"} h={240} />

      <Box>
        <Text fontSize={"sm"}>{props.address}</Text>
        <HStack spacing={1} color={"blue.500"} fontSize={"sm"}>
          <FiMapPin />
          <Text>地図で見る</Text>
        </HStack>
      </Box>

      <Divider />

      <VStack>
        <Text fontSize={"sm"} color={"blue.500"} fontWeight={"bold"}>
          ホットペッペーで詳しく見る
        </Text>
      </VStack>
    </VStack>
  );
};
