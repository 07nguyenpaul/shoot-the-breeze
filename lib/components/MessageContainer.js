import React from 'react';
import moment from 'moment';

const loadMessages = (messages) => {
  return messages.map(m => {
    return (
      <li key={m.key}>
      <div>{moment(m.createdAt).format('MMMM Do, h:mm a')} {m.user.displayName}</div>
      <div>{m.content}</div>
      </li>
    )
  })
}


const MessageContainer = (props) => {
  const messages = props.messages.filter(m => { return m.user});

  return (
    <section className="MessageContainer">
    <ul>
      {loadMessages(messages)}
    </ul>
    </section>
  )
}

export default MessageContainer;
