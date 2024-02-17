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
  useToast,
} from "@chakra-ui/react";
import StarRating from "./StarRating";
import { Product as ProductInterface } from "../interface";
import { signedInState } from "../recoil/atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ product }: { product: ProductInterface }) => {
  const navigate = useNavigate();
  const signedIn = useRecoilValue(signedInState);
  const toast = useToast();

  const addToCart = async () => {
    if (!signedIn) {
      toast({
        position: "top-right",
        title: "Sign In to add Items to cart!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return navigate("/signin");
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/cart",
        {
          productId: product.id,
          name: product.name,
          quantity: 1,
          price: product.price,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast({
        position: "top-right",
        title: response.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      toast({
        position: "top-right",
        title: error.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
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
            onClick={addToCart}
          >
            ADD TO CART!
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
