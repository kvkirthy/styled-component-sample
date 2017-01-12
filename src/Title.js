import React from 'react';
import './App.css';
import logo from './logo.svg';


export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }



    render() {

        return (
            <div className={this.props.className}>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React Styles Sample</h2>
            </div>
        );
    }
}