import TitleStateLessComponent from './Title.js';
import ButtonStatelessComponent from './Button.js';
import styled from 'styled-components';

export let Title = styled(TitleStateLessComponent) `
                        height: 180px;
                        padding: 20px;
                        background-color: ${props => props.primary?'darkblue':'lightgray'};
                        color: white`;

export let SelfStyledButton = styled(ButtonStatelessComponent) `
                        background: ${props => props.primary?'darkblue':'lightgray'};
                        color: ${props => props.primary?'cyan':'black'};
                        font-size: 18pt;
                        margin: 1em;
                        padding: 0.25em 1em;
                        border: 2px solid lightblue;
                        border-radius: 3px`;