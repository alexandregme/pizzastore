import React from 'react';
import { shallow } from 'enzyme';
import jest from 'jest-mock';
import expect from 'expect';
import Button from '../button';
import Checkbox from "../checkbox";

describe("Button", ()=>{
  let mountedButton, button;

  beforeEach(()=>{
    mountedButton = shallow(<Button />);
    button = mountedButton.find('button');
  });

  it('renders without crashing', () => {
    shallow(<Button />);
    expect(mountedButton).toMatchSnapshot();
  });

  it('expect to have button tag with default value', () => {
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('button');
  });

  it('expect the return undefined to function handleChange', () => {
    expect(button.props().onClick()).toBe(undefined);
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
