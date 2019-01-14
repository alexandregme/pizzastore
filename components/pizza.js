import React from 'react';
import PropTypes from "prop-types";
import Button from "./button";

const Pizza = ({pizzaSize = 'pizza size'}) =>(
  <React.Fragment>
    <p>{pizzaSize}</p>
    <Button label={'add to cart'}/>
  </React.Fragment>
);

Pizza.propTypes = {
  pizzaSize: PropTypes.string
};

export default Pizza;
