import React from 'react';
import PropTypes from "prop-types";

const Pizza = ({pizzaSize = 'pizza size'}) => <p>{pizzaSize}</p>;

Pizza.propTypes = {
  pizzaSize: PropTypes.string
};

export default Pizza;
