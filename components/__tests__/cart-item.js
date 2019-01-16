import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import CartItem from '../cart-item';

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
});

describe("Cart Custom component props", ()=>{
  let mountedCartItem;
  let props = {
    cartItem: 'SMALL'
  };

  beforeEach(()=>{
    mountedCartItem = shallow(<CartItem {...props} />);
  });

  it('expect to set the name of the cart item', () => {
    let cartItem = mountedCartItem.find('p');
    expect(cartItem).toHaveLength(1);
    expect(cartItem.text()).toEqual('SMALL');
  });
});
