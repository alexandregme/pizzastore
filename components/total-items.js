import React from 'react';
import PropTypes from "prop-types";

const TotalItems = ({className, totalItems = 0}) => <p className={className}>Total items - {totalItems}</p>;

TotalItems.propTypes = {
  className: PropTypes.string,
  totalItems: PropTypes.number,
};

export default TotalItems;
