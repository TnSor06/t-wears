// Muataion is passed here for cartHidden
import React from "react";
import { Mutation, Query, graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import CartIcon from "./cart-icon.component";
import { TOGGLE_CART_HIDDEN } from "../../graphql/mutation";
import { GET_CART_ITEM_COUNT } from "../../graphql/queries";

// using as Query and Mutation
// const CartIconContainer = () => {
//   return (
//     <Query query={GET_CART_ITEM_COUNT}>
//       {({ data: { cartItemCount } }) => {
//         return (
//           <Mutation mutation={TOGGLE_CART_HIDDEN}>
//             {(toggleCartHidden) => {
//               return (
//                 <CartIcon
//                   toggleCartHidden={toggleCartHidden}
//                   itemCount={cartItemCount}
//                 ></CartIcon>
//               );
//             }}
//           </Mutation>
//         );
//       }}
//     </Query>
//   );
// };

const CartIconContainer = ({
  getCartItemCount: { cartItemCount },
  toggleCartHidden,
}) => {
  return (
    <CartIcon
      toggleCartHidden={toggleCartHidden}
      itemCount={cartItemCount}
    ></CartIcon>
  );
};

// Using compose and graphql to bind it as props
export default compose(
  graphql(GET_CART_ITEM_COUNT, { name: "getCartItemCount" }),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
