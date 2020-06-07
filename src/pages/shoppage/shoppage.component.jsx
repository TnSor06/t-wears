import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionsPage from "../collections/collections.component";

// Routing for on path /shop
// So that dynamic routing is /shop/:category
const ShopPage = ({ match }) => {
  // Match, location ,history is passed by route objetc in /shop
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      ></Route>
      <Route
        path={`${match.path}/:collection`}
        component={CollectionsPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
