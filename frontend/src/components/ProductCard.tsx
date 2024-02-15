import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import StarRating from "./StarRating";
import { Product as ProductInterface } from "../interface";

const ProductCard = ({ product }: { product: ProductInterface }) => {
  return (
    <Card
      maxW="300px"
      minH="500px"
      color="gray.700"
      cursor="pointer"
      _hover={{ boxShadow: "2xl" }}
    >
      <CardBody>
        <Center>
          <Image
            maxH="250px"
            minW="250px"
            borderRadius="lg"
            src={product.image}
          />
        </Center>
        <Stack mt="6" spacing="2" textAlign="center">
          <Text>Shoes</Text>
          <Heading as="h3" fontSize="xl">
            {product.name}
          </Heading>
          <Box mx="auto">
            <StarRating rating={product.rating} />
          </Box>
          <Box mb={3}>
            <Text mr={2} as="span" textDecoration="line-through">
              {product.Discount}$
            </Text>
            <Text fontWeight="bold" as="span">
              {product.price}$
            </Text>
          </Box>
          <Button
            colorScheme="teal"
            _hover={{ color: "white", bg: "teal.400" }}
          >
            ADD TO CART!
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
