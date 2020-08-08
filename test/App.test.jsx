import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import App from "../src/components/App";
import Header from "../src/components/Header";

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should contain a header component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Header />)).toBe(true);
  })

  it('should contain an announcement component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Announcement />)).toBe(true);
  })

  it('should contain a carousel component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Images />)).toBe(true);
  })

  it('should contain a reviews component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Reviews />)).toBe(true);
  })

  it('should contain a name component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Name />)).toBe(true);
  })

  it('should contain a styleSelector component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<StyleSelector />)).toBe(true);
  })

  it('should contain an AddSelection component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<AddSelection />)).toBe(true);
  })

  it('should contain a share component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Share />)).toBe(true);
  })

  it('should contain a description component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Description />)).toBe(true);
  })

  it('should contain a features component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.contains(<Features />)).toBe(true);
  })
})