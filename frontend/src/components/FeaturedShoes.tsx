import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { Product } from "../interface";
import ProductCard from "./ProductCard";
import { Suspense } from "react";

const FeaturedShoes = () => {
  const products: Product[] = useProducts();

  return (
    <SimpleGrid minChildWidth="300px" gap={3}>
      {products.map((product) => (
        <Center key={product.id}>
          <ProductCard product={product} />
        </Center>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedShoes;
