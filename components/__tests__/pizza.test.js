import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Pizza from '../pizza';

describe("Pizza", ()=>{
  let mountedPizza;
  beforeEach(()=>{
    mountedPizza = shallow(<Pizza />);
  });

  it('renders without crashing', () => {
    shallow(<Pizza />);
    expect(mountedPizza).toMatchSnapshot();
  });

  it('expect to have default value for pizza size', () => {
    let pizzaSize = mountedPizza.find('p');
    expect(pizzaSize).toHaveLength(1);
    expect(pizzaSize.text()).toEqual('pizza size');
  });
});

describe("Pizza Custom component props", ()=>{
  let mountedPizza;
  let props = {
    pizzaSize: 'SMALL'
  };

  beforeEach(()=>{
    mountedPizza = shallow(<Pizza {...props} />);
  });

  it('expect to set the name of the pizza', () => {
    let pizzaSize = mountedPizza.find('p');
    expect(pizzaSize).toHaveLength(1);
    expect(pizzaSize.text()).toEqual('SMALL');
  });
});
