import React, { Component } from 'react';
import data from './data';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
//import Footer from './Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          <Header />
          <Menu categories={data.categories} />
          <Main categories={data.categories} />
          {/* <Footer personalData={ data.personalData }/> */}
        </div>
      </div>
    );
  }
}

export default App;
