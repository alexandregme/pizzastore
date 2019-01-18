import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { SummaryCart } from '../summary-cart';
import TotalItems from "../total-items";
import TotalCost from "../total-cost";

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

