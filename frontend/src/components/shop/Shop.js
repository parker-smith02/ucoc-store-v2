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
          const merch = data.filter((product) => product.category === "mr");
          setProducts(merch);
          setDataReady(true);
        })
        .catch((err) => {
          setDataReady(true);
        });
    }
  }, [dataReady]);

  return (
    <div className="bg-backGround block justify-center w-full shop-container">
      <h1 className="text-3xl text-center pb-16">Merch</h1>
      <div className="grid-wrapper w-full flex justify-center">
        <div className="w-4/6 grid grid-cols-3 gap-8 place-content-center products-wrapper">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
