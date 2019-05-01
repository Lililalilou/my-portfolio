import React, { Component } from 'react';
import Card from './Card';
//import data from './data';

class Works extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="works">
        {category.sections.map(section => (
          <Card key={section.title} section={section} />
        ))}
      </div>
    );
  }
}

export default Works;
