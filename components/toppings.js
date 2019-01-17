import React from 'react';
import Topping from './topping';
import PropTypes from "prop-types";

const renderToppings = toppings => (
  toppings.length > 0 ?
    toppings.map((topping,id) => <Topping key={id} topping={topping}/>) :
    <p>There are no toppings available for this pizza.</p>
);

const Toppings = ({toppings = []}) => (
  <React.Fragment>
    {renderToppings(toppings)}
  </React.Fragment>
);

Toppings.propTypes = {
  toppings: PropTypes.array
};

export default Toppings;
