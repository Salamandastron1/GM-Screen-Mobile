/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

it('should match the shapshot', () => {
  const tree = shallow(<Button />);
  expect(tree).toMatchSnapshot();
});