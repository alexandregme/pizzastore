import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TotalItems from '../total-items';

describe("Total Items", ()=>{
  let mountedtoTotalItems;
  beforeEach(()=>{
    mountedtoTotalItems = shallow(<TotalItems />);
  });

  it('renders without crashing', () => {
    shallow(<TotalItems />);
    expect(mountedtoTotalItems).toMatchSnapshot();
  });

  it('expect to have default value for total cost', () => {
    let totalCostValue = mountedtoTotalItems.find('p');
    expect(totalCostValue).toHaveLength(1);
    expect(totalCostValue.text()).toEqual('Total items - 0');
  });
});

