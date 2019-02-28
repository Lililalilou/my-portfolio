import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const { categories } = this.props;
    console.log(categories[0].title);
    return (
      <ul>
        {categories.map(category => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>
    );
  }
};

export default Menu;
