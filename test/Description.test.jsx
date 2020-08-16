import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Description from '../src/components/Description';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('<Description />', () => {
  let shallow;

  let data = {
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40",
    "features": [
        {
            "feature": "Fabric",
            "value": "100% Cotton"
        },
        {
            "feature": "Cut",
            "value": "Skinny"
        }
    ]
  }

  beforeAll(() => {
    shallow = createShallow();
  })

  it('should contain a slogan grid item', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists('#sloganItem')).toBe(true);
  });

  it('should contain a description', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists('#description')).toBe(true);
  });

  it('should render conditional messages before API call has resolved', () => {
    const wrapper = shallow(<Description currentProduct={null}/>);
    expect(wrapper.find("#noSlogan").text()).toBe('no current slogan');
  })

  it('should render data after API call has resolved', () => {
    const wrapper = shallow(<Description currentProduct={data}/>);
    expect(wrapper.find("#slogan").text()).toBe('Make yourself a morning person');
  })
});