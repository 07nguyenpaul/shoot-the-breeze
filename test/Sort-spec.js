import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
require('locus');

import Application from '../lib/components/Application';
import Header from '../lib/components/Header';
import Button from '../lib/components/Button';

describe('Sort Messages', function() {
  let message1 = {
    key: "-KS3GtKnWB_XZKjgb0iJ",
    content: "Scrbabble",
    createdAt: 1474319324550,
    user: {
        displayName: "Paul Nguyen",
        email: "helloitsme@gmail.com",
        uid: "oSMIlUTN5OZOVY9pYfEi1PXCv9q1"
    }
  };

  let message2 = {
    key: "-KS3ONDVgCurMmG_dP4-",
    content: "testing out a new message",
    createdAt: 1474321285995,
    user: {
        displayName: "MaryJane Valade",
        email: "helloitsyou@gmail.com",
        uid: "8opUzbSXdxOJcKgukMF4oIMPTu12"
    }
  };

  it('should renders as a button', function() {
  const wrapper = shallow(<Button /> );
  assert.equal(wrapper.type(), 'button');
  });

  it('should render text inside of the button', function(){
    const wrapper = shallow(<Button text='Sort'/> );
    expect(wrapper.contains('Sort')).to.equal(true);
  });

  xit('should render the messages in reverse chronological order', function() {
    const wrapper = mount(<Application />);
    wrapper.state().messages = [message1, message2];
    // wrapper.state().user = message.user.displayName

    let button = wrapper.find('.button-sort').simulate('click')
    expect(wrapper.state().messages).to.deep.equal([message2, message1]);
  });


});
