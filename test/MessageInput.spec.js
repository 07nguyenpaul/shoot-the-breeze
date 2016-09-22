import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import { draftMessage } from '../lib/components/Application';
import MessageInput from '../lib/components/MessageInput';
import Button from '../lib/components/Button';

describe('MessageInput component', () => {

  const wrapper = shallow(<MessageInput />);

  it('should render as a div', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should render an input field for a message', () => {
    assert.lengthOf(wrapper.find('input'), 1);
  });

  it('should have an article for a Character Count', () => {
    assert.lengthOf(wrapper.find('article'), 1);
  });

  it('should render two Button components on the page', function() {
    assert.lengthOf(wrapper.find('Button'), 2);
  });

  it('should set the state of the draft message', () => {
    const wrapper = mount(<MessageInput draftMessage={draftMessage} />);

    assert.equal(wrapper.state('draftMessage'), "");
    wrapper.setState({ draftMessage: "I'm into it."});
    assert.equal(wrapper.state('draftMessage'), "I'm into it.");
  });
});
