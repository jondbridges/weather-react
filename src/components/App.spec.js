import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './header/Header';

describe('App', () => {

  let component, child;

  beforeEach(() => {
    child = <p>Child node</p>;
    component = shallow(<App children={child} />);
  });

  it('renders the Header', () => {
    expect(component.contains(<Header />)).toEqual(true);
  });

  it('renders the child node', () => {
    expect(component.contains(child)).toEqual(true);
  });
});