import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { Link } from 'react-router';
import SearchContainer from '../search/SearchContainer';

describe('Header', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< Header />);
  });

  it('contains a nav', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('contains a Link component', () => {
    expect(wrapper.find(Link).length).toBe(1);
  });

  it('contains a SearchContainer component', () => {
    expect(wrapper.find(SearchContainer).length).toBe(1);
  });
});