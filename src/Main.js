import React, { Component } from 'react';
import Category from './Category';

class Main extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map(category => (
          <Category key={category.title} category={category} />
        ))}
      </div>
    );
  }
};

export default Main;
