import React, { Component } from 'react';
import Category from '../Category';
import About from '../About';
import Works from '../Works';
import Learning from '../Learning';
import Contact from '../Contact';

class Main extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="main">
        {categories.map(category => (
          <Category key={category.title} title={category.title}>
            {category.type==="about" && <About category={category} />}
            {category.type==="works" && <Works category={category} />}
            {category.type==="learning" && <Learning category={category} />}
            {category.type==="contact" && <Contact category={category} />}
          </Category>
        ))}
      </div>
    );
  }
};

export default Main;
