import React from 'react';
import { DEFAULT_TOPPING } from "../__mocks__";
import Checkbox from "./checkbox";

const Topping = ({topping = DEFAULT_TOPPING}) => (
  <React.Fragment>
    <Checkbox label={`${topping.name}-${topping.price}`} isChecked={topping.isChecked}/>
  </React.Fragment>
);

export default Topping;
