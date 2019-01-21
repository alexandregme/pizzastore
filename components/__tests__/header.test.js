import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Header from '../header';
import SummaryCart from "../summary-cart";

describe("Head", ()=>{
    let mountedHeader;

    beforeEach(()=>{
        mountedHeader = shallow(<Header />);
    });

    it('renders without crashing', () => {
        shallow(<Header />);
        expect(mountedHeader).toMatchSnapshot();
    });

    it('expect to have header tag', () => {
        expect(mountedHeader.find('header')).toHaveLength(1);
    });

    it('expect to have nav tag', () => {
        expect(mountedHeader.find('nav')).toHaveLength(1);
    });

    it('expect to have one viewport meta tag', () => {
        expect(mountedHeader.find('Link[href="/"]')).toHaveLength(1);
    });

    it('expect to have one viewport meta tag', () => {
        expect(mountedHeader.find('Link[href="/cart"]')).toHaveLength(1);
    });

    it('expect to have SummaryCart component', () => {
      expect(mountedHeader.find(SummaryCart)).toHaveLength(1);
    });
});
