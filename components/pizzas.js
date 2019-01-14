import React from 'react';
import Pizza from "./pizza";
import PropTypes from "prop-types";

const renderPizzasSizes = pizzaSizes => pizzaSizes.map(
  (pizzaSize,id) =>{
    return (<Pizza key={id} pizzaSize={pizzaSize}/>);
  }
);

const Pizzas = ({pizzaSizes = []}) => (
  <React.Fragment>
    {pizzaSizes.length > 0 ? (
      renderPizzasSizes(pizzaSizes)
    ) : (
      <span>No pizzas were found, plz come back soon.</span>
    )}
  </React.Fragment>

);

Pizzas.propTypes = {
  pizzaSizes: PropTypes.array
};

export default Pizzas;
