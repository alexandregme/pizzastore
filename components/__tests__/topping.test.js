import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ConnectedTopping, { Topping } from '../topping';
import Checkbox from "../checkbox";
import {CUSTOM_TOPPING, STORE, TOPPINGS} from "../../__mocks__";
import {createStore} from "redux";
import reducers from "../../reducers";

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

describe('Connected Topping', () => {
  let connectedTopping;
  let wrapper;
  let props = {
    topping: CUSTOM_TOPPING,
    disabledToppings:true
  };

  beforeEach(() => {
    const store = createStore(reducers, STORE);
    wrapper = shallow(<ConnectedTopping {...props} store={store} />);
    connectedTopping = wrapper.find(Topping);
  });

  it('when dispatching handleToggleTopping should return undefined', () => {
    expect(connectedTopping.props().handleToggleTopping()).toBe(undefined);
  });
});


