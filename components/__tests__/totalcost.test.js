import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TotalCost from '../totalcost';

describe("Total Cost", ()=>{
  let mountedTotalCost;
  beforeEach(()=>{
    mountedTotalCost = shallow(<TotalCost />);
  });

  it('renders without crashing', () => {
    shallow(<TotalCost />);
    expect(mountedTotalCost).toMatchSnapshot();
  });
});

