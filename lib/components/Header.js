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
    <header className="header">
    <h1 className="header-title">Shoot the Breeze</h1>
    {/* input field temporary for styling */}
        <input className="filter-input-field" type="text" placeholder="Filter" />
    {/* <input type="text"
      className="filter-input-field"
      placeholder="Filter" onChange={this.props.filterMessages(messages)}/> */}
    <div className="button-container">
      <button className="button-sort">Sort ⬆︎
      </button>
      <button className="button-sort">Sort ⬇︎
      </button>
    </div>
    </header>
  )
}


export default Header;
