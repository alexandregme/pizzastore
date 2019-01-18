import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import Button from "./button";
import { DEFAULT_PIZZA } from "../__mocks__";

export const CartItem = ({cartItem = DEFAULT_PIZZA, handleRemoveFromCart}) =>(
  <React.Fragment>
    <p className="pizzaName">{cartItem.name}</p>
    <p className="pizzaMaxToppings">{cartItem.maxToppings}</p>
    <p className="pizzaBasePrice">{cartItem.basePrice}</p>
    <Button
      label={`remove item`}
      handleClick={handleRemoveFromCart}
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
