import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { cartItem, total } from "../recoil/atom";
import CartItem from "./CartItem";

const Cart = ({ isOpen, onOpen, onClose, btnRef }) => {
  const items = useRecoilValue(cartItem);
  const totalPrice = useRecoilValue(total);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      size="lg"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Items in My Cart!</DrawerHeader>

        <DrawerBody p={{ base: "0", md: "2" }}>
          <Flex p={2} color="gray.600">
            <Text>ITEMS</Text>
          </Flex>
          {items.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
          <Flex mx={5} mt={5}>
            <Heading as="h3" fontSize="2xl">
              Total
            </Heading>
            <Text as="span" ml="auto" fontWeight="bold" fontSize="xl" mr="97px">
              - {totalPrice}$
            </Text>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            close
          </Button>
          <Button colorScheme="blue">Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
