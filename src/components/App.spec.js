import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './header/Header';

describe('App', () => {

  let wrapper, child;

  beforeEach(() => {
    child = <p>Child node</p>;
    wrapper = shallow(<App children={child} />);
  });

  it('renders the Header', () => {
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it('renders the child node', () => {
    expect(wrapper.contains(child)).toEqual(true);
  });
});