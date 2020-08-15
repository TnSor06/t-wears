// Object passed to client to let know what value to resolve in query on client side
import { gql } from "apollo-boost";
import {
  GET_CART_HIDDEN,
  GET_CART_ITEMS,
  GET_CART_ITEM_COUNT,
} from "./queries";
import { addItemToCart, getCartItemCount } from "./cart.utils";

// We define schema for the client side
// to make local chanes in cache or make request and store in cache which acts a management service
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;
// quantity to check how many we have put in to our cart
// extend implies to extend mutation or item type already existing in graphql

// resolver for the typedefs we created on the client side
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_parent, _args, _ctx, _info) => {
      // ctx stores client and cache object
      // data returns cartHidden
      const { cartHidden } = _ctx.cache.readQuery({
        query: GET_CART_HIDDEN,
        variables: {},
      });
      _ctx.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {
          cartHidden: !cartHidden,
        },
      });
      return !cartHidden;
    },
    addItemToCart: (_parent, _args, _ctx, _info) => {
      // args will store the item
      const { item } = _args;
      const { cache } = _ctx;
      const { cartItems } = _ctx.cache.readQuery({
        query: GET_CART_ITEMS,
        variables: {},
      });
      const newCartItems = addItemToCart(cartItems, item);
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
      cache.writeQuery({
        query: GET_CART_ITEM_COUNT,
        data: {
          cartItemCount: getCartItemCount(newCartItems),
        },
      });
      return newCartItems;
    },
  },
};
