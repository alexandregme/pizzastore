import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTopping } from "../actions";
import Checkbox from "./checkbox";
import { DEFAULT_TOPPING } from "../__mocks__";


export const Topping = ({topping = DEFAULT_TOPPING, disabledToppings=false, handleToggleTopping = ()=>{}}) => (
  <React.Fragment>
    <Checkbox
      label={` ${topping.topping.name} - $${topping.topping.price}`}
      isChecked={topping.defaultSelected}
      isDisabled={topping.defaultSelected ? false : disabledToppings}
      handleChange={handleToggleTopping}
    />
  </React.Fragment>
);


Topping.propTypes = {
  topping: PropTypes.object,
  disabledToppings: PropTypes.bool,
  handleToggleTopping: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleToggleTopping() {dispatch(toggleTopping(ownProps.topping));}
});

export default connect(
  null,
  mapDispatchToProps
)(Topping);
