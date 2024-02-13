import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
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
      <Box>
        <NavLink to="/cart">
          <Box display="flex" gap={2}>
            <Text>CART</Text>
            <CiShoppingCart size={25} color="red" />
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default NavLinks;
