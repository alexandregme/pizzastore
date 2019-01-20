import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../../components/app';
import Checkout from "../../components/checkout";

describe("Checkout page", ()=>{
  let mountedCheckout;

  beforeEach(()=>{
    mountedCheckout = shallow(<Checkout />);
  });

  it('renders without crashing', () => {
    shallow(<Checkout />);
    expect(mountedCheckout).toMatchSnapshot();
  });

  it('expect to have App component', () => {
    expect(mountedCheckout.find(App)).toHaveLength(1);
  });

  it('expect to have Checkout component', () => {
    expect(mountedCheckout.find(Checkout)).toHaveLength(1);
  });
});
