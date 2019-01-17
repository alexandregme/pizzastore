import React from 'react';

const id = `checkbox_${Math.random().toString().replace(/0\./, '')}`;

const Checkbox = ({label = 'default label', isChecked = false}) => (
  <React.Fragment>
    <input
      type="checkbox"
      id
      checked={isChecked}
    />
    <label
      htmlFor={id}
    >
      {label}
    </label>
  </React.Fragment>
);

export default Checkbox;
