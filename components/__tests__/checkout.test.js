import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Checkout from '../checkout';

describe("Checkout", ()=>{
  let mountedCheckout;

  beforeEach(()=>{
    mountedCheckout = shallow(<Checkout />);
  });

  it('renders without crashing', () => {
    shallow(<Checkout />);
    expect(mountedCheckout).toMatchSnapshot();
  });

  it('expect to have h2 tag', () => {
    let h2 = mountedCheckout.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('Checkout');
  });

  it('expect to have a tag', () => {
    let h2 = mountedCheckout.find('a');
    expect(h2).toHaveLength(1);
  });
});
