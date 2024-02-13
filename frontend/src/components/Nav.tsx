import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      height="100px"
      fontSize="sm"
      alignItems="center"
      color="gray.600"
      p={5}
    >
      <Box>
        <Link to="/">LOGO</Link>
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <NavLinks />
      </Box>
      <Box display={{ base: "flex", lg: "none" }}>
        <SideDrawer />
      </Box>
    </Box>
  );
};

export default Nav;
