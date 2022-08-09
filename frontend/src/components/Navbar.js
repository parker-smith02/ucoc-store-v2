import React from "react";
import cart from "../images/icons/cart.png";

const Navbar = () => {
  const spanClasses =
    "px-4 pt-1.5 mx-3 hover:bg-text hover:text-darkText duration-200 text-xl rounded-xl h-12";
  return (
    <div className="navbar-container pt-2 w-full h-16 flex justify-between z-50 shadow-md bg-backGround">
      <div className="navbar-left flex">
        <span className={spanClasses}>Shop</span>
        <span className={spanClasses}>Group Buys</span>
        <span className={spanClasses}>Rent Gear</span>
        <span className={spanClasses}>Request a Trip</span>
      </div>
      <div className="navbar-right flex pr-3">
        <div className="cart-container bg-text flex pt-1 justify-center rounded-xl h-12 w-12">
          <img src={cart} className="flex h-9 w-9"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
