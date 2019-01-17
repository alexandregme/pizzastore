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

  it('expect to have default value for item name', () => {
    let itemNameValue = mountedCartItem.find('p.pizzaName');
    expect(itemNameValue).toHaveLength(1);
    expect(itemNameValue.text()).toEqual('default pizza');
  });

  it('expect to have default value for item max toppings', () => {
    let itemMaxToppingValue = mountedCartItem.find('p.pizzaMaxToppings');
    expect(itemMaxToppingValue).toHaveLength(1);
    expect(itemMaxToppingValue.text()).toEqual("0");
  });

  it('expect to have default value for item base price', () => {
    let itemBasePriceValue = mountedCartItem.find('p.pizzaBasePrice');
    expect(itemBasePriceValue).toHaveLength(1);
    expect(itemBasePriceValue.text()).toEqual("0");
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

  it('expect to have default value for item name', () => {
    let itemNameValue = mountedCartItem.find('p.pizzaName');
    expect(itemNameValue).toHaveLength(1);
    expect(itemNameValue.text()).toEqual('custom pizza');
  });

  it('expect to have default value for item max toppings', () => {
    let itemMaxToppingValue = mountedCartItem.find('p.pizzaMaxToppings');
    expect(itemMaxToppingValue).toHaveLength(1);
    expect(itemMaxToppingValue.text()).toEqual("1");
  });

  it('expect to have default value for item base price', () => {
    let itemBasePriceValue = mountedCartItem.find('p.pizzaBasePrice');
    expect(itemBasePriceValue).toHaveLength(1);
    expect(itemBasePriceValue.text()).toEqual("1");
  });
});
