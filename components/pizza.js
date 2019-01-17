import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Button from "./button";
import { DEFAULT_PIZZA } from "../__mocks__";

export const Pizza = ({pizza = DEFAULT_PIZZA, handleAddToCart}) =>(
  <React.Fragment>
    <p className="pizzaName">{pizza.name}</p>
    <p className="pizzaMaxToppings">{pizza.maxToppings}</p>
    <p className="pizzaBasePrice">{pizza.basePrice}</p>
    <Button
      label={'add to cart'}
      handleClick={() => {handleAddToCart(pizza);}}
    />
  </React.Fragment>
);

Pizza.propTypes = {
  pizza: PropTypes.object,
  handleAddToCart: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleAddToCart: () => dispatch(addToCart(ownProps.pizza))
});

export default connect(
  null,
  mapDispatchToProps
)(Pizza);
