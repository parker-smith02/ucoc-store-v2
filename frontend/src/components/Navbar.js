import React from "react";
import cart from "../images/icons/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const spanClasses =
    "px-4 pt-1.5 mx-3 hover:bg-text hover:text-darkText duration-200 text-xl rounded-xl h-12";
  return (
    <div className="navbar-container pt-2 w-full h-16 flex justify-between shadow-md bg-backGround">
      <div className="navbar-left flex">
        <span className={spanClasses}>
          <Link to="/shop">Shop</Link>
        </span>
        <span className={spanClasses}>
          <Link to="/groupbuys">Group Buys</Link>
        </span>
        <span className={spanClasses}>
          <Link to="/rentgear">Rent Gear</Link>
        </span>
        <span className={spanClasses}>
          <Link to="/requestatrip">Request a Trip</Link>
        </span>
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
