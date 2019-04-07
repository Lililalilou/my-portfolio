import React, { Component } from 'react';
import Subsection from '../Subsection.js';

class Section extends Component {
  render() {
    const { section } = this.props;
    return (
      <section className="section">
        {section.title && (
          <h4 className="section__title">{section.title}</h4>
        )}
        {section.picture && (
          <img className="section__picture" src={section.picture.src} alt={section.picture.alt}/>
        )}
        {section.content && (
          <p className="section__content">{section.content}</p>
        )}
        {section.button && (
          <button className="section__button">{section.button.title}</button>
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
