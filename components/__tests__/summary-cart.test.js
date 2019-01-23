import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createStore } from "redux";
import ConnectedSummaryCart, { SummaryCart } from '../summary-cart';
import TotalItems from "../total-items";
import TotalCost from "../total-cost";
import { STORE } from "../../__mocks__";
import reducers from "../../reducers";

describe("Summary Cart", ()=>{
  let mountedSummaryCart;
  beforeEach(()=>{
    mountedSummaryCart = shallow(<SummaryCart />);
  });

  it('renders without crashing', () => {
    shallow(<SummaryCart />);
    expect(mountedSummaryCart).toMatchSnapshot();
  });

  it('expect to have Provider component', () => {
    expect(mountedSummaryCart.find(TotalItems)).toHaveLength(1);
  });

  it('expect to have Provider component', () => {
    expect(mountedSummaryCart.find(TotalCost)).toHaveLength(1);
  });
});

describe('Connected SummaryCart', () => {
  let connectedSummaryCart;
  let wrapper;

  beforeEach(() => {
    const store = createStore(reducers, STORE);
    wrapper = shallow(<ConnectedSummaryCart store={store} />);
    connectedSummaryCart = wrapper.find(SummaryCart);
  });

  it('should have totalItems equals to 0 consumed from store', () => {
    expect(connectedSummaryCart.props().totalItems).toBe(0);
  });

  it('should have totalCost equals to 0 consumed from store', () => {
    expect(connectedSummaryCart.props().totalCost).toBe(0);
  });
});
