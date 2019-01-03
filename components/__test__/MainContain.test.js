/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import MainContain from '../MainContain';

it('should match the shapshot', () => {
  const tree = shallow(<MainContain />);
  expect(tree).toMatchSnapshot();
});