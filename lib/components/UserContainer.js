import React from 'react';
import _ from 'lodash';


const UserContainer = (props) => {
  const messages = props.messages;
  const uniqUsers = _.uniqBy(messages, (e) => { return e.user.displayName })
  return (
    <section className="UserContainer">
    <h2>Users</h2>
    <ul>
      { uniqUsers.map(m => <li key={m.key}>{m.user.displayName} ({m.user.email})</li>) }
    </ul>
    </section>
  )
}

export default UserContainer;


// const loadUsers = (props) => {
//   // const messages = props.messages;
//   const { messages, user } = props;
//
//   return messages.user.map(m => {
//     return (
//       <li
//         key={m.key}
//       >
//         {m.user.displayName}
//         {m.user.email}
//       </li>
//     )
//   })
// }
//
// // const UserContainerDOMBuilders = {
// //   loadUsers: users => {
// //
// //   }
// // }
// //
// // const { loadUsers } = UserContainerDOMBuilders
//
// const UserContainer = (props) => {
//   const { messages, users } = props
//   // same as -> const users = props.users
//   // also: const { users, favoriteDrinks } = props
//   // if props had a favoriteDrinks key
//   // -> you will now have two available vairables since they match the key names
//
//   return (
//     <section className="UserContainer">
//       <h2 className="UserContainerTitle">Users</h2>
//       <ul>
//         {loadUsers(messages, users)}
//       </ul>
//     </section>
//   )
// }
//
// export default UserContainer;
