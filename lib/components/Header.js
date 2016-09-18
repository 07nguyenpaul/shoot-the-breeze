import React from 'react';

// const filterMessages = (props) => {
//   //get value of what is typed in input field
//   //compare text with text in content of each messages
//   //map through messages to render only those with matching content
//   console.log(messages);
//   const { messages } = this.props;
//   const filterThroughMessageContent = messages.filter(m => {return m.content;});
//
//   return (
//     <li key={m.key}>
//     <div>{m.createdAt} {m.user.displayName}</div>
//     <div>{m.content}</div>
//     </li>
//   )
// }

const Header= (props) => {
  const { messages, user } = props;

  return (
    <header>
    <h1 className="Header--title">Shoot the Breeze</h1>
    {/* <input type="text" placeholder="Filter" onChange={this.props.filterMessages(messages)}/> */}
    <button className="Button--sort-up">Sort Up</button>
    <button className="Button--sort-down">Sort Down</button>
    </header>
  )
}


export default Header;
