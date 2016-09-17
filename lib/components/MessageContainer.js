import React from 'react';


const MessageContainer = (props) => {
  const messages = props.messages;

  return (
    <section className="MessageContainer">
    <ul>
      { messages.map(m =>
        <li key={m.key}>
        <div>{m.createdAt} {m.user.displayName}</div>
        <div>{m.content}</div>
        </li>) }
    </ul>
    </section>
  )
}

export default MessageContainer;
