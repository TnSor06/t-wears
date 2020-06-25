import React from "react";
import { ReactComponent as Logo } from "../../assets/t-wears-logo.svg";
import { auth } from "../../firebase/firebase.utils";

// HOC for redux to give access to redux
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGNOUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGNIN</OptionLink>
        )}
        <CartIcon></CartIcon>
      </OptionsContainer>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </HeaderContainer>
  );
};

// state is passed automatically
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
