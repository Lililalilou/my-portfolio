import React, { Component } from 'react';
import { sanitize } from './sanitize';

class Menu extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map(category => (
          <li key={category.title}>
            <a href={`#${sanitize(category.title)}`}>{category.title}</a>
          </li>
        ))}
      </ul>
    );
  }
};

export default Menu;
