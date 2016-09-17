import React from 'react';
import firebase, { reference, signIn } from '../firebase';


const LoggedInStatus = (props) => {
  const messages = props.messages;

  return (
    <div className="Logged-in">
      {user ? <p>Logged in as {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
    </div>
  )
}

export default LoggedInStatus;
