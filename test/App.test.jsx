import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, render} from 'enzyme';
import App from "../src/components/App.jsx";
import Header from "../src/components/Header.jsx";
import Announcement from '../src/components/Announcement.jsx';
import Images from '../src/components/Images.jsx';
import Reviews from '../src/components/Reviews.jsx';
import Name from '../src/components/Name.jsx';
import StyleSelector from '../src/components/StyleSelector.jsx';
import AddToBag from '../src/components/AddToBag.jsx';
import Share from '../src/components/Share.jsx';
import Description from '../src/components/Description.jsx';
import Details from '../src/components/Details.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should contain a header component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Header />)).toBeDefined();
  })

  it('should contain an announcement component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Announcement />)).toBeDefined();
  })

  it('should contain a carousel component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Images />)).toBeDefined();
  })

  it('should contain a reviews component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Reviews />)).toBeDefined();
  })

  it('should contain a name component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Name />)).toBeDefined();
  })

  it('should contain a styleSelector component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<StyleSelector />)).toBeDefined();
  })

  it('should contain an AddSelection component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<AddToBag />)).toBeDefined();
  })

  it('should contain a share component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Share />)).toBeDefined();
  })

  it('should contain a description component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Description />)).toBeDefined();
  })

  it('should contain a features component', () => {
    const wrapper = shallow(<App />);
    expect (wrapper.find(<Details />)).toBeDefined();
  })
})