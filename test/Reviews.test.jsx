import React from 'react';
import Reviews from '../src/components/Reviews';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Basic Rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Reviews />);
  });

  test('Should contain a ratings div', () => {
    expect(wrapper.exists('#reviews')).toBe(true);
  });
});

describe('Displaying metadata', () => {
  let wrapper;

  beforeEach(() => {
    let ratings = {
      4: 2,
      5: 1
    }

    wrapper = shallow(<Reviews />);
  });

  test('Should render a ratings component', () => {
    expect(wrapper.find('#rating-component')).toBeDefined();
  });

  // test('Should calculate rating', () => {
  //   expect(wrapper.find('#rating-component').value).toBe('4.3');
  // })

})