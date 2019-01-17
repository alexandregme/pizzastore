import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Topping } from '../topping';
import Checkbox from "../checkbox";

describe("Topping", ()=>{
  let mountedTopping;
  beforeEach(()=>{
    mountedTopping = shallow(<Topping />);
  });

  it('renders without crashing', () => {
    shallow(<Topping />);
    expect(mountedTopping).toMatchSnapshot();
  });

  it('expect to have Checkbox component', () => {
    expect(mountedTopping.find(Checkbox)).toHaveLength(1);
  });
});

