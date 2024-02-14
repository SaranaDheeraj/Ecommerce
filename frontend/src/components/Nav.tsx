import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      bg="gray.50"
      p={5}
    >
      <Box width="150px">
        <Link to="/">
          <Image src="/logo.png" />
        </Link>
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
