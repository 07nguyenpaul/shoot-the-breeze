import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should allow us to set messages array as state', () => {
    const wrapper = mount(<Application />);
    wrapper.state().messages = ['displayName', 'email', 'uid'];
    expect(wrapper.state().messages.length).to.equal(3);
  });

  it('should allow us to set a draftMessages array as state', () => {
    const wrapper = mount(<Application />);

    wrapper.setState({ draftMessage: "I'm into it."});
    assert.equal(wrapper.state('draftMessage'), "I'm into it.");
  });

  it('should allow us to set a user state ', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.state.user).to.equal(undefined);
    wrapper.state().user = 'Paul';
    expect(wrapper.state().user).to.equal('Paul');
  });

  it('should allow us to set a the sort state', () => {
    const wrapper = mount(<Application />);
    wrapper.state().userIsFiltered = false;
    expect(wrapper.state().userIsFiltered).to.equal(false);
  });

  it('should allow us to set filteredMessages array as state', () => {
    const wrapper = mount(<Application />);
    wrapper.state().filteredMessages = ['displayName', 'email', 'uid'];
    expect(wrapper.state().filteredMessages.length).to.equal(3);
  });
});
