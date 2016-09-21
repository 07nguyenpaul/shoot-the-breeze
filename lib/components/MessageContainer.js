import React from 'react';
import moment from 'moment';


const loadMessages = ( messages) => {
  // var filtered = filteredMessages;

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
    <ul>
      {loadMessages(messages)}
    </ul>
    </section>
  )
}

export default MessageContainer;
