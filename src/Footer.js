import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { personalData } = this.props;
    return (
      <div className="footer">
        <span className="footer__title">Contactez-moi !</span>
        <br/>
        <p>Par mail: {personalData.email}</p>
        <p>Par téléphone: {personalData.phone}</p>
      </div>
    );
  }
};

export default Footer;
