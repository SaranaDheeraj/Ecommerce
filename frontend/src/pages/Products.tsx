import {
  Box,
  Center,
  Container,
  Input,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { Product } from "../interface";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const { products, loading } = useProducts("0");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    let filtered: Product[] = [];
    if ("shoes".includes(searchTerm)) {
      filtered = products.filter((product) => product.categoryId === 1);
    } else if ("clothes".includes(searchTerm)) {
      filtered = products.filter((product) => product.categoryId === 2);
    } else if (searchTerm) {
      filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    } else {
      filtered = products;
    }
    setFilteredProducts(filtered);
  };

  return (
    <Container maxW="1000px">
      <Box p={3}>
        <Input
          colorScheme="blue"
          placeholder="Search For Products"
          size="lg"
          onChange={filterProducts}
        />
      </Box>
      {loading ? (
        <SimpleGrid minChildWidth="300px" gap={3} mt={4}>
          <Skeleton maxW="300px" minH="550px" />
          <Skeleton maxW="300px" minH="550px" />
          <Skeleton maxW="300px" minH="550px" />
        </SimpleGrid>
      ) : (
        <SimpleGrid minChildWidth="300px" gap={3} mt={4}>
          {filteredProducts.map((product, i) => (
            <Center key={i}>
              <ProductCard
                product={product}
                title={product.categoryId === 1 ? "shoes" : "clothes"}
              />
            </Center>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default Products;
