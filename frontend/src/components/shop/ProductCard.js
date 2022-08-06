import React from "react";

const ProductCard = (product) => {
  console.log(product);
  return (
    <div className="w-60 p-2 text-white">
      <p>{product.name}</p>
    </div>
  );
};

export default ProductCard;
