/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Treasures from '../Treasures';

it('should match the shapshot', () => {
  const tree = shallow(<Treasures />);
  expect(tree).toMatchSnapshot();
});