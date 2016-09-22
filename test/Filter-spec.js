import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
require('locus');

import Application from '../lib/components/Application';
import Header from '../lib/components/Header';

describe('Filter Messages', function() {
  it('should render as a <header>', function() {
    const wrapper = shallow(<Header />)
    assert.equal(wrapper.type(), 'header');
  });

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

  it('should set the filtered array to equal to the messages that match the search bar', function() {
    const wrapper = mount (<Application />);
    wrapper.state().messages = [message1, message2];

    const inputField = wrapper.find('.filter-input-field');
    inputField.simulate('change', {target: {searchValue: 'Scrbabble'}});
    expect(wrapper.state().filteredMessages).deep.equal([]);
  });

});
