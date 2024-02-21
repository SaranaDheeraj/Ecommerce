import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../interface";

export default function useProducts(categoryId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let response;
        if (categoryId === "0") {
          response = await axios.get(`http://localhost:3000/products`);
        } else {
          response = await axios.get(
            `http://localhost:3000/products/limited?categoryId=${categoryId}`
          );
        }
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error, e.g., setProducts([]) or display error message
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categoryId]); // Include categoryId in the dependency array

  return { products, loading };
}
