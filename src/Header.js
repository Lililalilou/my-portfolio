import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    const { personalData } = this.props;
    return (
      <div className="header">
        <div className="header__left">
          <span>{personalData.site}</span>
          <br/>
          <span>{personalData.name}</span>
        </div>
        <div className="header__right">
          <span>{personalData.email}</span>
          <br/>
          <span>{personalData.phone}</span>
        </div>
      </div>
    );
  }
};

export default Header;
