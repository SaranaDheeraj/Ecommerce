import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartItem } from "../recoil/atom";

const CartItem = ({ item }: any) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [items, setItems] = useRecoilState(cartItem);
  const token = localStorage.getItem("token");
  const toast = useToast();
  const incrementQuantity = async () => {
    if (quantity < 3) {
      try {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);

        const response = await axios.put(
          `http://localhost:3000/cart/${item.id}`,
          { quantity: newQuantity },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (e) {
        toast({
          position: "top-right",
          title: "Something went wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setQuantity(quantity - 1);
      }
    }
  };

  const decrementQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      try {
        const response = await axios.put(
          `http://localhost:3000/cart/${item.id}`,
          { quantity: newQuantity },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (e) {
        toast({
          position: "top-right",
          title: "Something went wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setQuantity(quantity + 1);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/cart/${item.id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        position: "top-right",
        title: response.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setItems((items) => items.filter((i) => i.id != item.id));
    } catch (e) {
      toast({
        position: "top-right",
        title: "Something went wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={2} mb={4} display="flex" alignItems="center" width="100%">
      <Image w="20%" maxH="65px" maxW="65px" src={item.image} />
      <Box w="80%" pl={3}>
        <Text mb={2}>{item.name}</Text>
        <Flex alignItems="center">
          <Button size="sm" p={0} onClick={decrementQuantity}>
            <MinusIcon />
          </Button>
          <Text maxH="20px" mx={2}>
            {quantity}
          </Text>
          <Button size="sm" p={0} m={0} onClick={incrementQuantity}>
            <AddIcon />
          </Button>
          <Spacer />
          <Text>
            ({item.price}$ x {quantity})
          </Text>
          <Spacer />
          <Text fontWeight="bold" ml={2} mr={4}>
            - {item.price * quantity}$
          </Text>
          <CloseButton onClick={handleDelete} />
        </Flex>
      </Box>
    </Box>
  );
};

export default CartItem;
