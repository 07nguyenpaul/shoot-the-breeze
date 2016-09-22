import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
require('locus');

import Application from '../lib/components/Application';
import Header from '../lib/components/Header';
import Button from '../lib/components/Button';

describe('Sort Messages', function() {
  it('should renders as a button', () => {
  const wrapper = shallow(<Button /> );
  assert.equal(wrapper.type(), 'button');
  });

  it('should render text inside of the button', () => {
    const wrapper = shallow(<Button text='Sort'/> );
    expect(wrapper.contains('Sort')).to.equal(true);
  });

  


});
