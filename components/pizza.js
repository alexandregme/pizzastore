import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Button from "./button";
import Toppings from "./toppings";
import { DEFAULT_PIZZA } from "../__mocks__";
import PizzaSVG from '../svgs/pizza.svg';

export const Pizza = ({pizza = DEFAULT_PIZZA, handleAddToCart = ()=>{}}) => (
  <React.Fragment>
    <div className="card bg-inverse text-white text-center mb-3">
        <PizzaSVG className="pizzaSVG" />
        <div className="card-body">
          <h5 id="pizzaName" className="card-title">Pizza size - {pizza.name}</h5>
          <p id="pizzaMaxToppings" className="card-text">Max Toppings - {pizza.maxToppings ? pizza.maxToppings : 'unlimited toppings!'}</p>
          <p id="pizzaBasePrice" className="card-text">Base price - ${pizza.basePrice}</p>
          <p id="pizzaTotalPrice" className="card-text">Total price - ${pizza.totalPrice}</p>
          <Toppings toppings={pizza.toppings} pizzaName={pizza.name}/>
          <Button
            label={'add to cart'}
            className="btn btn-warning text-gray-dark"
            handleClick={handleAddToCart}
          />
        </div>
    </div>
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
