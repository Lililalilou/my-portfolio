import React, { Component } from 'react';
//import data from './data';

class Learning extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="learning">
        {category.title}
      </div>
    );
  }
}

export default Learning;
