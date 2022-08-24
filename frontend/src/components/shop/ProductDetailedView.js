import axios from "axios";
import * as Constants from "../../constants.js";
import React, { useEffect, useState } from "react";

const ProductDetailedView = () => {
  let url = window.location.href;
  url = url.split("/");
  const id = url[url.length - 1];
  const [dataReady, setDataReady] = useState(false);
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (!dataReady) {
      axios
        .get(`${Constants.API_BASE_URL}/getProductById/${id}`, { id })
        .then((r) => {
          const data = r.data;
          console.log(data);
          setProduct(data);
        })
        .catch((e) => {
          setDataReady(true);
        });
    }
  }, [dataReady]);

  const SizeCard = ({ size, selected }) => {
    let selectedClasses = "bg-backGround text-text";
    const selectSize = () => {
      console.log("selected");
      setSelectedSize(size);
    };
    console.log(size);
    return (
      <div
        onClick={selectSize}
        className={`size-card w-10 h-10 p-2 rounded-md text-center m-2 ${
          selected
            ? selectedClasses
            : "hover:bg-backGround hover:text-text text-darkText"
        }`}
      >
        {size}
      </div>
    );
  };
  let sizes = [5, 6, 7, 8, 9, 10]; //change backend to allow arrays for sizes

  const AddToCartButton = () => {
    const handleAddToCart = () => {
      if (!selectedSize) {
        console.log("select a size");
      } else {
        console.log("added to cart");
      }
    };
    return (
      <span
        onClick={handleAddToCart}
        className="text-2xl ml-8 flex justify-center p-4 text-text bg-backGround rounded-xl shadow-md hover:bg-text hover:text-darkText"
      >
        Add To Cart
      </span>
    );
  };

  return (
    <div className="product-container w-full h-full p-24 text-darkText">
      <div className="product-content flex flex-col p-24 bg-lightGray rounded-lg">
        <span className="text-3xl pb-12  font-bold">{product.name}</span>
        <div className="flex flex-row">
          <img
            className="w-72 h-72 rounded-lg shadow-lg"
            src={product.image}
          ></img>
          <div className="flex flex-col mb-12">
            <p className="pl-8 text-lg">{product.description}</p>
            <span className="pl-8 text-lg">{product.price}</span>
            <AddToCartButton />
          </div>
        </div>
        <div className="size-container flex flex-row pt-8">
          {sizes.map((size) => (
            <SizeCard size={size} selected={size === selectedSize} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailedView;
