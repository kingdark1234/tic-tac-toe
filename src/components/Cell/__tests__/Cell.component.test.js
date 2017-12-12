import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';

test('Cell: title o', () => {
  const cellClickHandler = () => {};
  const snapshot = renderer.create(<Cell data='o' cellClickHandler={cellClickHandler} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('Cell: title x', () => {
  const cellClickHandler = () => {};
  const snapshot = renderer.create(<Cell data='x' cellClickHandler={cellClickHandler} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});