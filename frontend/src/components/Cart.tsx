import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useRecoilValueLoadable } from "recoil";
import { userCartItems } from "../recoil/atom";

const Cart = ({ isOpen, onOpen, onClose, btnRef }) => {
  const loaded = useRecoilValueLoadable(userCartItems);

  let items = [];
  if (loaded.state === "hasValue") {
    items = loaded.contents;
  }
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
            <p key={i}>
              {item.name}-{item.quantity}
            </p>
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
