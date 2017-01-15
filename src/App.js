import React, { Component } from 'react';
import { Title, SelfStyledButton } from './theme1.js';
import ButtonStatelessComponent from './Button.js';
import Alert from './Alert.js';
import Text from './Text.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Title primary text="Styled-Components Demo" ></Title>
        <div> &nbsp; </div>
        <div>
          <div>
            <ButtonStatelessComponent className="btn-primary">Demo Button (no additional styling)</ButtonStatelessComponent>
          </div>
          <div>
            <SelfStyledButton primary text="Primary Button" />
          </div>
          <div>
            <SelfStyledButton> Default button </SelfStyledButton>
          </div>    
          <div style={{margin:'1em'}}>
            <Alert>Hello! Namaste. नमस्ते. నమస్కారం. </Alert>
          </div>      
          <div style={{margin:'1em'}}>
            <Alert error>Oops!</Alert>
          </div>
          <div style={{margin:'1em'}}>
            <Text>Namaste...</Text>
          </div>          
          <div style={{margin:'1em'}}>
            <Text important>Important message, please read.</Text>
          </div>            
        </div>
      </div>
    );
  }
}

export default App;
