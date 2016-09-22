import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import Header from '../lib/components/Header';
import Button from '../lib/components/Button';

describe('Header component', function() {
  const wrapper = shallow(<Header />)

  it('should render as a <header>', function() {
    assert.equal(wrapper.type(), 'header');
  });

  it('should render a title as a <h1>', function() {
    assert.lengthOf(wrapper.find('h1'), 1);
  });

  it('should render an <input> field for search', function() {
    assert.lengthOf(wrapper.find('input'), 1);
  });

  it('should render two Button components on the page', function() {
    assert.lengthOf(wrapper.find('Button'), 2);
  });

});
