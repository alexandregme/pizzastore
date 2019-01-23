import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import Button from "./button";
import { DEFAULT_PIZZA } from "../__mocks__";
import PizzaSVG from '../svgs/pizza.svg';

export const CartItem = ({cartItem = DEFAULT_PIZZA, handleRemoveFromCart = ()=>{}}) =>(
  <React.Fragment>
    <div className="card bg-light text-center col-md-12">
      <div className="card-header col-md-2">
        <PizzaSVG className="pizzaSVG" />
      </div>
      <div className="card-body col-md-8">
        <div className="col-md-6 info">
          <h5 id="pizzaName" className="card-title">Pizza size - {cartItem.name}</h5>
          <p id="pizzaMaxToppings" className="card-text">Max Toppings - {cartItem.maxToppings ? cartItem.maxToppings : 'unlimited toppings!'}</p>
          <p id="pizzaBasePrice" className="card-text">Base price - ${cartItem.basePrice}</p>

        </div>
        <div className="col-md-6 info">
          <ul>
            <li><h5 className="card-title">Toppings</h5></li>
            {
              cartItem.toppings
                .filter(topping => topping.defaultSelected)
                .map((topping, id) => <li key={id}>{topping.topping.name} - ${topping.topping.price}</li>)
            }
          </ul>
        </div>
      </div>
      <div className="card-footer col-md-2">
        <p id="pizzaTotalPrice" className="card-text">Total price - ${cartItem.totalPrice}</p>
        <Button
          label={'remove pizza'}
          className="btn btn-danger"
          handleClick={handleRemoveFromCart}
        />
      </div>
    </div>
  </React.Fragment>
);

CartItem.propTypes = {
  cartItem: PropTypes.object,
  handleRemoveFromCart: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRemoveFromCart() { dispatch(removeFromCart(ownProps.cartItem.id)); }
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
