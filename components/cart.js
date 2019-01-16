import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import CartItem from "./cart-item";

const renderCartItems = cartItems => cartItems.map(
  (item,id) =>{
    return (<CartItem key={id} cartItem={item}/>);
  }
);

export const Cart = ({cartItems = []}) => (
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

const mapStateToProps = state => ({
  cartItems: state.cart
});

export default connect(
  mapStateToProps
)(Cart);
