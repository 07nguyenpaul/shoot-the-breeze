import React from 'react';

const loadMessages = (messages) => {
  return messages.map(m => {
    return (
      <li key={m.key}>
      <div>{m.createdAt} {m.user.displayName}</div>
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
