import React, { Component } from 'react';
import SmallCard from '../SmallCard';

class Learning extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="learning">
        {category.subtitle && (
          <div className="learning__subtitle">{category.subtitle}</div>
        )}
        {category.sections.map(section => (
          <SmallCard key={section.title} section={section} />
        ))}
      </div>
    );
  }
}

export default Learning;
