import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../interface";

export default function useProducts(categoryId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get(
        `http://localhost:3000/products/limited?categoryId=${categoryId}`
      );
      setProducts(products.data);
    }
    fetchProducts();
  }, []);
  return products;
}
