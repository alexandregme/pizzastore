import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Pizza from "./pizza";
import { getPizzas } from "../selectors";

export const Pizzas = ({pizzas = []}) => (
  <React.Fragment>
    <div className="card-deck">
      {
        pizzas.length > 0 ?
        pizzas.map((pizza,id) => <Pizza key={id} pizza={pizza}/>) :
        <h2>No pizzas were found, plz come back soon.</h2>
      }
    </div>
  </React.Fragment>
);

Pizzas.propTypes = {
  pizzas: PropTypes.array
};

const mapStateToProps = state => ({
  pizzas: getPizzas(state)
});

export default connect(
  mapStateToProps
)(Pizzas);
