import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionsPage from "../collections/collections.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    // Promise Pattern
    collectionRef.get().then(async (snapshot) => {
      // No longer live updates here
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        ...this.state,
        isLoading: false,
      });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // component={CollectionsOverview}
          render={(props) => {
            return (
              <CollectionsOverviewWithSpinner
                isLoading={isLoading}
                {...props}
              ></CollectionsOverviewWithSpinner>
            );
          }}
        ></Route>
        <Route
          path={`${match.path}/:collection`}
          // component={CollectionsPage}
          render={(props) => {
            return (
              <CollectionsPageWithSpinner
                isLoading={isLoading}
                {...props}
              ></CollectionsPageWithSpinner>
            );
          }}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) => {
      dispatch(updateCollections(collectionsMap));
    },
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
