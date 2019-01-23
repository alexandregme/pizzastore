import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {addToCart } from '../actions';
import Button from "./button";
import Toppings from "./toppings";
import { DEFAULT_PIZZA } from "../__mocks__";
import PizzaSVG from '../svgs/pizza.svg';

export const Pizza = ({pizza = DEFAULT_PIZZA, handleAddToCart = ()=>{}}) => (
  <div className="card bg-inverse text-white text-center col-md-3">
      <div className="card-header bg-inverse">
        <PizzaSVG className="pizzaSVG" />
        <div className="info">
          <h5 id="pizzaName" className="card-title">Pizza size - {pizza.name}</h5>
          <p id="pizzaMaxToppings" className="card-text">Max Toppings - {pizza.maxToppings ? pizza.maxToppings : 'unlimited toppings!'}</p>
          <p id="pizzaBasePrice" className="card-text">Base price - ${pizza.basePrice}</p>
          <p id="pizzaTotalPrice" className="card-text">Total price - ${pizza.totalPrice}</p>
        </div>
      </div>
      <div className="card-body">
        <Toppings toppings={pizza.toppings} disabledToppings={pizza.disabledToppings}/>
        <Button
          label={'order pizza'}
          className="btn btn-warning text-gray-dark"
          handleClick={handleAddToCart}
        />
      </div>
  </div>
);

Pizza.propTypes = {
  pizza: PropTypes.object,
  handleAddToCart: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleAddToCart() { dispatch(addToCart(ownProps.pizza)); }
});


export default connect(
  null,
  mapDispatchToProps
)(Pizza);
