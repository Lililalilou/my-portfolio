import React, { Component } from 'react';
import Button from '../Button';

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
            {section.content && section.content.split('\n').map((value) => (
              <p>{value}</p>
            ))}
            {section.list && section.list.map(listElement => (
              <li>
                {listElement}
              </li>
            ))}
          </div>
          <div className="card__options">
            {section.button && (
              <Button button={section.button} className="card__button" />
            )}
            {section.labels && section.labels.map(label => (
              <div className="card__label">{label}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
