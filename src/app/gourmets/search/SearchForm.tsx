import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React from "react";

export const SearchForm = () => {
  return (
    <VStack>
      <FormControl>
        <FormLabel>キーワード</FormLabel>
        <Input placeholder="キーワードを入力" />
      </FormControl>
      <FormControl>
        <FormLabel>カテゴリ</FormLabel>
        <Select placeholder="カテゴリを選択">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>距離</FormLabel>
        <Select placeholder="距離を選択">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>
      <Button colorScheme="blue" w="full">
        検索
      </Button>
    </VStack>
  );
};
