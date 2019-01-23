import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Layout from '../layout';
import Head from "../head";

describe("Layout", ()=>{
    let mountedLayout;
    beforeEach(()=>{
      mountedLayout = shallow(<Layout />);
    });

    it('renders without crashing', () => {
        shallow(<Layout />);
        expect(mountedLayout).toMatchSnapshot();
    });

    it('expect to have Head component', () => {
        expect(mountedLayout.find(Head)).toHaveLength(1);
    });
});
