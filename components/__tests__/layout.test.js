import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../layout';
import Head from "../head";

describe("Layout", ()=>{
    let mountedIndex;
    beforeEach(()=>{
        mountedIndex = shallow(<Layout />);
    });

    it('renders without crashing', () => {
        shallow(<Layout />);
        expect(mountedIndex).toMatchSnapshot();
    });

    it('expect to have Head component', () => {
        expect(mountedIndex.find(Head)).toHaveLength(1);
    });
});