import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTopping } from "../actions";
import Checkbox from "./checkbox";
import { DEFAULT_TOPPING } from "../__mocks__";


export const Topping = ({topping = DEFAULT_TOPPING, pizzaName, handleToggleTopping}) => (
  <React.Fragment>
    <Checkbox handleChange={handleToggleTopping} label={`${topping.name}-${topping.price}`} isChecked={topping.isChecked}/>
  </React.Fragment>
);


Topping.propTypes = {
  topping: PropTypes.object,
  pizzaName: PropTypes.string,
  handleToggleTopping: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleToggleTopping: () => dispatch(toggleTopping(ownProps.pizzaName, ownProps.topping.name))
});

export default connect(
  null,
  mapDispatchToProps
)(Topping);
