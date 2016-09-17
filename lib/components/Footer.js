import React from 'react';
import firebase, { reference, signIn } from '../firebase';

import LoggedInStatus from './LoggedInStatus';

const Footer = (props) => {
  const { user, draftMessage } = props;

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  // }

  return (
    <footer>
      {/* <LoggedInStatus user={this.state.user} /> */}
      <div className="Logged-in">
        {user ? <p>Logged in as {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
      </div>
      <div className="MessageInput">
      <input
      placeholder="Message…"
      value={draftMessage}
      onChange={(e) => this.setState({ draftMessage: e.target.value })}
      />
      <article className="char-count" onChange={() => this.updateCount()}>140</article>
      <button onClick={() => this.addNewMessage()}>Submit</button>
      <button onClick={() => this.clearMessage()}>Clear</button>
      </div>
    </footer>
  )
}

export default Footer;
