import React from 'react';
import {shallow} from 'enzyme';
import Index from '../Index';

describe("Index", ()=>{
    let mountedIndex;
    beforeEach(()=>{
        mountedIndex = shallow(<Index />);
    });

    it('renders without crashing', () => {
        shallow(<Index />);
    });
});