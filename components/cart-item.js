import React from 'react';
import PropTypes from "prop-types";
import Button from "./button";

const CartItem = ({cartItem = {pizzaSize: 'cart item'}}) =>(
  <React.Fragment>
    <p>{cartItem.pizzaSize}</p>
    <Button
      label={'remove item'}
      handleClick={() => {}}
    />
  </React.Fragment>
);

CartItem.propTypes = {
  cartItem: PropTypes.object
};

export default CartItem;
