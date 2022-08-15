import React, { useState } from "react";

const ProductCard = (product) => {
  const [image, setImage] = useState(null);
  const buttonClasses =
    "view-button text-2xl flex justify-center p-4 text-text bg-backGround rounded-xl shadow-md hover:bg-text hover:text-darkText";

  product = product.product;
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
          <div className={buttonClasses}>
            <a href="#" classname="">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
