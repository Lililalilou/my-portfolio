import React, { Component } from 'react';
import Home from './Home';
import Personal from './Personal';
import Academic from './Academic';
import Learning from './Learning';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Personal />
        <Academic />
        <Learning />
      </div>
    );
  }
}

export default App;
