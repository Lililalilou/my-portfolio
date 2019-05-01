import React, { Component } from 'react';
import './Card.scss';
//import data from './data';

class Card extends Component {
  render() {
    const { section } = this.props;
    return (
      <div className="card">

        <div className="card__image">
          <img alt={section.picture.alt} src={section.picture.src}></img>
        </div>

        <div className="card__body">
          <div className="card__title">
            {section.title}
          </div>

          <div className="card__content">
            {section.content}
          </div>

          <div className="card__options">
            {section.button &&
              <button className="card__button" src={section.button.url}>{section.button.title}</button>
            }

            {section.labels && section.labels.map(label => (
              <div className="card__label">{label}</div>
            ))}

            {section.subsections && section.subsections.map(subsection => (
              <div>
                <div>{subsection.title}</div>
                <div>{subsection.content}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default Card;
