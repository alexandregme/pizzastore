import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import CheckoutPage from '../checkout';
import App from '../../components/app';
import Checkout from "../../components/checkout";

describe("Checkout page", ()=>{
  let mountedCheckoutPage;

  beforeEach(()=>{
    mountedCheckoutPage = shallow(<CheckoutPage />);
  });

  it('renders without crashing', () => {
    shallow(<CheckoutPage />);
    expect(mountedCheckoutPage).toMatchSnapshot();
  });

  it('expect to have App component', () => {
    expect(mountedCheckoutPage.find(App)).toHaveLength(1);
  });

  it('expect to have Checkout component', () => {
    expect(mountedCheckoutPage.find(Checkout)).toHaveLength(1);
  });
});
