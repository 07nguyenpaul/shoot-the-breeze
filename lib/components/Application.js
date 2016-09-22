import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend, orderBy } from 'lodash';
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
      filteredMessages: [],
      userIsFiltered: false,
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
    let messages = this.state.messages.filter(m => {
        if (m.content.indexOf(searchValue) >= 0) {
          return m;
        }
      });
    this.setState({filteredMessages: messages });
  }

  messagesByUser(uid) {
    return this.state.messages.filter(m => {
        if (m.user.uid.indexOf(uid) >= 0) {
          return m;
        }
      });
  }

  filterByUser(uid) {
    if (this.state.userIsFiltered) {
      this.setState({ userIsFiltered: false, filteredMessages: this.state.messages });
    }
    else {
      this.setState({ filteredMessages: this.messagesByUser(uid), userIsFiltered: true, user: uid});
    }
  }

  sortMessagesAsc() {
    const { filteredMessages } = this.state;
    const messagesAscending = orderBy(filteredMessages, ['createdAt'], ['asc']);

    this.setState({filteredMessages: messagesAscending });
  }

  sortMessagesDesc() {
    const { filteredMessages } = this.state;
    const messagesDescending = orderBy(filteredMessages, ['createdAt'], ['desc']);

    this.setState({filteredMessages: messagesDescending });
  }

  deleteMessage(key) {
    const removingMessage = key.remove();
    this.setState({ messages: removingMessage});
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <Header
          messages={this.state.messages}
          filterMessages={this.filterMessages.bind(this)}
          handleSortAsc={this.sortMessagesAsc.bind(this)}
          handleSortDesc={this.sortMessagesDesc.bind(this)}
        />
        <MessageContainer
          messages={this.state.filteredMessages}
          deleteMessage={(e) => this.deleteMessage(e)}
       />
        <UserContainer
          messages={this.state.filteredMessages}
          filterByUser={(e) => this.filterByUser(e)}
        />
        <Footer
          messages={this.state.filteredMessages}
          user= {this.state.user}
        />
      </div>
    )
  }
}
