import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';

import App from "../src/components/App.jsx";
import Header from "../src/components/Header.jsx";
import Announcement from '../src/components/Announcement.jsx';
import Images from '../src/components/Images.jsx';
import Reviews from '../src/components/Reviews.jsx';
import Name from '../src/components/Name.jsx';
import StyleSelector from '../src/components/StyleSelector.jsx';
import Description from '../src/components/Description.jsx';
import Details from '../src/components/Details.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  })

  it('should contain a header component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#header")).toBe(true);
  })

  it('should contain an announcement component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#announcement")).toBe(true);
  })

  it('should contain a images component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#images")).toBe(true);
  })

  it('should contain a reviews component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#reviews")).toBe(true);
  })

  it('should contain a name component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#name")).toBe(true);
  })

  it('should contain a styleSelector component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#styleSelector")).toBe(true);
  })

  it('should contain a description component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#description")).toBe(true);
  })

  it('should contain a details component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.exists("#details")).toBe(true);
  })
})