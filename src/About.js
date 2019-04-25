import React, { Component } from 'react';
//import data from './data';

class About extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="about">
        {category.content}
      </div>
    );
  }
}

export default About;
