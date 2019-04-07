import React, { Component } from 'react';
import { sanitize } from '../sanitize';

class Menu extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul className="menu">
        {categories.map(category => (
          <li className="menu__entry" key={category.title}>
            <a className="menu__link" href={`#${sanitize(category.title)}`}>{category.title}</a>
          </li>
        ))}
      </ul>
    );
  }
};

export default Menu;
