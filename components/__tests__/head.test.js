import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Head from '../head';

describe("Head", ()=>{
    let mountedHead;

    beforeEach(()=>{
        mountedHead = shallow(<Head />);
    });

    it('renders without crashing', () => {
        shallow(<Head />);
        expect(mountedHead).toMatchSnapshot();
    });

    it('expect to have title tag', () => {
        let title = mountedHead.find('title');
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual('Pizza Store :)');
    });

    it('expect to have one charSet meta tag', () => {
        expect(mountedHead.find('meta[charSet]')).toHaveLength(1);
    });

    it('expect to have one viewport meta tag', () => {
        expect(mountedHead.find('meta[name="viewport"]')).toHaveLength(1);
    });
});

describe("Head Custom component props", ()=>{
    let mountedHead;
    let props = {
        title:'Custom title prop'
    };

    beforeEach(()=>{
        mountedHead = shallow(<Head {...props} />);
    });

    it('expect to have title tag', () => {
        let title = mountedHead.find('title');
        expect(title.text()).toEqual('Custom title prop');
    });
});