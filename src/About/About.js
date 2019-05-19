import React, { Component } from 'react';
import Button from '../Button';
import Label from '../Label';

class About extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="about">
        <div className="about__content">
          {category.content.split('\n').map((value) => (
            <p>{value}</p>
          ))}
        </div>
        <div className="about__options">
          {category.labels && category.labels.map(label => (
            <Label label={label} />
          ))}
          {category.buttons && category.buttons.map((button) =>
            <Button button={button} />
          )}
        </div>
      </div>
    );
  }
}

export default About;
