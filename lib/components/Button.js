import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.buttonClass}
        onClick={this.props.handleClick}
      >
      {this.props.text}
      </button>
    )
  }
}

export default Button;
