import {
  Box,
  Button,
  Text,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signedInState } from "../recoil/atom";
import React from "react";
import Cart from "./Cart";

const NavLinks = ({ close }) => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useRecoilState(signedInState);
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleCart = () => {
    if (!signedIn) {
      if (breakpoint == "sm" || breakpoint == "md") {
        close();
      }
      toast({
        position: "top-right",
        title: "Sign In to Access Cart!",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return navigate("/signin");
    }
    onOpen();
  };

  return (
    <Box
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: 7, lg: 10 }}
      alignItems={{ base: "none", lg: "center" }}
      p={{ base: 5, lg: 0 }}
    >
      <Box>
        <NavLink to="/" onClick={close}>
          HOME
        </NavLink>
      </Box>
      <Box>
        <NavLink to="/products" onClick={close}>
          ALL PRODUCTS
        </NavLink>
      </Box>
      <Box>
        <NavLink to="/about" onClick={close}>
          ABOUT
        </NavLink>
      </Box>
      <Box>
        <NavLink to="/contact" onClick={close}>
          CONTACT
        </NavLink>
      </Box>
      <Box>
        <NavLink to="/account" onClick={close}>
          ACCOUNT
        </NavLink>
      </Box>

      <Box
        display="flex"
        gap={3}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
      >
        <Button
          className="cart"
          variant="ghost"
          color="gray.600"
          onClick={handleCart}
        >
          <Box display="flex" gap={2} alignItems="center">
            <Text>CART</Text>
            <CiShoppingCart size={25} color="red" />
          </Box>
        </Button>
        <Cart
          onOpen={onOpen}
          onClose={onClose}
          isOpen={isOpen}
          btnRef={btnRef}
        />

        {!signedIn && (
          <Button bg="red.300" _hover={{ bg: "red.200" }} onClick={close}>
            <NavLink to="/signup">
              <Text className="signup">SIGN UP</Text>
            </NavLink>
          </Button>
        )}
        {!signedIn && (
          <Button bg="green.300" _hover={{ bg: "green.200" }} onClick={close}>
            <NavLink to="/signin">
              <Text className="signin">SIGN IN</Text>
            </NavLink>
          </Button>
        )}
        {signedIn && (
          <Button
            bg="red.300"
            _hover={{ bg: "red.200" }}
            onClick={() => {
              localStorage.removeItem("token");
              setSignedIn(false);
              if (breakpoint == "sm" || breakpoint == "md") {
                close();
              }
              toast({
                position: "top-right",
                title: "Logged Out Successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              navigate("/");
            }}
          >
            <Text className="signin">LOG OUT</Text>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NavLinks;
