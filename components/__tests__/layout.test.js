import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../layout';

describe("Layout", ()=>{
    let mountedIndex;
    beforeEach(()=>{
        mountedIndex = shallow(<Layout />);
    });

    it('renders without crashing', () => {
        shallow(<Layout />);
    });
});