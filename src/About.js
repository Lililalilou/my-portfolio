import React, { Component } from 'react';
import './About.scss';
//import data from './data';

class About extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="about">
        <div className="about__content">
          {category.content}
        </div>
        <div className="about__options">
          {category.labels && category.labels.map(label => (
              <div className="about__label">{label}</div>
          ))}

          {category.buttons && category.buttons.map(button => (
              <button className="about__button" src={button.url}>{button.title}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
