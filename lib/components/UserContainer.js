import React from 'react';
import _ from 'lodash';

const loadUsers = users => {
  return users.map(m => {
    return (
      <li
        key={m.key}
      >
      {m.user.displayName} ({m.user.email})
      </li>
    )
  })
}

const UserContainer = (props) => {
  const messages = props.messages;
  const uniqUsers = _.uniqBy(messages, (pancake) => { if (pancake.user) return pancake.user.displayName }).filter(m => { return m.user });

  return (
    <section className="UserContainer">
    <h2>Users</h2>
    <ul>
      {loadUsers(uniqUsers)}
    </ul>
    </section>
  )
}

export default UserContainer;
