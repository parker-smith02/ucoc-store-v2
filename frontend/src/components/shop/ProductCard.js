import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = (product) => {
  const [image, setImage] = useState(null);
  const buttonClasses =
    "view-button text-2xl flex justify-center p-4 text-text bg-backGround rounded-xl shadow-md hover:bg-text hover:text-darkText";

  product = product.product;
  const id = product.id;
  console.log(product);
  return (
    <div className="w-96 p-4 m-6 rounded-lg flex flex-col justify-between text-darkText bg-lightGray product-wrapper">
      <div className="image-container w-full flex justify-center">
        <img
          className="object-fill mb-4 shadow-md rounded-lg"
          src={product.image}
        ></img>
      </div>
      <div className="info-container">
        <h3 className="text-xl pb-4">{product.name}</h3>
        <div className="card-buttons-contianer flex justify-between">
          <span className={buttonClasses}>
            <Link to={`product/${id}`}>View</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
