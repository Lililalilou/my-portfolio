import React, { Component } from 'react';
import './SmallCard.scss';
//import data from './data';

class SmallCard extends Component {
  render() {
    const { section } = this.props;
    return (
      <div className="smallCard">

        <div className="smallCard__aside">
          <div className="smallCard__image">
            <img alt={section.picture.alt} src={section.picture.src}></img>
          </div>
        </div>

        <div className="smallCard__body">
          {section.subsections && section.subsections.map(subsection => (
              <div className="smallCard__theme">
                <div className="smallCard__theme-title">{subsection.title}</div>
                <div className="smallCard__theme-content">{subsection.content}</div>
              </div>
          ))}
          {section.button &&
            <button className="smallCard__button" src={section.button.url}>{section.button.title}</button>
          }
        </div>

      </div>
    );
  }
}

export default SmallCard;
