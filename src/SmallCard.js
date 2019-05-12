import React, { Component } from 'react';
import Button from './Button';
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
                <ul className="smallCard__theme-content">
                  {/* {subsection.content} */}
                  {subsection.list.map(listElement => (
                    <li>
                      {listElement}
                    </li>
                  ))}
                </ul>
              </div>
          ))}
          {section.button && (
            <Button button={section.button} />
          )}
        </div>

      </div>
    );
  }
}

export default SmallCard;
