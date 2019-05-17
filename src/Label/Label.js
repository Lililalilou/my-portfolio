import React, { Component } from 'react';

class Label extends Component {
  render() {
    const { label } = this.props;
    return (
      <div label={label} className="label">{label}</div>    
    );
  }
};

export default Label;
