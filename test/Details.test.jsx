import React from 'react';
import { configure } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import Details from '../src/components/Details.jsx';

configure({adapter: new Adapter()});

describe("<Details />", () => {
  let shallow;
  const data = {
    features: [
      {
        "feature": "Sole",
        "value": "null"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      },
    ],
  }

  beforeAll(() => {
    shallow = createShallow();
  })

  it('should render conditional messages before API call has resolved', () => {
    const wrapper = shallow(<Details currentProduct={null}/>);
    expect(wrapper.find("#noFeatures").text()).toBe('no current features');
  })

  it("should contain a features div after API call has resolved", () => {
    const wrapper = shallow(<Details currentProduct={data}/>);
    expect(wrapper.exists('#features')).toBe(true);
  })

  it("should correctly handle cases where feature value is null", () => {
    const wrapper = shallow(<Details currentProduct={data}/>);
    expect(wrapper.find('#noValue').text()).toBe("Sole");
  })

})