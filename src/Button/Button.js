import React, { Component } from 'react';
import classnames from 'classnames';

class Button extends Component {
  handleClick = (src) => {
    window.open(src);
    return false;
  }
  render() {
    const { button, className } = this.props;
    return (
      <button
        className={classnames("button", className)}
        src={button.url}
        onClick={() => this.handleClick(button.url)}>
      {button.title}
      </button>
    );
  }
};

Button.defaultProps = {
  className: '',
};

export default Button;
