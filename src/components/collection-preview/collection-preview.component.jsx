import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import "./collection-preview.styles.scss";

export const CollectionPreview = ({ title, items, routeName, history }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item}></CollectionItem>;
          })}
      </div>
      <Link to={`/shop/${routeName}`} className="more">
        More
      </Link>
    </div>
  );
};
