import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { cartItem } from "../recoil/atom";
import CartItem from "./CartItem";

const Cart = ({ isOpen, onOpen, onClose, btnRef }) => {
  const items = useRecoilValue(cartItem);

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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
