import React from 'react';
import { mount } from 'enzyme';
import SearchContainer from './SearchContainer';
import Search from './Search';

describe('SearchContainer', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <SearchContainer />,
      { context: { router: { push: jest.fn() } } }
    );
  });

  it('contains a Search component', () => {
    expect(wrapper.find(Search).length).toBe(1);
  });

  it('should have an initial cityState state', () => {
    expect(wrapper.state().cityState).toBeDefined();
  });

  it('should update the cityState state on change', () => {
    const searchInput = wrapper.find('input');
    searchInput.simulate('change', { target: {value: 'Seattle' } });

    expect(wrapper.state().cityState).toEqual('Seattle');
  });

  it('should push new route to forecast/cityState on submit with cityState set', () => {
    wrapper.setState({ cityState: 'St. Louis' });
    wrapper.find('button').simulate('click');

    expect(wrapper.context().router.push).lastCalledWith('/forecast/St. Louis');
  });

  it('should not push new route when cityState is falsy', () => {
    expect(wrapper.state().cityState).toBeFalsy();
    
    expect(wrapper.context().router.push).not.toHaveBeenCalled();
  });
});