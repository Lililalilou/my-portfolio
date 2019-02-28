import React, { Component } from 'react';
import SectionsContainer from './SectionsContainer';

class Category extends Component {
  render() {
    const { category } = this.props;
    return (
      <section>
        <h2>{category.title}</h2>
        {category.subtitle && (
          <div>{category.subtitle}</div>
        )}
        {category.content && (
          <div>{category.content}</div>
        )}
        {category.sections && (
          <SectionsContainer sections={category.sections} />
        )}
      </section>
    );
  }
};

export default Category;
