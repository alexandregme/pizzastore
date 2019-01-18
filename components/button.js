import React from 'react';
import PropTypes from "prop-types";

const Button = ({label = 'button', className='btn btn-primary', handleClick = ()=>{} }) => <button className={className} onClick={handleClick}>{label}</button>;

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
