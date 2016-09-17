import React from 'react';


const MessageContainer = (props) => {
  const messages = props.messages;

  return (
    <section className="MessageContainer">
    <ul>
      { messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
    </ul>
    </section>
  )
}

export default MessageContainer;
