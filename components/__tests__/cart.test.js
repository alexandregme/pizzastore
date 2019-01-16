import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Cart from '../cart';
import CartItem from "../cart-item";

describe("Cart", ()=>{
  let mountedCart;

  beforeEach(()=>{
    mountedCart = shallow(<Cart />);
  });

  it('renders without crashing', () => {
    shallow(<Cart />);
    expect(mountedCart).toMatchSnapshot();
  });

  it('expect to show no empty cart msg', () => {
    let emptyCart = mountedCart.find('span');
    expect(emptyCart).toHaveLength(1);
    expect(emptyCart.text()).toEqual('your cart is empty.');
  });
});

describe("Cart Custom component props", ()=>{
  let mountedCart;
  let props = {
    cartItems: ['SMALL', 'MEDIUM', 'LARGE']
  };

  beforeEach(()=>{
    mountedCart = shallow(<Cart {...props} />);
  });

  it('expect to render 3 items in the cart', () => {
    let cart = mountedCart.find(CartItem);
    expect(cart.length).toEqual(3);
  });
});
