import React from 'react';
import Pizza from "./pizza";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const renderPizzas = pizzas => (
  pizzas.length > 0 ?
    pizzas.map((pizza,id) => <Pizza key={id} pizza={pizza}/>) :
    <span>No pizzas were found, plz come back soon.</span>
);

export const Pizzas = ({pizzas = []}) => (
  <React.Fragment>
    {renderPizzas(pizzas)}
  </React.Fragment>
);

Pizzas.propTypes = {
  pizzas: PropTypes.array
};

const mapStateToProps = state => ({
  pizzas: state.pizzas
});

export default connect(
  mapStateToProps
)(Pizzas);
