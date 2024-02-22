import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import StarRating from "./StarRating";
import { Product as ProductInterface } from "../interface";
import { cartItem, signedInState } from "../recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({
  product,
  title,
}: {
  product: ProductInterface;
  title: string;
}) => {
  const navigate = useNavigate();
  const signedIn = useRecoilValue(signedInState);
  const [items, setItems] = useRecoilState(cartItem);
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
          image: product.image,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const itemIndex = items.findIndex(
        (item: any) => item.id == response.data.exists.id
      );

      if (itemIndex != -1) {
        const updatedItems = [...items];
        updatedItems[itemIndex] = response.data.exists;
        setItems(updatedItems);
      } else {
        setItems([...items, response.data.exists]);
      }

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
      minH="550px"
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
        <Flex
          mt="6"
          flexDirection="column"
          gap={2}
          height="212px"
          textAlign="center"
        >
          <Text>{title}</Text>
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

          <Spacer />
          <Button
            colorScheme="teal"
            _hover={{ color: "white", bg: "teal.400" }}
            onClick={addToCart}
          >
            ADD TO CART!
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
