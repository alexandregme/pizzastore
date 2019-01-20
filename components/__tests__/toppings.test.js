import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Toppings from '../toppings';
import Topping from "../topping";
import { TOPPINGS } from "../../__mocks__";

describe("Toppings", ()=>{
  let mountedToppings;
  beforeEach(()=>{
    mountedToppings = shallow(<Toppings />);
  });

  it('renders without crashing', () => {
    shallow(<Toppings />);
    expect(mountedToppings).toMatchSnapshot();
  });

  it('expect to show no pizzas found msg', () => {
    let notFoundMsg = mountedToppings.find('p');
    expect(notFoundMsg).toHaveLength(1);
    expect(notFoundMsg.text()).toEqual('There are no toppings available for this pizza.');
  });
});

describe("Toppings Custom component props", ()=>{
  let mountedToppings;
  let props = {
    toppings: TOPPINGS
  };

  beforeEach(()=>{
    mountedToppings = shallow(<Toppings {...props} />);
  });

  it('expect to render 7 pizza sizes', () => {
    let toppings = mountedToppings.find(Topping);
    expect(toppings.length).toEqual(7);
  });
});
