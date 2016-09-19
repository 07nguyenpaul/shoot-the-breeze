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
      filteredMessages: []
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
        filteredMessages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  get reference() {
    return firebase.database().ref(`user-list/${this.props.uid}`);
  }

  filterMessages(searchValue) {
    var filteredMessage = this.state.messages.filter(m => {
        if (m.content.indexOf(searchValue) >= 0) {
          return m;
        }
      });

    this.setState({filteredMessages: filteredMessage });
  }




  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <Header
          messages={this.state.messages}
          filterMessages={this.filterMessages.bind(this)}
        />
        <MessageContainer messages={this.state.filteredMessages} />
        <UserContainer messages={this.state.messages} />
        <Footer
          messages={this.state.filteredMessages}
          user= {this.state.user}
        />
      </div>
    )
  }
}
