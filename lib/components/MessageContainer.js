import React from 'react';
import moment from 'moment';

const loadMessages = ( messages, deleteMessage) => {

  return messages.map(m => {
    return (
      <li key={m.key} className="message-block">
        <div className="message-date">
          {moment(m.createdAt).format('MMMM Do, h:mm a')}
          <span className="message-user">
          {m.user.displayName}
          </span>
          </div>
          <div className="message-content">
          {m.content}
        </div>
      </li>
    )
  })
}

const MessageContainer = (props) => {
  const messages = props.messages;

  return (
    <section className="message-container">
    <ul className="message-list">
      {loadMessages(messages, props.deleteMessage)}
    </ul>
    </section>
  )
}

export default MessageContainer;
