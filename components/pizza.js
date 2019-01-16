import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Button from "./button";

export const Pizza = ({pizzaSize = 'pizza size', handleAddToCart}) =>(
  <React.Fragment>
    <p>{pizzaSize}</p>
    <Button
      label={'add to cart'}
      handleClick={() => {handleAddToCart(pizzaSize);}}
    />
  </React.Fragment>
);

Pizza.propTypes = {
  pizzaSize: PropTypes.string,
  handleAddToCart: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleAddToCart: () => dispatch(addToCart(ownProps.pizzaSize))
});

export default connect(
  null,
  mapDispatchToProps
)(Pizza);
