import React, { useState } from "react";

const ProductCard = (product) => {
  const [image, setImage] = useState(null);

  product = product.product;
  return (
    <div className="w-60 p-4 m-6 flex rounded-lg text-darkText bg-lightGray product-wrapper">
      <h3>{product.name}</h3>
      <img src={product.image}></img>
    </div>
  );
};

export default ProductCard;
