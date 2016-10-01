import React from 'react';
import Spinner from './Spinner';
import renderer from 'react-test-renderer';

describe('Spinner', () => {

  it('creates the spinner content', () => {
    const component = renderer.create(
      <Spinner />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('creates the spinner content with display text', () => {
    const component = renderer.create(
      <Spinner displayText={"Loading..."} />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});