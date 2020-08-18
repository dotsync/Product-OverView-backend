import React from 'react';
import { configure } from 'enzyme';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';

import ImageSlider from '../src/components/ImageSlider.jsx';
import ArrowButton from "../src/components/ArrowButton.jsx";
import Image from "../src/components/ImageSlider.jsx";

configure({ adapter: new Adapter() });

const images = [
  "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
]

const thumbnails = [
  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
]

describe('ImageSlider Component', () => {
  let shallow;
  let mount;

  beforeAll(() => {
    shallow = createShallow();
    mount = createMount();
  })

  it('Renders', () => {
    shallow(<ImageSlider images={images} thumbnails={thumbnails} />);
  });

  it('Assert required images prop', () => {
    expect(() => shallow(<ImageSlider />)).toThrow();
  });

  it('Refuse empty array images prop', () => {
    expect(() => shallow(<ImageSlider images={[]} thumbnails={[]} />)).toThrow();
  });

  it('Renders with arrows', () => {
    let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} />);
    expect(wrapper.find(ArrowButton)).toHaveLength(2);
  });

  it('Renders without arrows', () => {
    let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} arrows={false} />);
    expect(wrapper.find(ArrowButton)).toHaveLength(0);
  });

  it('Prop currentImage starts with 0', () => {
    let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} />);
    expect(wrapper.find('#imageComponent').prop('currentImage')).toEqual(0);
  });

  describe('Get prevImage function', () => {
    let mount;

    beforeAll(() => {
      mount = createMount();
    })

    it('Infinite loop for previous image button', () => {
      let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} />);
      let prevButton = wrapper.find(ArrowButton).at(0);
      prevButton.simulate('click');
      expect(wrapper.find('#imageComponent').prop('currentImage')).toEqual(3);
    });

    it('Previous Image in list', () => {
      let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} />);
      let prevButton = wrapper.find(ArrowButton).at(0);
      prevButton.simulate('click');
      prevButton.simulate('click');
      expect(wrapper.find('#imageComponent').prop('currentImage')).toEqual(2);
    });
  });

  describe('Get nextImage function', () => {
    let mount;

    beforeAll(() => {
      mount = createMount();
    })

    it('Next Image in list', () => {
      let wrapper = mount(<ImageSlider images={images.slice(0, 2)} thumbnails={thumbnails} />);
      let nextButton = wrapper.find(ArrowButton).at(1);
      nextButton.simulate('click');
      expect(wrapper.find('#imageComponent').prop('currentImage')).toEqual(1);
    });

    it('Infinite loop for next image button', () => {
      let wrapper = mount(<ImageSlider images={images.slice(0, 2)} thumbnails={thumbnails} />);
      let nextButton = wrapper.find(ArrowButton).at(1);
      nextButton.simulate('click');
      nextButton.simulate('click');
      expect(wrapper.find('#imageComponent').prop('currentImage')).toEqual(0);
    });
  });

  describe('onArrowClick Previous/Next Button', () => {
    let callCount = 0;
    let callbackCurrentImage = null;
    let mount;

    const testFunction = (currentImage) => {
      callCount++;
      callbackCurrentImage = currentImage;
    };

    beforeAll(() => {
      mount = createMount();
    })

    it('onArrowClick Next Button', () => {
      let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} onArrowClick={testFunction} />);
      let nextButton = wrapper.find('#nextButton');
      nextButton.simulate('click');
      expect(callCount).toEqual(1);
      expect(callbackCurrentImage).toEqual(1);
    });

    it('onArrowClick Previous Button', () => {
      let wrapper = mount(<ImageSlider images={images} thumbnails={thumbnails} onArrowClick={testFunction} />);
      let prevButton = wrapper.find('#prevButton');
      prevButton.simulate('click');
      expect(callCount).toEqual(2);
      // because wrapper is instantiated for each test, current image starts at 0 everytime. Previous click will go to 3
      expect(callbackCurrentImage).toEqual(3);
    });
  });

  describe('Full Screen Button', () => {
    it('should open the dialog component', () => {
      let wrapper = shallow(<ImageSlider images={images} thumbnails={thumbnails} />);
      let fullScreenButton = wrapper.find('#fullScreenButton').at(0);
      expect(wrapper.find('#fullScreenDialog').prop('open')).toBe(false);
      fullScreenButton.simulate('click');
      expect(wrapper.find('#fullScreenDialog').prop('open')).toBe(true);
    });
  });
});