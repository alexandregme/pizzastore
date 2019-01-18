import React from 'react';
import PropTypes from "prop-types";

const TotalCost = ({className, totalCost = 0}) => <p className={className}>Total cost - ${totalCost}</p>;

TotalCost.propTypes = {
  className: PropTypes.string,
  totalCost: PropTypes.number
};

export default TotalCost;
