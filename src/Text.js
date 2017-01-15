import React from 'react';

export default (props) => {
    let styleInline = {
        fontFamily: 'comic sans ms',
        fontSize:`${props.important?'18px':'14px'}`,
        fontWeight: `${props.important?'bold':'normal'}`,
        color: `${props.important?'red':'gray'}`
    };

    return(
        <div style={styleInline}>
            {props.children}
        </div>
    );
}