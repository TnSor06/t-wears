import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { CollectionsOverviewContainer } from "../../components/collections-overview/collections-overview.container";
import { CollectionsPageContainer } from "../collections/collections.container";
// For sagas : call action from action in redux
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = (props) => {
  const { match, fetchCollectionsStart } = props;
  console.log(props);
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      ></Route>
      <Route
        path={`${match.path}/:collection`}
        component={CollectionsPageContainer}
      ></Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => {
      dispatch(fetchCollectionsStart());
    },
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
