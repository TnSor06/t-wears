import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/t-wears-logo.svg";
import { auth } from "../../firebase/firebase.utils";

// HOC for redux to give access to redux
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
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
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGNOUT
          </div>
        ) : (
          <NavLink to="/signin" className="option">
            SIGNIN
          </NavLink>
        )}
        <CartIcon></CartIcon>
      </div>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    currentUser,
    hidden,
  };
};

export default connect(mapStateToProps, null)(Header);
