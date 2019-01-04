/* eslint-disable */

import { configure } from 'enzyme';
import mocks from 'react-native-jest-mocks';
import Adapter from 'enzyme-adapter-react-16';

mocks.initAll();

configure({ adapter: new Adapter() });