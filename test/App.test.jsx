import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from '../src/components/App';
import Header from '../src/components/Header';

configure({ adapter: new Adapter() });

test('Should contain the header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true);
});