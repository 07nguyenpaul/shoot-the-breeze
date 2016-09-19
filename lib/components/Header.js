import React from 'react';

const Header= (props) => {
  const { messages, user } = props;

  return (
    <header className="header">
    <h1 className="header-title">Shoot the Breeze</h1>
    <input type="text"
      className="filter-input-field"
      placeholder="Filter" onChange={function(e) {props.filterMessages(e.target.value) }}/>
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
