import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Pizza } from '../pizza';
import Button from "../button";
import { CUSTOM_PIZZA } from "../../__mocks__";

describe("Pizza", ()=>{
  let mountedPizza;
  beforeEach(()=>{
    mountedPizza = shallow(<Pizza />);
  });

  it('renders without crashing', () => {
    shallow(<Pizza />);
    expect(mountedPizza).toMatchSnapshot();
  });

  it('expect to have default value for pizza name', () => {
    let pizzaNameValue = mountedPizza.find('p.pizzaName');
    expect(pizzaNameValue).toHaveLength(1);
    expect(pizzaNameValue.text()).toEqual('default pizza');
  });

  it('expect to have default value for pizza max toppings', () => {
    let pizzaMaxToppingValue = mountedPizza.find('p.pizzaMaxToppings');
    expect(pizzaMaxToppingValue).toHaveLength(1);
    expect(pizzaMaxToppingValue.text()).toEqual("0");
  });

  it('expect to have default value for base price', () => {
    let pizzaBasePriceValue = mountedPizza.find('p.pizzaBasePrice');
    expect(pizzaBasePriceValue).toHaveLength(1);
    expect(pizzaBasePriceValue.text()).toEqual("0");
  });

  it('expect to have Button component', () => {
    expect(mountedPizza.find(Button)).toHaveLength(1);
  });
});

describe("Pizza Custom component props", ()=>{
  let mountedPizza;
  let props = {pizza:CUSTOM_PIZZA};

  beforeEach(()=>{
    mountedPizza = shallow(<Pizza {...props} />);
  });

  it('expect to have default value for pizza name', () => {
    let pizzaNameValue = mountedPizza.find('p.pizzaName');
    expect(pizzaNameValue).toHaveLength(1);
    expect(pizzaNameValue.text()).toEqual('custom pizza');
  });

  it('expect to have default value for pizza max toppings', () => {
    let pizzaMaxToppingValue = mountedPizza.find('p.pizzaMaxToppings');
    expect(pizzaMaxToppingValue).toHaveLength(1);
    expect(pizzaMaxToppingValue.text()).toEqual("1");
  });

  it('expect to have default value for base price', () => {
    let pizzaBasePriceValue = mountedPizza.find('p.pizzaBasePrice');
    expect(pizzaBasePriceValue).toHaveLength(1);
    expect(pizzaBasePriceValue.text()).toEqual("1");
  });
});
