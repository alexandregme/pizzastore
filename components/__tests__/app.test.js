import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../app';

describe("App", ()=>{
  let mountedLayout;
  beforeEach(()=>{
    mountedLayout = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
    expect(mountedLayout).toMatchSnapshot();
  });

  it('expect to have Provider component', () => {
    expect(mountedLayout.find(Provider)).toHaveLength(1);
  });
});
