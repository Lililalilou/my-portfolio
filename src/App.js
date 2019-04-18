import React, { Component } from 'react';
import data from './data';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header personalData={ data.personalData }/>
        <Menu categories={data.categories} />
        <Main categories={data.categories} />
        <Footer personalData={ data.personalData }/>
      </div>
    );
  }
}

export default App;
