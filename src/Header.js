import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    const { personalData } = this.props;
    return (
      <div className="header">
        <div className="header__left">
          <h2 className="header__left__site">{personalData.site}</h2>
          <br/>
          <h1 className="header__left__name">{personalData.name}</h1>
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
