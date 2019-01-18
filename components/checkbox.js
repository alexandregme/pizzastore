import React from 'react';
import PropTypes from "prop-types";

const Checkbox = ({label = 'default label', key , isChecked = false, isDisabled = false, handleChange = ()=>{} }) => (
  <React.Fragment>
    <div className="input-group-text">
      <label
        htmlFor={key}
      >
      <input
        type="checkbox"
        onChange={handleChange}
        id={key}
        checked={isChecked}
        disabled={isDisabled}
      />
        {label}
    </label>
    </div>
  </React.Fragment>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  key: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  handleChange: PropTypes.func
};

export default Checkbox;
