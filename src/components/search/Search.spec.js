import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search', () => {

  let wrapper;
  const mockSubmitSearch = jest.fn();
  const mockUpdateSearch = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <Search
        onSubmitSearch={mockSubmitSearch}
        onUpdateSearch={mockUpdateSearch} />
    );
  });

  it('should have an input for searching', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should have a button for submitting', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should have props for handling updating and submitting search', () => {
    expect(wrapper.props().onSubmitSearch).toBe(mockSubmitSearch);
    expect(wrapper.props().onUpdateSearch).toBe(mockUpdateSearch);
  });

  it('should call onSubmitSearch prop when button clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockSubmitSearch).toHaveBeenCalledTimes(1);
  });

  it('should call onUpdateSearch prop on change of input', () => {
    wrapper.find('input').simulate('change');
    expect(mockUpdateSearch).toHaveBeenCalledTimes(1);
  });

});
