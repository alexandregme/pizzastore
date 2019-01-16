import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import Button from "./button";

export const CartItem = ({cartItem = {pizzaSize: 'cart item'}, handleRemoveFromCart}) =>(
  <React.Fragment>
    <p>{cartItem.pizzaSize}</p>
    <Button
      label={`remove item ${cartItem.id}`}
      handleClick={() => {handleRemoveFromCart(cartItem.id);}}
    />
  </React.Fragment>
);

CartItem.propTypes = {
  cartItem: PropTypes.object,
  handleRemoveFromCart: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRemoveFromCart: () => dispatch(removeFromCart(ownProps.cartItem.id))
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
