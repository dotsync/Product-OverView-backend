import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Description from '../src/components/Description';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('<Description />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  })

  it('should contain a slogan', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists('#slogan')).toBe(true);
  });

  it('should contain a description', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists('#description')).toBe(true);
  });
});