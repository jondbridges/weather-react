import React from 'react';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';

describe('HomePage', () => {

  it('creates the home page content', () => {
    const component = renderer.create(
      <HomePage />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
