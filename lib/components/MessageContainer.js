import React from 'react';
import moment from 'moment';

const loadMessages = (messages) => {
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
  // debugger
  const messages = props.messages.filter(m => { return m.user});

  return (
    <section className="message-container">
    <ul>
      {loadMessages(messages)}
    </ul>
    </section>
  )
}

export default MessageContainer;
