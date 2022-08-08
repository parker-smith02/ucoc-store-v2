import React from "react";

const ProductCard = (product) => {
  product = product.product;
  return (
    <div className="w-60 p-4 m-6 flex rounded-lg text-darkText bg-lightGray product-wrapper">
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
