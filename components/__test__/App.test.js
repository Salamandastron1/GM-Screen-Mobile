/* eslint-disable */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

it('should run', () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});