import React, { Component } from 'react';
import SectionsContainer from './SectionsContainer';
import { sanitize } from './sanitize';

class Category extends Component {
  render() {
    const { category } = this.props;

    return (
      <section id={sanitize(category.title)} >
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
