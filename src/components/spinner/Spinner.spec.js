import React from 'react';
import Spinner from './Spinner';
import renderer from 'react-test-renderer';

describe('Spinner', () => {

  it('creates a fontawesome spinner with display text', () => {
    const component = renderer.create(
      <Spinner displayText={"Loading..."} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});