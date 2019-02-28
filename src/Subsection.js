import React, { Component } from 'react';

class Subsection extends Component {
  render() {
    const { subsection } = this.props;
    return (
      <div>
        <h4>{subsection.title}</h4>
        {subsection.content && (
          <div>{subsection.content}</div>
        )}
      </div>
    );
  }
};

export default Subsection;
