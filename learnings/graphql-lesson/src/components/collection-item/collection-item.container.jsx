import React from "react";
import { Mutation } from "react-apollo";
import { ADD_ITEM_TO_CART } from "../../graphql/mutation";
import CollectionItem from "./collection-item.component";

const CollectionItemContainer = (props) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {(addItemToCart) => {
        // AddItemToCart is a function
        return (
          <CollectionItem
            {...props}
            addItem={(item) =>
              addItemToCart({
                variables: { item },
              })
            }
          ></CollectionItem>
        );
      }}
    </Mutation>
  );
};
export default CollectionItemContainer;
