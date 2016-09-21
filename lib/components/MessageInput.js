import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import { pick, map, extend } from 'lodash';
import Button from './Button';


export default class MessageInput extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
    };
  }

  addNewMessage() {
    const { draftMessage } = this.state;
    const { user } = this.props;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    this.setState({ draftMessage: '' });
  }

  characterCount(draftMessage) {
    let maxText = 140;
    return (
    <p>{ maxText - draftMessage.length }</p>
    )
  }

  clearMessage(draftMessage) {
    return (
      this.setState({ draftMessage: ''})
    )
  }

  render() {
    const { user, draftMessage, message } = this.state;

    return (
      <div className="message-input">
        <input
          className="message-input-field"
          placeholder="Message…"
          value={draftMessage}
          maxLength={140}
          onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
        <article
          className="char-count">
          {this.characterCount(draftMessage)}
        </article>
        <div className="button-container">
          <Button
            draftMessage= {this.state.draftMessage}
            buttonClass="button-submit"
            text="Submit"
            handleClick={() => this.addNewMessage(this.state.draftMessage)} />
          <Button
            draftMessage= {this.state.draftMessage}
            buttonClass="button-clear"
            text="Clear"
            handleClick={() => this.clearMessage(draftMessage)} />
        </div>
      </div>
    );
  }
}
