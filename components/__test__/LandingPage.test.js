/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';

it('should match the shapshot', () => {
  const tree = shallow(<LandingPage />);
  expect(tree).toMatchSnapshot();
});