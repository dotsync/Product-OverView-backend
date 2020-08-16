import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import Name from '../src/components/Name.jsx';

configure({adapter: new Adapter()});

describe('<Name />', () => {
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

  it('should display a conditional message before API call resolves', () => {
    const wrapper = shallow(<Name currentProduct={null}/>);
    expect(wrapper.find('#noName').text()).toBe('no current product');
  });

  it('should display a name after API call resolves', () => {
    const wrapper = shallow(<Name currentProduct={data}/>);
    expect(wrapper.find('#name').text()).toBe('Morning Joggers');
  })
})