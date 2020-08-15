import React from "react";
import { Query, Mutation } from "react-apollo";
import CartDropdown from "./cart-dropdown.component";
import { GET_CART_ITEMS } from "../../graphql/queries";
import { TOGGLE_CART_HIDDEN } from "../../graphql/mutation";

// Wrapping both query and mutation
const CartDropdownContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => {
        return (
          <Query query={GET_CART_ITEMS}>
            {({ data: { cartItems } }) => {
              return (
                <CartDropdown
                  cartItems={cartItems}
                  toggleCartHidden={toggleCartHidden}
                ></CartDropdown>
              );
            }}
          </Query>
        );
      }}
    </Mutation>
  );
};

export default CartDropdownContainer;
