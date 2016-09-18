import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import MessageInput from './MessageInput';
import LoggedInStatus from './LoggedInStatus';

const Footer = (props) => {
  const { user, draftMessage, messages } = props;


  return (
    <footer>
      <LoggedInStatus user={user} />
      <MessageInput
        messages={messages}
        user={user}
        draftMessage={draftMessage}
      />
    </footer>
  )
}

export default Footer;
