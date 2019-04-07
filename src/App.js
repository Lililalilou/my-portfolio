import React, { Component } from 'react';
import data from './data';
import Title from './Title';
import Menu from './Menu';
import Main from './Main';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title title={ data.title }/>
        <Menu categories={data.categories} />
        <Main categories={data.categories} />
      </div>
    );
  }
}

export default App;
