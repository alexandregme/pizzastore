import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TotalItems from "./total-items";
import TotalCost from "./total-cost";
import { getTotalItems, getTotalCost } from "../selectors";

export const SummaryCart = ({className ='', totalItems = 0, totalCost = 0}) =>(
  <div className={`summary-cart ${className}`}>
    <TotalItems totalItems={totalItems}/>
    <TotalCost totalCost={totalCost}/>
  </div>
);

SummaryCart.propTypes = {
  className: PropTypes.string,
  totalItems: PropTypes.number,
  totalCost: PropTypes.number,
};

const mapStateToProps = state => ({
  totalItems: getTotalItems(state),
  totalCost: getTotalCost(state)
});

export default connect(
  mapStateToProps
)(SummaryCart);
