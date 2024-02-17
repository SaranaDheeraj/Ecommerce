import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { cartItems } from "../recoil/atom";

const Cart = ({ isOpen, onOpen, onClose, btnRef }) => {
  const items = useRecoilValue(cartItems);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      size="sm"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          {items.map((item, i) => (
            <p key={i}>{item.name}</p>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
