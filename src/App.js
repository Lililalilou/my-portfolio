import React, { Component } from 'react';
import {TinyButton as ScrollUpButton} from 'react-scroll-up-button';
import data from './data';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          <Header />
          <Menu categories={data.categories} />
          <Main categories={data.categories} />
          <ScrollUpButton />
        </div>
      </div>
    );
  }
}

export default App;
