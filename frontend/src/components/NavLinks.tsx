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
} from "@chakra-ui/react";

import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: 7, lg: 10 }}
      alignItems={{ base: "none", lg: "center" }}
      p={{ base: 5, lg: 0 }}
    >
      <Box>
        <NavLink to="/">HOME</NavLink>
      </Box>
      <Box>
        <NavLink to="/products">ALL PRODUCTS</NavLink>
      </Box>
      <Box>
        <NavLink to="/about">ABOUT</NavLink>
      </Box>
      <Box>
        <NavLink to="/contact">CONTACT</NavLink>
      </Box>
      <Menu>
        <MenuButton as="a">
          ACCOUNT <ChevronDownIcon width="20px" height="25px" />
        </MenuButton>
        <MenuList fontSize="xs">
          <MenuGroup>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Cart</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Box
        display="flex"
        gap={3}
        flexDirection={{ base: "column", md: "row" }}
        // justifyContent="center"
        alignItems="flex-start"
      >
        <Button variant="ghost" color="gray.600">
          <Box display="flex" gap={2} alignItems="center">
            <Text>CART</Text>
            <CiShoppingCart size={25} color="red" />
          </Box>
        </Button>
        <Button bg="red.300" color="gray.600" _hover={{ bg: "red.200" }}>
          <NavLink to="/signup">
            <Text>SIGN UP</Text>
          </NavLink>
        </Button>
        <Button bg="green.300" color="gray.600" _hover={{ bg: "green.200" }}>
          <NavLink to="/signin">
            <Text>SIGN IN</Text>
          </NavLink>
        </Button>
      </Box>
    </Box>
  );
};

export default NavLinks;
