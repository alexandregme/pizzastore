import React from 'react';
import PropTypes from "prop-types";

const Button = ({label = 'button', handleClick = ()=>{} }) => <button onClick={handleClick}>{label}</button>;

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
