import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import IndexPage from '../index';
import App from '../../components/app';
import Pizzas from "../../components/pizzas";
import Cart from "../../components/cart";

describe("Index page", ()=>{
    let mountedIndexPage;

    beforeEach(()=>{
      mountedIndexPage = shallow(<IndexPage />);
    });

    it('renders without crashing', () => {
        shallow(<IndexPage />);
        expect(mountedIndexPage).toMatchSnapshot();
    });

    it('expect to have App component', () => {
        expect(mountedIndexPage.find(App)).toHaveLength(1);
    });

    it('expect to have Pizzas component', () => {
      expect(mountedIndexPage.find(Pizzas)).toHaveLength(1);
    });
});
