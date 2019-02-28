import React, { Component } from 'react';
import data from './data.js';
import Menu from './Menu.js';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{ data.title }</h1>
        <Menu categories={data.categories} />
        <Main categories={data.categories} />
      </div>
    );
  }
}

export default App;
