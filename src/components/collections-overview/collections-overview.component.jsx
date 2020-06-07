import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";
import "./collections-overview.styles.scss";
import { CollectionPreview } from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
