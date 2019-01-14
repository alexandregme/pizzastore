import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Button from '../button';

describe("Button", ()=>{
  let mountedButton;

  beforeEach(()=>{
    mountedButton = shallow(<Button />);
  });

  it('renders without crashing', () => {
    shallow(<Button />);
    expect(mountedButton).toMatchSnapshot();
  });

  it('expect to have button tag with default value', () => {
    let button = mountedButton.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('button');
  });
});

describe("Button Custom component props", ()=>{
  let mountedButton;
  let props = {
    label: 'custom button'
  };

  beforeEach(()=>{
    mountedButton = shallow(<Button {...props} />);
  });

  it('expect to set the label custom button', () => {
    let button = mountedButton.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('custom button');
  });
});
