/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('should match the shapshot', () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});