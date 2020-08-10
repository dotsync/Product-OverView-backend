import React from 'react';
import Name from '../src/components/Name.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('<Name />', () => {

  it('should return a div with a "name" id', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Name />);
  const result = renderer.getRenderOutput();

  expect(result.props.id).toBe('name');
  });
})