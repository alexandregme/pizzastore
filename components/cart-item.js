import React from 'react';
import PropTypes from "prop-types";

const CartItem = ({cartItem = 'cart item'}) => <p>{cartItem}</p>;

CartItem.propTypes = {
  cartItem: PropTypes.string
};

export default CartItem;
