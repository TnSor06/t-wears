// Wrapper for header to get CartHidden from graphql resolver
import React from "react";
import { Query } from "react-apollo";

import Header from "./header.component";
import { GET_CART_HIDDEN } from "../../graphql/queries";

const HeaderContainer = () => {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => {
        return <Header hidden={cartHidden}></Header>;
      }}
    </Query>
  );
};
export default HeaderContainer;
