/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import PlayerScreen from '../PlayerScreen';

it('should match the shapshot', () => {
  const tree = shallow(<PlayerScreen />);
  expect(tree).toMatchSnapshot();
});