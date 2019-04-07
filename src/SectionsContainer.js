import React, { Component } from 'react';
import Section from './Section';

class SectionsContainer extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="sectionsContainer">
        {sections.map((section, id) => (
          <Section key={id} section={section} />
        ))}
      </div> 
    );
  }
};

export default SectionsContainer;
