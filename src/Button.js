import React from 'react';


export default (props) => {
    return (
       <button className={`${props.className} btn`}>{props.text || props.children}</button>        
    )
}