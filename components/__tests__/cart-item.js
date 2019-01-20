import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { CartItem } from '../cart-item';
import Button from "../button";
import {CUSTOM_PIZZA} from "../../__mocks__";

describe("Cart Item", ()=>{
  let mountedCartItem;

  beforeEach(()=>{
    mountedCartItem = shallow(<CartItem />);
  });

  it('renders without crashing', () => {
    shallow(<CartItem />);
    expect(mountedCartItem).toMatchSnapshot();
  });

  it('expect to have default value for pizza name', () => {
    let pizzaNameValue = mountedCartItem.find('h5#pizzaName');
    expect(pizzaNameValue).toHaveLength(1);
    expect(pizzaNameValue.text()).toEqual('Pizza size - default pizza');
  });

  it('expect to have default value for pizza max toppings', () => {
    let pizzaMaxToppingValue = mountedCartItem.find('p#pizzaMaxToppings');
    expect(pizzaMaxToppingValue).toHaveLength(1);
    expect(pizzaMaxToppingValue.text()).toEqual("Max Toppings - unlimited toppings!");
  });

  it('expect to have default value for base price', () => {
    let pizzaBasePriceValue = mountedCartItem.find('p#pizzaBasePrice');
    expect(pizzaBasePriceValue).toHaveLength(1);
    expect(pizzaBasePriceValue.text()).toEqual("Base price - $0");
  });

  it('expect to have default value for total price', () => {
    let pizzaTotalPriceValue = mountedCartItem.find('p#pizzaTotalPrice');
    expect(pizzaTotalPriceValue).toHaveLength(1);
    expect(pizzaTotalPriceValue.text()).toEqual("Total price - $0");
  });

  it('expect to have Button component', () => {
    expect(mountedCartItem.find(Button)).toHaveLength(1);
  });
});

describe("Cart Custom component props", ()=>{
  let mountedCartItem;
  let props = {cartItem: CUSTOM_PIZZA};

  beforeEach(()=>{
    mountedCartItem = shallow(<CartItem {...props} />);
  });

  it('expect to have custom value for pizza name', () => {
    let pizzaNameValue = mountedCartItem.find('h5#pizzaName');
    expect(pizzaNameValue).toHaveLength(1);
    expect(pizzaNameValue.text()).toEqual('Pizza size - custom pizza');
  });

  it('expect to have custom value for pizza max toppings', () => {
    let pizzaMaxToppingValue = mountedCartItem.find('p#pizzaMaxToppings');
    expect(pizzaMaxToppingValue).toHaveLength(1);
    expect(pizzaMaxToppingValue.text()).toEqual("Max Toppings - 1");
  });

  it('expect to have custom value for base price', () => {
    let pizzaBasePriceValue = mountedCartItem.find('p#pizzaBasePrice');
    expect(pizzaBasePriceValue).toHaveLength(1);
    expect(pizzaBasePriceValue.text()).toEqual("Base price - $1");
  });

  it('expect to have custom value for total price', () => {
    let pizzaTotalPriceValue = mountedCartItem.find('p#pizzaTotalPrice');
    expect(pizzaTotalPriceValue).toHaveLength(1);
    expect(pizzaTotalPriceValue.text()).toEqual("Total price - $1");
  });
});
