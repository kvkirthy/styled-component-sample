import React from 'react';

//export class ButtonStatelessComponent extends 

export default (props) => {
    return (
       <button className={props.className}>{props.text}</button>        
    )
}