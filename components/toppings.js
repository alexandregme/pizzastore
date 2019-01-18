import React from 'react';
import Topping from './topping';
import PropTypes from "prop-types";

const renderToppings = (toppings, pizzaName) => (
  toppings.length > 0 ?
    toppings.map((topping,id) => <Topping key={id} topping={topping} pizzaName={pizzaName}/>) :
    <p>There are no toppings available for this pizza.</p>
);

const Toppings = ({toppings = [], pizzaName='default pizza'}) => (
  <React.Fragment>
    <div>
      {renderToppings(toppings, pizzaName)}
    </div>
  </React.Fragment>
);

Toppings.propTypes = {
  toppings: PropTypes.array,
  pizzaName: PropTypes.string
};

export default Toppings;
