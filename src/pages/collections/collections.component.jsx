import React from "react";
import "./collections.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";

const CollectionsPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectShopCollection(ownProps.match.params.collection)(state),
  };
};

export default connect(mapStateToProps)(CollectionsPage);
