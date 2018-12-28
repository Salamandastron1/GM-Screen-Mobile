import React from 'react';
import App from '../App';
import TestRenderer from 'react-test-renderer';

it('should run', () => {
  const tree = TestRenderer.create(<App />);
  expect(tree).toMatchSnapshot();
});