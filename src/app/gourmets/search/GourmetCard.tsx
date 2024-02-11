import { generateMapUrl } from "@/utils/generateMapUrl";
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
  isActive: boolean;
  onClickAdd: () => void;
  onClickRemove: () => void;
};

export const GourmetCard = (props: Props) => {
  const handleClickDetail = () => {
    window.open(props.url, "_blank");
  };
  const handleClickMap = () => {
    window.open(generateMapUrl(props.lat, props.lng), "_blank");
  };

  const handleClickAction = () => {
    if (props.isActive) {
      props.onClickRemove();
    } else {
      props.onClickAdd();
    }
  };

  return (
    <VStack
      alignItems={"left"}
      borderWidth={1}
      p={2}
      w={"full"}
      borderRadius={"md"}
    >
      <Box>
        <HStack
          justifyContent={"space-between"}
          w={"full"}
          alignItems={"start"}
        >
          <Text fontWeight={"bold"}>{props.name}</Text>
          <IoMdAddCircleOutline
            size={24}
            onClick={handleClickAction}
            color={props.isActive ? "#3182ce" : "gray"}
          />
        </HStack>

        <Text fontSize={"sm"} color={"gray"}>
          {props.genre.name} | {props.genre.catch}
        </Text>
      </Box>

      <Image src={props.photoUrl} alt={props.name} w={"full"} h={240} />

      <Box>
        <Text fontSize={"sm"}>{props.address}</Text>
        <HStack
          spacing={1}
          color={"blue.500"}
          fontSize={"sm"}
          as="button"
          onClick={handleClickMap}
        >
          <FiMapPin />
          <Text>マップで見る</Text>
        </HStack>
      </Box>

      <Divider />

      <VStack as="button" w={"full"} onClick={handleClickDetail}>
        <Text fontSize={"sm"} color={"blue.500"} fontWeight={"bold"}>
          ホットペッペーで詳しく見る
        </Text>
      </VStack>
    </VStack>
  );
};
