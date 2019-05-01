import React, { Component } from 'react';
//import SectionsContainer from '../SectionsContainer';
//import LabelsContainer from '../LabelsContainer';
//import Label from '../Label';
//import ButtonsContainer from '../ButtonsContainer';
import { sanitize } from '../sanitize';

class Category extends Component {
  render() {
    const { title, children } = this.props;
    // const { title, subtitle, content, labels, buttons, sections } = category.children;

    return (
      <div className="category" id={sanitize(title)} >
        <div className="category__container">
          <h2 className="category__title">{title}</h2>
          <div className="category__content">
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default Category;

// {category.subtitle && (
//   <div className="category__subtitle">{category.subtitle}</div>
// )}
// {category.content && (
//   <div className="category__content">{category.content}</div>
// )}
// {/* {category.labels && (
//   category.labels.forEach(label => {
//     <Label label={label} />
//   })
// )} */}
// {category.buttons && (
//   <ButtonsContainer buttons={category.buttons} />
// )}
// {category.sections && (
//   <SectionsContainer sections={category.sections} />
// )}