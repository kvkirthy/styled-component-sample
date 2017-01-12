import React, { Component } from 'react';
import Title from './Title.js';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    let AnotherTitle = styled(Title) `
                        height: 150px;
                        padding: 20px;
                        background-color: darkblue;`;
    return (
      <div className="App">
        <AnotherTitle primary className="green-text"></AnotherTitle>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
