import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Index from '../index';
import Layout from '../../components/layout';

describe("Index", ()=>{
    let mountedIndex;

    beforeEach(()=>{
        mountedIndex = shallow(<Index />);
    });

    it('renders without crashing', () => {
        shallow(<Index />);
    });

    it('expect to have Layout component', () => {
        expect(mountedIndex.find(Layout)).to.have.lengthOf(1);
    });
});