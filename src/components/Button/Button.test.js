import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders button with passed props', () => {
  const component = renderer.create(
    <Button onClick={() => {}} label="this is test label" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('renders with 0 as an initial state', () => {
  const component = renderer.create(
    <Button onClick={() => {}} label="this is test label" />
  );
  const instance = component.getInstance();

  expect(instance.state.counter).toBe(0);
});

test('onClick function is being called once with state counter', () => {
  const fn = jest.fn();
  const component = renderer.create(
    <Button onClick={fn} label="this is test label" />
  );
  const instance = component.getInstance();

  instance.props.onClick();

  expect(fn.mock.calls.length).toBe(1);
});

test('onClick function is called with passed counter value', () => {
  const fn = jest.fn();
  const component = mount(
    <Button onClick={fn} label="this is test label" />
  );

  component.find('button').simulate('click');

  expect(component.state('counter')).toBe(1);
  expect(fn.mock.calls[0][0]).toBe(1);
});
