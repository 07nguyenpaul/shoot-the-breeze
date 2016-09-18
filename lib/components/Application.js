import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Header from './Header';
import MessageContainer from './MessageContainer';
import UserContainer from './UserContainer';
import Footer from './Footer';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
      filter: ''
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

  get reference() {
    return firebase.database().ref(`user-list/${this.props.uid}`);
  }

  filterMessages(messages) {
    //get value of what is typed in input field
    //compare text with text in content of each messages
    //map through messages to render only those with matching content

    console.log(messages);
    const filterThroughMessageContent = messages.filter(m => {return m.content;});

    return (
      <li key={m.key}>
      <div>{m.createdAt} {m.user.displayName}</div>
      <div>{m.content}</div>
      </li>
    )
  }




  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <Header messages={this.state.messages} />
        {/* <header>
          <h1 className="Header--title">Shoot the Breeze</h1>
          <input type="text" placeholder="Filter" />
          <button className="Button--sort-up">Sort Up</button>
          <button className="Button--sort-down">Sort Down</button>
        </header> */}
        <MessageContainer messages={this.state.messages} />
        <UserContainer messages={this.state.messages} />
        <Footer
          messages={this.state.messages}
          user= {this.state.user}
        />
      </div>
    )
  }
}
