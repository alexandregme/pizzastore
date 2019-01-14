import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Button from '../Button';

describe("Button", ()=>{
  let mountedButton;

  beforeEach(()=>{
    mountedButton = shallow(<Button />);
  });

  it('renders without crashing', () => {
    shallow(<Button />);
    expect(mountedButton).toMatchSnapshot();
  });

  it('expect to have button tag', () => {
    expect(mountedButton.find('button')).toHaveLength(1);
  });
});
