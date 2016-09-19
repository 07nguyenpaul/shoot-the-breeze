import React from 'react';
import firebase, { reference, signIn } from '../firebase';


const LoggedInStatus = (props) => {
  // const messages = props.messages;
  const { user, draftMessage } = props;


  return (
    <div className="logged-in">
      {user ? <p className="user-status">Logged in as {user.displayName}</p> : <button onClick={() => signIn()} className="button-log">Sign In</button> }
    </div>
  )
}

export default LoggedInStatus;
