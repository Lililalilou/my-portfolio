import React, { Component } from 'react';
//import data from './data';

class Contact extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="contact">
        {category.title}
      </div>
    );
  }
}

export default Contact;
