import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <div className="header__content-left">
            <h2 className="header__content-site">Portfolio</h2>
            <h1 className="header__content-name">Nelly Martin</h1>
          </div>
          <div className="header__content-right">
            <p>nelly.m@rtin.tech</p>
            <p>06 62 79 82 68</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
