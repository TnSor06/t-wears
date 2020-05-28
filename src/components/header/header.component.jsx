import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/t-wears-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <NavLink to="/shop" className="option">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="option">
          CONTACT
        </NavLink>
        <NavLink to="/signin" className="option">
          SIGNIN
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
