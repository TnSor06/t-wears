// Building a graphql container for a component to make request and wrap it as HOC
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection.component";

// need to pass data types in params
const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({ match }) => {
  // variables props pass the variables
  return (
    <Query
      query={GET_COLLECTIONS_BY_TITLE}
      variables={{
        title: match.params.collectionId,
      }}
    >
      {({ loading, error, data }) => {
        // We expect getCollectionsByTitle
        if (loading) {
          return <Spinner></Spinner>;
        }
        return (
          <CollectionPage
            collection={data.getCollectionsByTitle}
          ></CollectionPage>
        );
      }}
    </Query>
  );
};
export default CollectionPageContainer;
