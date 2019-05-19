import React, { Component } from 'react';
import classnames from 'classnames';

class Label extends Component {
  render() {
    const { label, className } = this.props;
    return (
      <div label={label} className={classnames("label", className)}>{label}</div>    
    );
  }
}

Label.defaultProps = {
  className: '',
};

export default Label;
