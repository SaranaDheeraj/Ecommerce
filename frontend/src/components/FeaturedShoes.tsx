import { Center, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { Product } from "../interface";
import ProductCard from "./ProductCard";

const FeaturedShoes = () => {
  const { products, loading } = useProducts("1");

  return (
    <SimpleGrid minChildWidth="300px" gap={3}>
      {products.map((product) => (
        <Center key={product.id}>
          <ProductCard product={product} title="shoes" />
        </Center>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedShoes;
