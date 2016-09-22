import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import { draftMessage } from '../lib/components/Application';
import Button from '../lib/components/Button';

describe('Button component', () => {

  const button = shallow(<Button />);

  it('should render as a <button>', () => {
    assert.equal(button.type(), 'button');
  });

  it('should have props for draftMessage, buttonClass, and handleClick', () => {
    assert.isDefined(button.props('draftMessage'));
    assert.isDefined(button.props('buttonClass'));
    assert.isDefined(button.props('handleClick'));
  });
});
