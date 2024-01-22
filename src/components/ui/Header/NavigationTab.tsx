import { VStack, Text } from "@chakra-ui/react";
import { IconBaseProps } from "react-icons/lib";

type NavigationTabProps = {
  isActive: boolean;
  name: string;
  Icon: (props: IconBaseProps) => JSX.Element;
  onTabClick?: () => void;
};

export const NavigationTab = (props: NavigationTabProps) => {
  return (
    <VStack spacing={0} onClick={props.onTabClick}>
      <props.Icon size={20} />
      <Text fontSize={"x-small"} fontWeight={"bold"}>
        {props.name}
      </Text>
    </VStack>
  );
};
