import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Header from '../src/components/Header';

// this line says, configure the adapter for this test file to be a new instance of the adaptor we imported on line 2, the enzyme adapter for react
configure ({ adapter: new Adapter()});

describe('<Header />', () => {
  it('should have a title "IO Silver"', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#title').text()).toBe("IO Silver")
  });
})