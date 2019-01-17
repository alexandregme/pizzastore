import React from 'react';
import { DEFAULT_TOPPING } from "../__mocks__";

const Topping = ({topping = DEFAULT_TOPPING}) => (
  <React.Fragment>
    <input
      type="checkbox"
      id={`id-${topping.name}`}
      checked={topping.isChecked}
    />
    <label
      htmlFor={`id-${topping.name}`}
    >
      {topping.name} - {topping.price}
    </label>
  </React.Fragment>
);

export default Topping;
