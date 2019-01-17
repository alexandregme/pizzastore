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

  it('expect to have default value for cart item', () => {
    let cartItem = mountedCartItem.find('p');
    expect(cartItem).toHaveLength(1);
    expect(cartItem.text()).toEqual('cart item');
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
