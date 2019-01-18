import React from 'react';
import Topping from './topping';
import PropTypes from "prop-types";

const Toppings = ({toppings = [], pizzaName = 'default pizza', disabledToppings=false}) => (
  <React.Fragment>
    <div>
      {
        toppings.length > 0 ?
          toppings.map((topping,id) => <Topping key={id} topping={topping} pizzaName={pizzaName} disabledToppings={disabledToppings}/>) :
          <p>There are no toppings available for this pizza.</p>
      }
    </div>
  </React.Fragment>
);

Toppings.propTypes = {
  toppings: PropTypes.array,
  pizzaName: PropTypes.string
};

export default Toppings;
