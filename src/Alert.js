import React from 'react';

export default (props) => {
    
    return (
        <div className={`alert ${props.error?'alert-danger':'alert-info'}`}>
            {props.children}
        </div>
    )
};