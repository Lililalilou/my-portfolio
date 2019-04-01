import React, { Component } from 'react';
import data from './data';
import Menu from './Menu';
import Main from './Main';
import './App.scss';

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
