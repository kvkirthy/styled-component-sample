import TitleStateLessComponent from './Title.js';
import ButtonStatelessComponent from './Button.js';
import styled from 'styled-components';

export let Title = styled(TitleStateLessComponent) `
                        height: 150px;
                        padding: 20px;
                        background-color: ${props => props.primary?'darkblue':'lightgray'};
                        color: white`;

export let SelfStyledButton = styled(ButtonStatelessComponent) `
                        background: ${props => props.primary?'darkblue':'lightgray'};
                        color: ${props => props.primary?'white':'black'};
                        font-size: 1em;
                        margin: 1em;
                        padding: 0.25em 1em;
                        border: 2px solid lightblue;
                        border-radius: 3px`;