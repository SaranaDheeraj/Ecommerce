import axios from "axios";
import { useEffect, useState } from "react";
import useProducts from "./hooks/useProducts";
import { Product } from "./interface";

function App() {
  const products: Product[] = useProducts();
  return (
    <div>
      {products.map((product, i) => (
        <div key={i}>
          <img src={product.image} alt="" />
          <h1>
            {product.name} - {product.price}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default App;
