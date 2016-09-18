import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import { pick, map, extend } from 'lodash';


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
      <div className="MessageInput">
        <input
          placeholder="Message…"
          value={draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
        <article
          className="char-count">
          {this.characterCount(draftMessage)}
        </article>
      <button onClick={() => this.addNewMessage(this.state.draftMessage)}>Submit</button>
      <button onClick={() => this.clearMessage(draftMessage)}>Clear</button>
      </div>
    );
  }
}
