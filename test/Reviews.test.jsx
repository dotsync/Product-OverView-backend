import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../src/components/Reviews.jsx';

configure({ adapter: new Adapter() });

describe('<Ratings />', () => {
  let shallow;
  let ratings = {
    4: 2,
    5: 1
  }

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should contain a ratings container', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists('#ratingsContainer')).toBe(true);
  });

  it('should render conditional statement before API call has resolved', () => {
    const wrapper = shallow(<Reviews ratings={null}/>);
    expect(wrapper.find('#noRatings').text()).toBe('no ratings right now')
  })

  it('should render a rating after API call has resolved', () => {
    const wrapper = shallow(<Reviews ratings={ratings}/>);
    expect(wrapper.exists('#ratings')).toBe(true);
  })

  it('should correctly calculate an average rating', () => {
    const wrapper = shallow(<Reviews ratings={ratings}/>);
    expect(wrapper.find('#ratings').prop('value')).toBe(4.333333333333333);
  })
});