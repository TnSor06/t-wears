import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

// Instantiate GraphQL
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http"; // Link to establish connectioon
import { InMemoryCache } from "apollo-cache-inmemory"; // Caching data
import { ApolloClient, gql } from "apollo-boost"; // Setting up graphql-client
import { typeDefs, resolvers } from "./graphql/resolvers";

//Establish Connection
const httpLink = createHttpLink({
  uri: "https://www.crwn-clothing.com/",
});
//Create cache and manage data like store in redux
const cache = new InMemoryCache();
// Create client
const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

// Cached Data
client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    cartItemCount: 0,
  },
});
client
  .query({
    query: gql`
      {
        collections {
          id
          title
          items {
            id
            name
          }
        }
      }
    `,
  })
  .then((response) => {
    // Loading is handled by the apollo-client
    console.log(response);
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
