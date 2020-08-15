import { gql } from "apollo-boost";
// All queries stored in here
// @client implies we are querying on client side
export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;
export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;
export const GET_CART_ITEM_COUNT = gql`
  {
    cartItemCount @client
  }
`;
