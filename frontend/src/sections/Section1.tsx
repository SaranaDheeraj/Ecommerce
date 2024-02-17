import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

const Section1 = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      bg="gray.50"
    >
      <Box p="50px" width={{ base: "100%", md: "60%" }}>
        <Heading
          as="h1"
          size={{ base: "2xl", sm: "3xl" }}
          fontWeight="800"
          color="gray.700"
        >
          YOUR STYLE,
          <br />
          YOUR SIGNATURE
        </Heading>
        <Text color="gray.700" my={7}>
          Step into style with our curated collection of personalized fashion
          and footwear, tailored just for you.
        </Text>

        <Button
          bg="gray.50"
          border="2px solid"
          borderColor="gray.700"
          borderLeft="0"
          borderRadius={0}
          mt={7}
        >
          <Text mr={2}>EXPLORE STORE</Text> <ArrowRightIcon />
        </Button>
      </Box>
      <Box>
        <Image src="http://res.cloudinary.com/saranadheeraj/image/upload/v1708164299/bbguqf016npfqi0ve484.png" />
      </Box>
    </Box>
  );
};

export default Section1;
