// Building a graphql container for a component to make request and wrap it as HOC
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionsOverview from "./collections-overview.component";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        // function is given from Query component
        if (loading) {
          return <Spinner></Spinner>;
        }
        return (
          <CollectionsOverview
            collections={data.collections}
          ></CollectionsOverview>
        );
      }}
    </Query>
  );
};
export default CollectionsOverviewContainer;
