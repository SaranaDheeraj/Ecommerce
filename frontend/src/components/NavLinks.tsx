import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signedInState } from "../recoil/atom";

const NavLinks = ({ close }) => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useRecoilState(signedInState);
  const logOut = () => {
    localStorage.removeItem("token");
    setSignedIn(false);
    close();
    navigate("/");
  };
  const signIn = () => {
    close();
  };
  const signUp = () => {
    close();
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
      <Menu>
        <MenuButton as="a">
          ACCOUNT <ChevronDownIcon width="20px" height="25px" />
        </MenuButton>
        <MenuList fontSize="xs">
          <MenuGroup>
            <MenuItem onClick={close}>My Account</MenuItem>
            <MenuItem onClick={close}>Cart</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
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
          onClick={close}
        >
          <Box display="flex" gap={2} alignItems="center">
            <Text>CART</Text>
            <CiShoppingCart size={25} color="red" />
          </Box>
        </Button>
        {!signedIn && (
          <Button bg="red.300" _hover={{ bg: "red.200" }} onClick={signUp}>
            <NavLink to="/signup">
              <Text className="signup">SIGN UP</Text>
            </NavLink>
          </Button>
        )}
        {!signedIn && (
          <Button bg="green.300" _hover={{ bg: "green.200" }} onClick={signIn}>
            <NavLink to="/signin">
              <Text className="signin">SIGN IN</Text>
            </NavLink>
          </Button>
        )}
        {signedIn && (
          <Button bg="red.300" _hover={{ bg: "red.200" }} onClick={logOut}>
            <Text className="signin">LOG OUT</Text>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NavLinks;
