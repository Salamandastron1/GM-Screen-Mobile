/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

it('should match the shapshot', () => {
  const tree = shallow(<Title />);
  expect(tree).toMatchSnapshot();
});