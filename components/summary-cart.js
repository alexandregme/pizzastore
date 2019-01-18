import React from 'react';
import TotalItems from "./total-items";
import TotalCost from "./total-cost";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const SummaryCart = ({className,totalItems, totalCost}) =>(
  <div className={className}>
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
