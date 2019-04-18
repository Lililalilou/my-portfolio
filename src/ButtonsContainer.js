import React, { Component } from 'react';
import './ButtonsContainer.scss';

class ButtonsContainer extends Component {
  render() {
    const { buttons } = this.props;
    return (
      <div className="buttonsContainer">
        {buttons.map((button, id) => (
          <li key={id} button={button} className="buttonsContainer__entry">
            {button.title}
          </li>
        ))}
      </div> 
    );
  }
};

export default ButtonsContainer;
