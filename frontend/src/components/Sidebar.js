import React from "react";
import { FaTimes } from "react-icons/fa";
import cart from "../images/icons/cart.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const spanClasses =
    "px-4 pt-1.5 mx-3 hover:bg-text hover:text-darkText duration-200 text-xl rounded-xl h-12";
  return (
    <div className="sidebar-container" isOpen={isOpen} onClick={toggle}>
      <div className="close-icon">
        <FaTimes />
      </div>
      <div className="sidebar-wrapper flex">
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
        <div className="cart-container bg-text flex pt-1 justify-center rounded-xl h-12 w-12">
          <img src={cart} className="flex h-9 w-9"></img>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
