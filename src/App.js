import React, { Component } from 'react';
import {Title, SelfStyledButton} from './theme1.js';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Title primary text="Styled-Components Demo" ></Title>
        <div className="App-intro">
          <SelfStyledButton primary text="Sample Button 1" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
