import React from 'react';
import Button from './Button';

const Header= (props) => {
  const { messages, user } = props;



  return (
    <header className="header">
    <h1 className="header-title">Shoot the Breeze</h1>
    <input type="text"
      className="filter-input-field"
      placeholder="Filter"
      onChange={function(e) {props.filterMessages(e.target.value) }} />
    <div className="button-container">
      <Button
        buttonClass="button-sort"
        text="Sort ⬆︎"
        handleClick={props.handleSortAsc} />
      <Button
        buttonClass="button-sort"
        text="Sort ⬇︎"
        handleClick={props.handleSortDesc} />
    </div>
    </header>
  )
}


export default Header;
