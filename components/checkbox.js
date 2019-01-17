import React from 'react';
import PropTypes from "prop-types";

const id = `checkbox_${Math.random().toString().replace(/0\./, '')}`;

const Checkbox = ({label = 'default label', isChecked = false, handleChange = ()=>{} }) => (
  <React.Fragment>
    <input
      type="checkbox"
      onChange={handleChange}
      id={id}
      checked={isChecked}
    />
    <label
      htmlFor={id}
    >
      {label}
    </label>
  </React.Fragment>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default Checkbox;
