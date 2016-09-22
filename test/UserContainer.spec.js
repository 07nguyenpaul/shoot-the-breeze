import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import UserContainer from '../lib/components/UserContainer';
import mockMessages from './helpers/mock-messages';

describe('UserContainer component', () => {

  const wrapper = shallow(<UserContainer users={mockMessages} />);

  it('should render as a section', () => {
    assert.equal(wrapper.type(), 'section');
  });

  it('should render users as a UL', () => {
    assert.lengthOf(wrapper.find('ul'), 1);
  });

  xit('should render users when users are passed in', () => {
    assert.lengthOf(wrapper.find('users'), 7);
  });
});
