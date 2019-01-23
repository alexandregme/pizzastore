import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from "redux";
import reducers from "../../reducers";
import expect from 'expect';
import ConnectedPizzas, { Pizzas } from '../pizzas';
import Pizza from '../pizza';
import {PIZZAS, STORE} from "../../__mocks__";

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

describe('Connected Pizzas', () => {
  let connectedPizzas;
  let wrapper;

  beforeEach(() => {
    const store = createStore(reducers, STORE);
    wrapper = shallow(<ConnectedPizzas store={store} />);
    connectedPizzas = wrapper.find(Pizzas);
  });

  it('should have pizzas equals to mock consumed from store', () => {
    expect(connectedPizzas.props().pizzas).toBe(PIZZAS);
  });
});
