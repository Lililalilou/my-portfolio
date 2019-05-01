import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <div className="header__content-left">
            <h2 className="header__content-site">Portfolio</h2>
            <br/>
            <h1 className="header__content-name">Nelly Martin</h1>
          </div>
          <div className="header__content-right">
            <span>nelly.m@rtin.tech</span>
            <br/>
            <span>06 62 79 82 68</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
