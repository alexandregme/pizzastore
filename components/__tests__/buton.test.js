import React from 'react';
import { shallow } from 'enzyme';
import jest from 'jest-mock';
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

  it('call a function passed to it when clicked', ()=>{
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />);
    mountedButtonWithCallback.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
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
