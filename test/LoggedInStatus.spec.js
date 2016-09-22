import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import LoggedInStatus from '../lib/components/LoggedInStatus';

describe('LoggedInStatus component', () => {

  const wrapper = shallow(<LoggedInStatus />);

  it('should render as a div', () => {
    assert.equal(wrapper.type(), 'div');
  });
});
