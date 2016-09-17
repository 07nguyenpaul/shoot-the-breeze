import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import MessageContainer from './MessageContainer';
import UserContainer from './UserContainer';
import Footer from './Footer';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    this.setState({ draftMessage: '' });
  }

  get reference() {
    return firebase.database().ref(`user-list/${this.props.uid}`);
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <header>
          <h1 className="Header--title">Shoot the Breeze</h1>
          <input type="text" placeholder="Filter" />
          <button className="Button--sort-up">Sort Up</button>
          <button className="Button--sort-down">Sort Down</button>
        </header>
        <MessageContainer messages={this.state.messages} />
        <UserContainer messages={this.state.messages} />
        <Footer messages={this.state.messages}
                user= {this.state.user}
        />
        {/* <footer>
          <div className="Logged-in">
            {user ? <p>Logged in as {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
          </div>
          <div className="MessageInput">
            <input
            placeholder="Message…"
            value={this.state.draftMessage}
            onChange={(e) => this.setState({ draftMessage: e.target.value })}
            />
            <article className="char-count" onChange={() => this.updateCount()}>140</article>
            <button onClick={() => this.addNewMessage()}>Submit</button>
            <button onClick={() => this.clearMessage()}>Clear</button>
          </div>
        </footer> */}
      </div>
    )
  }
}
