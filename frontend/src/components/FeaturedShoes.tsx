import { Box, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { Product } from "../interface";
import ProductCard from "./ProductCard";

const FeaturedShoes = () => {
  const products: Product[] = useProducts();

  return (
    <SimpleGrid minChildWidth="xs" gap={3}>
      {products.map((product) => (
        <Box key={product.id}>
          <ProductCard product={product} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedShoes;
