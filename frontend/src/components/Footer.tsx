import { Box, Button, Link, Spacer, Text } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        className="footer"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        bg="gray.600"
        px={{ base: "5", md: "150px" }}
        py="50px"
        alignItems="center"
        fontSize="sm"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 0, md: "75px" }}
          mb={{ base: "5", md: "0" }}
          color="blue.100"
        >
          <Box mb={{ base: "3", md: "0" }}>
            <Link href="/home" textAlign={{ base: "center", md: "left" }}>
              Home
            </Link>
            <Link href="/home" textAlign={{ base: "center", md: "left" }}>
              About Trendify
            </Link>
            <Link href="/home" textAlign={{ base: "center", md: "left" }}>
              My account
            </Link>
          </Box>
          <Box>
            <Link href="/home" textAlign={{ base: "center", md: "left" }}>
              Clothes
            </Link>
            <Link href="/home" textAlign={{ base: "center", md: "left" }}>
              Shoes
            </Link>
            <Link href="/home" textAlign={{ base: "center", md: "left" }}>
              Contact
            </Link>
          </Box>
        </Box>
        <Spacer />
        <Box display="flex" gap={3}>
          <Button borderRadius={0} p={0}>
            <FaFacebookSquare />
          </Button>
          <Button borderRadius={0} p={0}>
            <FaTwitterSquare />
          </Button>
          <Button borderRadius={0} p={0}>
            <FaInstagramSquare />
          </Button>
          <Button borderRadius={0} p={0}>
            <FaGoogle />
          </Button>
          <Button borderRadius={0} p={0}>
            <FaYoutube />
          </Button>
        </Box>
      </Box>
      <Box
        color="gray.600"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        fontSize="sm"
        m={7}
      >
        <Box p={{ base: "5", md: "5" }}>
          <Text textAlign="center">Copyright © 2024 Trendify</Text>
        </Box>
        <Box p={{ base: "5", md: "5" }}>
          <Text textAlign="center">Powered by Trendify</Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
