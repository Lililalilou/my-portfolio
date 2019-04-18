import React, { Component } from 'react';
import './Subsection.scss';

class Subsection extends Component {
  render() {
    const { subsection } = this.props;
    return (
      <div className="subsection">
        <h4 className="subsection__title">{subsection.title}</h4>
        {subsection.content && (
          <div className="subsection__content">{subsection.content}</div>
        )}
      </div>
    );
  }
};

export default Subsection;
