import React from 'react';
import _ from 'lodash';

const loadUsers = ( users, filterByUser ) => {
  // const { filterByUser } = props;
  return users.map(m => {
    return (
      <li
        className="user-name"
        key={m.key}
        onClick={(e) => filterByUser(m.user.uid)}
      >
      {m.user.displayName} ({m.user.email})
      </li>
    )
  })
}

const UserContainer = (props) => {

  const messages = props.messages;
  const uniqUsers = _.uniqBy(messages, (e) => { return e.user.displayName })

  return (
    <section className="user-container">
      <ul>
        <li className="user-title">Users</li>
        {loadUsers(uniqUsers, props.filterByUser)}
      </ul>
    </section>
  )
}

export default UserContainer;
