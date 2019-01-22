import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Pizza } from '../pizza';
import Button from "../button";
import Toppings from "../toppings";
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
    let pizzaNameValue = mountedPizza.find('h5#pizzaName');
    expect(pizzaNameValue).toHaveLength(1);
    expect(pizzaNameValue.text()).toEqual('Pizza size - default pizza');
  });

  it('expect to have default value for pizza max toppings', () => {
    let pizzaMaxToppingValue = mountedPizza.find('p#pizzaMaxToppings');
    expect(pizzaMaxToppingValue).toHaveLength(1);
    expect(pizzaMaxToppingValue.text()).toEqual("Max Toppings - unlimited toppings!");
  });

  it('expect to have default value for base price', () => {
    let pizzaBasePriceValue = mountedPizza.find('p#pizzaBasePrice');
    expect(pizzaBasePriceValue).toHaveLength(1);
    expect(pizzaBasePriceValue.text()).toEqual("Base price - $0");
  });

  it('expect to have default value for total price', () => {
    let pizzaTotalPriceValue = mountedPizza.find('p#pizzaTotalPrice');
    expect(pizzaTotalPriceValue).toHaveLength(1);
    expect(pizzaTotalPriceValue.text()).toEqual("Total price - $0");
  });

  it('expect to have Toppings component', () => {
    expect(mountedPizza.find(Toppings)).toHaveLength(1);
  });

  it('expect to have Button component', () => {
    expect(mountedPizza.find(Button)).toHaveLength(1);
  });

  it('expect the return to be undefined to default function handleClick', () => {
    let button = mountedPizza.find(Button);
    expect(button.props().handleClick()).toBe(undefined);
  });
});

describe("Pizza Custom component props", ()=>{
  let mountedPizza;
  let props = {pizza:CUSTOM_PIZZA};

  beforeEach(()=>{
    mountedPizza = shallow(<Pizza {...props} />);
  });

  it('expect to have custom value for pizza name', () => {
    let pizzaNameValue = mountedPizza.find('h5#pizzaName');
    expect(pizzaNameValue).toHaveLength(1);
    expect(pizzaNameValue.text()).toEqual('Pizza size - custom pizza');
  });

  it('expect to have custom value for pizza max toppings', () => {
    let pizzaMaxToppingValue = mountedPizza.find('p#pizzaMaxToppings');
    expect(pizzaMaxToppingValue).toHaveLength(1);
    expect(pizzaMaxToppingValue.text()).toEqual("Max Toppings - 1");
  });

  it('expect to have custom value for base price', () => {
    let pizzaBasePriceValue = mountedPizza.find('p#pizzaBasePrice');
    expect(pizzaBasePriceValue).toHaveLength(1);
    expect(pizzaBasePriceValue.text()).toEqual("Base price - $1");
  });

  it('expect to have custom value for total price', () => {
    let pizzaTotalPriceValue = mountedPizza.find('p#pizzaTotalPrice');
    expect(pizzaTotalPriceValue).toHaveLength(1);
    expect(pizzaTotalPriceValue.text()).toEqual("Total price - $1");
  });
});
