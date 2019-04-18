import React, { Component } from 'react';
import SectionsContainer from '../SectionsContainer';
import LabelsContainer from '../LabelsContainer';
import ButtonsContainer from '../ButtonsContainer';
import { sanitize } from '../sanitize';

class Category extends Component {
  render() {
    const { category } = this.props;

    return (
      <section className="category" id={sanitize(category.title)} >
        <h2 className="category__title">{category.title}</h2>
        {category.subtitle && (
          <div className="category__subtitle">{category.subtitle}</div>
        )}
        {category.content && (
          <div className="category__content">{category.content}</div>
        )}
        {category.labels && (
          <LabelsContainer labels={category.labels} />
        )}
        {category.buttons && (
          <ButtonsContainer buttons={category.buttons} />
        )}
        {category.sections && (
          <SectionsContainer sections={category.sections} />
        )}
      </section>
    );
  }
};

export default Category;
