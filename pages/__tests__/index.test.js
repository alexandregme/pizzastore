import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Index from '../index';
import App from '../../components/app';
import Pizzas from "../../components/pizzas";
import Cart from "../../components/cart";

describe("Index page", ()=>{
    let mountedIndex;

    beforeEach(()=>{
        mountedIndex = shallow(<Index />);
    });

    it('renders without crashing', () => {
        shallow(<Index />);
        expect(mountedIndex).toMatchSnapshot();
    });

    it('expect to have App component', () => {
        expect(mountedIndex.find(App)).toHaveLength(1);
    });

    it('expect to have Pizzas component', () => {
      expect(mountedIndex.find(Pizzas)).toHaveLength(1);
    });

    it('expect to have Pizzas component', () => {
      expect(mountedIndex.find(Cart)).toHaveLength(1);
    });
});
