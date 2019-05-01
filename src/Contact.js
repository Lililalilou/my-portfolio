import React, { Component } from 'react';
import './Contact.scss';
//import data from './data';

class Contact extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="contact">
        <div className="contact__content">
          <p>Par mail : {category.personalData.mail}</p>
          <p>Par téléphone : {category.personalData.phone}</p>
        </div>
      </div>
    );
  }
}

export default Contact;
