import React from 'react';
import './App.css';
import logo from './logo.svg';


export default class TitleStateLessComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        return (
            <div className={this.props.className}>             
             <div>
                <img src={logo} className="App-logo" alt="logo" />
             </div> 
             <div>            
                <h2>{this.props.text}</h2>
             </div>
            </div>
        );
    }
}