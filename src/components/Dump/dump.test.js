import React from 'react';
import Dump from './Dump';
import renderer from 'react-test-renderer';

test('dump components renders initially', () => {
  const component = renderer.create(
    <Dump onChange={() => {}} label="Hi i am a dump component" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
