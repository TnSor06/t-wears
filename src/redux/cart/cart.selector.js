import { createSelector } from "reselect";

// Selectors
// Input selector is function that gets whole state and returns a slice
const selectCart = (state) => {
  return state.cart;
};

// Output selector is function that use input selctor to build themselves
export const selectCartItems = createSelector([selectCart], (cart) => {
  // This is memoized
  return cart.cartItems;
});

export const selectCartHidden = createSelector([selectCart], (cart) => {
  return cart.hidden;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0);
  }
);
