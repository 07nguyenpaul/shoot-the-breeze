import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import MessageInput from './MessageInput';


import LoggedInStatus from './LoggedInStatus';

const Footer = (props) => {
  const { user, draftMessage, messages } = props;


  return (
    <footer>
      <LoggedInStatus user={user} />
      <MessageInput messages={messages}
                    user={user}
                    draftMessage={draftMessage}
      />

      {/* <div className="MessageInput">
      <input
      placeholder="Message…"
      value={draftMessage}
      onChange={(e) => this.setState({ draftMessage: e.target.value })}
      />
      <article className="char-count" onChange={() => this.updateCount()}>140</article>
      </div>
      <button onClick={() => this.addNewMessage()}>Submit</button>
      <button onClick={() => this.clearMessage()}>Clear</button> */}
    </footer>
  )
}

export default Footer;
