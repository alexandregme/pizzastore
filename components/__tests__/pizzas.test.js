import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Pizzas } from '../pizzas';
import Pizza from '../pizza';
import { PIZZAS } from "../../__mocks__";

describe("Pizzas", ()=>{
  let mountedPizzas;
  beforeEach(()=>{
    mountedPizzas = shallow(<Pizzas />);
  });

  it('renders without crashing', () => {
    shallow(<Pizzas />);
    expect(mountedPizzas).toMatchSnapshot();
  });

  it('expect to show no pizzas found msg', () => {
    let notFoundMsg = mountedPizzas.find('h2');
    expect(notFoundMsg).toHaveLength(1);
    expect(notFoundMsg.text()).toEqual('No pizzas were found, plz come back soon.');
  });
});

describe("Pizzas Custom component props", ()=>{
  let mountedPizzas;
  let props = { pizzas: PIZZAS };

  beforeEach(()=>{
    mountedPizzas = shallow(<Pizzas {...props} />);
  });

  it('expect to render 3 pizza sizes', () => {
    let pizzas = mountedPizzas.find(Pizza);
    expect(pizzas.length).toEqual(3);
  });
});
