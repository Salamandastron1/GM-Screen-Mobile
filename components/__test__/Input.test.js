/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

it('should match the shapshot', () => {
  const tree = shallow(<Input />);
  expect(tree).toMatchSnapshot();
});