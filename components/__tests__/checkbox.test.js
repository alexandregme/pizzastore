import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Checkbox from '../checkbox';
import jest from "jest-mock";

describe("Checkbox", ()=>{
  let mountedCheckbox;
  beforeEach(()=>{
    mountedCheckbox = shallow(<Checkbox />);
  });

  it('renders without crashing', () => {
    shallow(<Checkbox />);
    expect(mountedCheckbox).toMatchSnapshot();
  });

  it('expect to have a input of the type checkbox', () => {
    let input = mountedCheckbox.find('input[type="checkbox"]');
    expect(input).toHaveLength(1);
  });

  it('expect to set the label default label', () => {
    let label = mountedCheckbox.find('label');
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual('default label');
  });

  it('call a function passed to it when change', ()=>{
    const mockCallBack = jest.fn();
    const mountedInputWithCallback = shallow(<Checkbox handleChange={mockCallBack} />);
    mountedInputWithCallback.find('input').simulate('change');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});


describe("Checkbox Custom component props", ()=>{
  let mountedCheckbox;
  let props = {label: 'custom label'};

  beforeEach(()=>{
    mountedCheckbox = shallow(<Checkbox {...props} />);
  });

  it('expect to set the label custom label', () => {
    let label = mountedCheckbox.find('label');
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual('custom label');
  });
});

