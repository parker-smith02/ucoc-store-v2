import React, { useEffect, useState } from "react";
import * as Constants from "../../constants.js";
import axios from "axios";
import ProductCard from "./ProductCard.js";

const Shop = () => {
  const [dataReady, setDataReady] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!dataReady) {
      axios
        .get(`${Constants.API_BASE_URL}/getProducts/`, {})
        .then((response) => {
          const data = response.data;
          console.log(data);
          setProducts(data);
          setDataReady(true);
        });
    }
  }, [dataReady]);

  return (
    <div className="bg-backGround block w-full shop-container">
      <h2 className="">Merch</h2>
      <div className="flex products-wrapper">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
