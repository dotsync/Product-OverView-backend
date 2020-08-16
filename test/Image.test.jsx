import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../src/components/Image.jsx';

configure({adapter: new Adapter()});

describe("<Image />", () => {
  let shallow;

  const src = 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'

  beforeAll(() => {
    shallow = createShallow();
  })

  it('should render conditional message if image src is unavialable', () => {
    const wrapper = shallow(<Image src={null}/>);
    expect(wrapper.exists("#noImage")).toBe(true);
  })

  it("should render an image when image source is available", () => {
    const wrapper = shallow(<Image src={src}/>);
    expect(wrapper.exists('#image')).toBe(true);
  })
})