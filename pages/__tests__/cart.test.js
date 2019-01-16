import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import CartPage from '../cart';
import App from "../../components/app";
import Cart from "../../components/cart";

describe("Cart page", ()=>{
    let mountedCartPage;

    beforeEach(()=>{
      mountedCartPage = shallow(<CartPage />);
    });

    it('renders without crashing', () => {
        shallow(<CartPage />);
        expect(mountedCartPage).toMatchSnapshot();
    });

  it('expect to have App component', () => {
    expect(mountedCartPage.find(App)).toHaveLength(1);
  });

  it('expect to have Cart component', () => {
    expect(mountedCartPage.find(Cart)).toHaveLength(1);
  });
});
