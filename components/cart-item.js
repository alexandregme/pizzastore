import React from 'react';
import PropTypes from "prop-types";
import Button from "./button";

const CartItem = ({cartItem = 'cart item'}) =>(
  <React.Fragment>
    <p>{cartItem}</p>
    <Button
      label={'remove item'}
      handleClick={() => {}}
    />
  </React.Fragment>
);

CartItem.propTypes = {
  cartItem: PropTypes.string
};

export default CartItem;
