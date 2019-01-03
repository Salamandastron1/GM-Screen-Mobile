/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import CardSection from '../CardSection';

it('should match the shapshot', () => {
  const tree = shallow(<CardSection />);
  expect(tree).toMatchSnapshot();
});