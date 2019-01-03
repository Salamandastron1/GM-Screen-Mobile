/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import CharacterForm from '../CharacterForm';

it('should match the shapshot', () => {
  const tree = shallow(<CharacterForm />);
  expect(tree).toMatchSnapshot();
});