import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/t-wears-logo.svg";
import { auth } from "../../firebase/firebase.utils";

// HOC for redux to give access to redux
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // state is rootReducer
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, null)(Header);
