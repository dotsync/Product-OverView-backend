import React from 'react';
import {configure} from 'enzyme';
import {createShallow, createMount} from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import StyleSelector from '../src/components/StyleSelector.jsx';

configure({adapter: new Adapter()});

describe('<StyleSelector />', () => {


  let shallow;
  let mount;
  let styles = [
    {
        "style_id": 57,
        "name": "Turquoise",
        "original_price": "174",
        "sale_price": "59",
        "default?": 1,
        "photos": [
            {
                "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
            },
            {
                "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
            }
        ],
        "skus": {
            "XS": 11,
            "S": 33,
            "M": 1,
            "L": 51,
            "XL": 55,
            "XXL": 19
        }
    },
    {
        "style_id": 58,
        "name": "Grey",
        "original_price": "192",
        "sale_price": "0",
        "default?": 0,
        "photos": [
            {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            },
            {
                "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            }
        ],
        "skus": {
            "XS": 4,
            "S": 0,
            "M": 48,
            "L": 6,
            "XL": 48,
            "XXL": 43
        }
    }
  ]

  let stylesWithoutThumbnails = [
    {
        "style_id": 58,
        "name": "Grey",
        "original_price": "192",
        "sale_price": "0",
        "default?": 0,
        "photos": [
            {
                "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            },
            {
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            }
        ],
        "skus": {
            "XS": 4,
            "S": 0,
            "M": 48,
            "L": 6,
            "XL": 48,
            "XXL": 43
        }
    }
  ]

  let currentProduct = {
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

  const dummyFunction = jest.fn();

  beforeAll(() => {
    shallow = createShallow();
    mount = createMount();

  })

  afterAll(() => {
    mount.cleanUp();
  })

  it("should not display a sale price if item sale price is '0'", () => {
    const wrapper = shallow(<StyleSelector styles={styles} currentProduct={currentProduct} selectedStyle={styles[1]} setSelectedStyle={dummyFunction}/>);
    expect(wrapper.exists('#sale-price')).toBe(false);
  })

  it("should display a sale price if item is on sale", () => {
    const wrapper = shallow(<StyleSelector styles={styles} currentProduct={currentProduct} selectedStyle={styles[0]} setSelectedStyle={dummyFunction}/>);
    expect(wrapper.find('#sale-price').text()).toBe("$59");
  })

  it('should execute setSelectedStyle when the select a size button is clicked', () => {
    const wrapper = mount(<StyleSelector styles={styles} currentProduct={currentProduct} selectedStyle={styles[0]} setSelectedStyle={dummyFunction}/>);
    const selectSizeButton = wrapper.find('#selectSize').at(0);
    selectSizeButton.simulate('click');
    expect(dummyFunction).toHaveBeenCalled();
  });

  it('should execute setSelectedStyle when an avatar button is clicked', () => {
    const wrapper = mount(<StyleSelector styles={styles} currentProduct={currentProduct} selectedStyle={styles[0]} setSelectedStyle={dummyFunction}/>);
    const avatarButton = wrapper.find('#avatarButton').at(0);
    avatarButton.simulate('click');
    expect(dummyFunction).toHaveBeenCalled();
  });

  it('should execute setSelectedStyle when an avatar button is clicked but there are no thumbnail images', () => {
    const wrapper = mount(<StyleSelector styles={stylesWithoutThumbnails} currentProduct={currentProduct} selectedStyle={stylesWithoutThumbnails[0]} setSelectedStyle={dummyFunction}/>);
    const avatarButton = wrapper.find('#imagelessAvatarButton').at(0);
    avatarButton.simulate('click');
    expect(dummyFunction).toHaveBeenCalled();
  });
})