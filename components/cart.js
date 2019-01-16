import React from 'react';
import PropTypes from "prop-types";
import CartItem from "./cart-item";

const renderCartItems = cartItems => cartItems.map(
  (item,id) =>{
    return (<CartItem key={id} cartItem={item}/>);
  }
);

const Cart = ({cartItems = []}) => (
  <React.Fragment>
    {cartItems.length > 0 ? (
      renderCartItems(cartItems)
    ) : (
      <span>your cart is empty.</span>
    )}
  </React.Fragment>
);

Cart.propTypes = {
  cartItems: PropTypes.array
};


export default Cart;
