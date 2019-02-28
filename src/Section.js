import React, { Component } from 'react';
import Subsection from './Subsection.js';

class Section extends Component {
  render() {
    const { section } = this.props;
    return (
      <section>
        {section.title && (
          <h4>{section.title}</h4>
        )}
        {/* picture */}
        {section.content && (
          <p>{section.content}</p>
        )}
        {section.button && (
          <button>{section.button.title}</button>
        )}
        {section.subsections && (
          section.subsections.map((subsection, id) => (
            <Subsection key={id} subsection={subsection} />
          ))
        )}
      </section>
    );
  }
};

export default Section;
