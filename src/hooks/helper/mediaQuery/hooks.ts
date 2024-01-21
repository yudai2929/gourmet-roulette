import { useMediaQuery } from "@chakra-ui/react";

const SP_WIDTH = 767;
export const useIsSP = () => {
  const [isSp] = useMediaQuery("(max-width: " + SP_WIDTH + "px)");
  return {
    isSp,
  };
};
