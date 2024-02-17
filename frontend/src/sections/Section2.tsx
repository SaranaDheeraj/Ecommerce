import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <Box>
      <Box
        display="flex"
        bg="orange.50"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box width={{ base: "100%", md: "50%" }}>
          <Image src="http://res.cloudinary.com/saranadheeraj/image/upload/v1708164345/ijtwxlw6acn4jzdllxcg.png" />
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="80%" color="gray.600" p={{ base: "20px", md: "0" }} m={5}>
            <Heading as="h2" fontSize="xl" fontWeight="700" mb={5}>
              #COLOROFTHEMONTH
            </Heading>
            <Text fontSize="md">
              Explore our featured color of the month and discover vibrant hues
              that will elevate your wardrobe.
            </Text>
            <Heading
              as="h2"
              fontSize="xl"
              fontWeight="bold"
              mt={5}
              letterSpacing="0.25px"
            >
              JUST $25!!!
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box
        minH="150px"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        className="offer"
        flexDirection={{ base: "column", md: "row" }}
        p={5}
      >
        <Box color="red.50" mb={{ base: 5, md: 0 }}>
          <Heading as="h2" fontSize="xl" fontWeight="800" textAlign="center">
            GRAB THIS LIMITED TIME OFFER
          </Heading>
        </Box>
        <Box className="order" fontWeight="200">
          <Button
            bg="gray.50"
            border="2px solid"
            borderColor="white"
            borderLeft="0"
            borderRadius={0}
            variant="ghost"
            _hover={{ bg: "transparent" }}
          >
            <Text mr={2} color="red.50">
              ORDER NOW
            </Text>{" "}
            <ArrowRightIcon color="red.50" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
