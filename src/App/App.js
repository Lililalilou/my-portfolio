import React, { Component } from 'react';
import data from '../data';
import Header from '../Header';
import Menu from '../Menu';
import Main from '../Main';
import ScrollUpButton from '../ScrollUpButton';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          <Header />
          <Menu categories={data.categories} />
          <Main categories={data.categories} />
          <ScrollUpButton
            style={{
              backgroundColor: '',
            }}
          >
          </ScrollUpButton>
        </div>
      </div>
    );
  }
}

export default App;
