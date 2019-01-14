import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Index from '../index';
import Layout from '../../components/layout';
import Pizzas from "../../components/pizzas";


describe("Index page", ()=>{
    let mountedIndex;

    beforeEach(()=>{
        mountedIndex = shallow(<Index />);
    });

    it('renders without crashing', () => {
        shallow(<Index />);
        expect(mountedIndex).toMatchSnapshot();
    });

    it('expect to have Layout component', () => {
        expect(mountedIndex.find(Layout)).toHaveLength(1);
    });

    it('expect to have Pizzas component', () => {
      expect(mountedIndex.find(Pizzas)).toHaveLength(1);
    });
});
