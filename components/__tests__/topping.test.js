import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Topping } from '../topping';
import Checkbox from "../checkbox";
import { CUSTOM_TOPPING } from "../../__mocks__";

describe("Topping", ()=>{
  let mountedTopping;
  let checkbox;

  beforeEach(()=>{
    mountedTopping = shallow(<Topping />);
    checkbox = mountedTopping.find(Checkbox);
  });

  it('renders without crashing', () => {
    shallow(<Topping />);
    expect(mountedTopping).toMatchSnapshot();
  });

  it('expect to have Checkbox component', () => {
    expect(mountedTopping.find(Checkbox)).toHaveLength(1);
  });

  it('expect the return to be undefined to default handleChange', () => {
      expect(checkbox.props().handleChange()).toBe(undefined);
  });

  it('expect default to set props label', () => {
    expect(checkbox.props().label).toEqual('default topping - $0');
  });

  it('expect default to set props for isChecked', () => {
    expect(checkbox.props().isChecked).toEqual(true);
  });

  it('expect default to set props isDisabled', () => {
    expect(checkbox.props().isDisabled).toEqual(false);
  });

  it('expect default handleChange to be a function', () => {
    expect(checkbox.props().handleChange).toBeInstanceOf(Function);
  });
});

describe("Topping Custom component props", ()=>{
  let mountedTopping;
  let checkbox;
  let props = {
    topping: CUSTOM_TOPPING,
    disabledToppings:true
  };

  beforeEach(()=>{
    mountedTopping = shallow(<Topping {...props} />);
    checkbox = mountedTopping.find(Checkbox);
  });

  it('expect custom props isDisabled true', () => {
    expect(checkbox.props().isDisabled).toEqual(true);
  });
});

