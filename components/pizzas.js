import React from 'react';
import Pizza from "./pizza";
import PropTypes from "prop-types";

const renderPizzas = pizzas => (
  pizzas.length > 0 ?
    pizzas.map((pizza,id) => <Pizza key={id} pizza={pizza}/>) :
    <span>No pizzas were found, plz come back soon.</span>
);

const Pizzas = ({pizzas = []}) => (
  <React.Fragment>
    {renderPizzas(pizzas)}
  </React.Fragment>
);

Pizzas.propTypes = {
  pizzaSizes: PropTypes.array
};

export default Pizzas;
