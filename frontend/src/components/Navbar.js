import React from "react";
import cart from "../images/icons/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItem =
    "pl-4 pr-4 pt-1.5 hover:bg-text hover:text-darkText text-xl rounded-xl h-12";
  return (
    <div className="navbar-container pt-2 w-full h-16 flex z-50 shadow-md bg-backGround">
      <div className="navbar-left">
        <span className={NavItem}>
          <Link to="/shop">Shop</Link>
        </span>
        <span className={NavItem}>
          <Link to="/groupbuys">Group Buys</Link>
        </span>
        <span className={NavItem}>
          <Link to="/rentgear">Rent Gear</Link>
        </span>
        <span className={NavItem}>
          <Link to="/requestatrip">Request a Trip</Link>
        </span>
      </div>
      <div className="cart-container bg-text flex rounded-xl h-12 w-12">
        <img src={cart} className="flex h-9 w-9"></img>
      </div>
    </div>
  );
};

export default Navbar;
