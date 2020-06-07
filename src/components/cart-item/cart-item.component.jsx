import React from "react";
import "./cart-item.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CartItem = ({ item, clearItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}x${price}
        </span>
      </div>
      <div
        className="remove-button"
        onClick={() => {
          clearItem(item);
        }}
      >
        &#x2715;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: (item) => {
      dispatch(clearItemFromCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
