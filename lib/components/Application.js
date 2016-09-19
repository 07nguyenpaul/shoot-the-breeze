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

  sortMessagesAsc() {
    const { messages } = this.state;
    const messagesAscending = orderBy(messages, ['createdAt'], ['asc']);

    this.setState({messages: messagesAscending });
    console.log(messagesAscending);
  }

  sortMessagesDesc() {
    const { messages } = this.state;
    const messagesDescending = orderBy(messages, ['createdAt'], ['desc']);

    this.setState({messages: messagesDescending });
    console.log(messagesDescending);
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
          // filtered={this.state.filteredMessages}
          messages={this.state.messages}

       />
        <UserContainer messages={this.state.messages} />
        <Footer
          messages={this.state.filteredMessages}
          user= {this.state.user}
        />
      </div>
    )
  }
}
