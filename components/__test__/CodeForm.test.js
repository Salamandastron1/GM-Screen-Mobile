/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import CodeForm from '../CodeForm';

it('should match the shapshot', () => {
  const tree = shallow(<CodeForm />);
  expect(tree).toMatchSnapshot();
});