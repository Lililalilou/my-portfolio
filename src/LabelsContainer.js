import React, { Component } from 'react';
import './LabelsContainer.scss';

class LabelsContainer extends Component {
  render() {
    const { labels } = this.props;
    return (
      <ul className="labelsContainer">
        {labels.map((label, id) => (
          <li key={id} label={label} className="labelsContainer__entry">
            {label}
          </li>
        ))}
      </ul> 
    );
  }
};

export default LabelsContainer;
