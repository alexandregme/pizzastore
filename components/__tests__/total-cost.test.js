import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TotalCost from '../total-cost';

describe("Total Cost", ()=>{
  let mountedTotalCost;
  beforeEach(()=>{
    mountedTotalCost = shallow(<TotalCost />);
  });

  it('renders without crashing', () => {
    shallow(<TotalCost />);
    expect(mountedTotalCost).toMatchSnapshot();
  });

  it('expect to have default value for total cost', () => {
    let totalCostValue = mountedTotalCost.find('p');
    expect(totalCostValue).toHaveLength(1);
    expect(totalCostValue.text()).toEqual('Total cost - $0');
  });
});

