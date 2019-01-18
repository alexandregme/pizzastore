import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TotalItems from "./total-items";
import TotalCost from "./total-cost";

export const SummaryCart = ({className,totalItems, totalCost}) =>(
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
  totalItems: state.cart.totalItems,
  totalCost: state.cart.totalCost
});

export default connect(
  mapStateToProps
)(SummaryCart);
