import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ConnectedCart, { Cart } from '../cart';
import CartItem from '../cart-item';
import {PIZZAS, STORE} from "../../__mocks__";
import {createStore} from "redux";
import reducers from "../../reducers";

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
    let emptyCart = mountedCart.find('h2');
    expect(emptyCart).toHaveLength(1);
    expect(emptyCart.text()).toEqual('Your cart is empty, order some pizza :)');
  });
});

describe("Cart Custom component props", ()=>{
  let mountedCart;
  let props = { cartItems: PIZZAS };

  beforeEach(()=>{
    mountedCart = shallow(<Cart {...props} />);
  });

  it('expect to render 3 items in the cart', () => {
    let cart = mountedCart.find(CartItem);
    expect(cart.length).toEqual(3);
  });
});

describe('Connected Pizzas', () => {
  let connectedCart;
  let wrapper;

  beforeEach(() => {
    const store = createStore(reducers, STORE);
    wrapper = shallow(<ConnectedCart store={store} />);
    connectedCart = wrapper.find(Cart);
  });

  it('should have pizzas equals to mock consumed from store', () => {
    expect(connectedCart.props().cartItems).toBe(PIZZAS);
  });
});
