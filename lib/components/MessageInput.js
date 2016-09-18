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

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    this.setState({ draftMessage: '' });
  }

  // clearMessage() {
  //
  // }

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
          className="char-count"
          onChange={() => this.updateCount()}>
          140
        </article>
      <button onClick={() => this.addNewMessage()}>Submit</button>
      <button onClick={() => this.clearMessage()}>Clear</button>
      </div>
    );
  }
}
