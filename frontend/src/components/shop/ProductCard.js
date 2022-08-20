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
    <div className="w-96 p-4 m-6 rounded-lg text-darkText bg-lightGray product-wrapper">
      <Link to={`product/${id}`} className="z-50">
        <div className="content-container flex flex-col justify-between">
          <div className="image-container w-full flex justify-center">
            <img
              className="object-fill mb-4 shadow-md rounded-lg"
              src={product.image}
            ></img>
          </div>
          <div className="info-container">
            <h3 className="text-xl pb-4">{product.name}</h3>
            <div className="card-buttons-contianer flex justify-between">
              <span className={buttonClasses}>view</span>
              <span className="text-3xl text-darkGray font-bold">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
