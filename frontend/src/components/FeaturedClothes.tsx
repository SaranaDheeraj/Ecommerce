import { Product } from "../interface";
import useProducts from "../hooks/useProducts";
import { Center, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const FeaturedClothes = () => {
  const { products, loading } = useProducts("2");

  return (
    <SimpleGrid minChildWidth="300px" gap={3}>
      {products.map((product) => (
        <Center key={product.id}>
          <ProductCard title="clothes" product={product} />
        </Center>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedClothes;
