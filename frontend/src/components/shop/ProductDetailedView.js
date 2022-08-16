import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetailedView = () => {
  const { product } = useParams();
  console.log(product);
  return <div>{product}</div>;
};

export default ProductDetailedView;
