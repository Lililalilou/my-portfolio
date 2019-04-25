import React, { Component } from 'react';
//import data from './data';

class Works extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="works">
        {category.title}
      </div>
    );
  }
}

export default Works;
