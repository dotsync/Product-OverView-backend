import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';

import ArrowButton from '../src/components/ArrowButton';

configure({adapter: new Adapter()})

describe('<ArrowButton />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  })

  it('should contain a clickable arrow', () => {
    const wrapper = shallow(<ArrowButton left />);
    expect(wrapper.exists('#clickableArrow')).toBe(true);
  });
});