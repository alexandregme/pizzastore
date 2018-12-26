import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Cart from '../cart';
import Layout from '../../components/layout';

describe("Cart page", ()=>{
    let mountedCart;

    beforeEach(()=>{
        mountedCart = shallow(<Cart />);
    });

    it('renders without crashing', () => {
        shallow(<Cart />);
        expect(mountedCart).toMatchSnapshot();
    });

    it('expect to have Layout component', () => {
        expect(mountedCart.find(Layout)).toHaveLength(1);
    });
});