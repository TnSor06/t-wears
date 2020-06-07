import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#x276E;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#x276F;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
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
    addItem: (item) => {
      dispatch(addItem(item));
    },
    removeItem: (item) => {
      dispatch(removeItem(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
