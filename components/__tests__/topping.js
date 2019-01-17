import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Topping from '../topping';
import { CUSTOM_TOPPING } from "../../__mocks__";

describe("Topping", ()=>{
  let mountedTopping;
  beforeEach(()=>{
    mountedTopping = shallow(<Topping />);
  });

  it('renders without crashing', () => {
    shallow(<Topping />);
    expect(mountedTopping).toMatchSnapshot();
  });

  it('expect to have a input of the type checkbox', () => {
    let input = mountedTopping.find('input[type="checkbox"]');
    expect(input).toHaveLength(1);
  });

  it('expect to set the label default topping', () => {
    let label = mountedTopping.find('label');
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual('default topping - 0');
  });
});


describe("Topping Custom component props", ()=>{
  let mountedTopping;
  let props = {topping: CUSTOM_TOPPING};

  beforeEach(()=>{
    mountedTopping = shallow(<Topping {...props} />);
  });

  it('expect to set the label custom topping', () => {
    let label = mountedTopping.find('label');
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual('custom topping - 1');
  });
});

