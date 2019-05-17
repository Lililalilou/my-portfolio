import React, { Component } from 'react';
import { sanitize } from '../sanitize';

class Category extends Component {
  render() {
    const { title, children } = this.props;
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
