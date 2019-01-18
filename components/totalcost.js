import React from 'react';
import PropTypes from "prop-types";

const TotalCost = ({className}) => <p className={className}>total cost - $1000.00</p>;

TotalCost.propTypes = {
  className: PropTypes.string
};

export default TotalCost;
