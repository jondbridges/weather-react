import React from 'react';
import Spinner from './Spinner';
import renderer from 'react-test-renderer';

describe('Spinner', () => {

  it('creates the spinner content', () => {
    const wrapper = renderer.create(
      <Spinner />
    );

    const tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('creates the spinner content with display text', () => {
    const wrapper = renderer.create(
      <Spinner displayText={"Loading..."} />
    );

    const tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();
  });
});