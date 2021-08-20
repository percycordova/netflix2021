
import styled from "styled-components";
import { InputBase } from '@material-ui/core';

export const NetflixInput = styled.input`

z-index: 30;
background: "#fff";
padding: 1.53rem;
height: 32px;
border-radius: 5px;
border:none;
outline:none;
max-width: 20rem;
`;



export const NetflixButton = styled.button`
background-color:${({color})=>color||"red"};
z-index:15;
color:#fff;
border-radius: 5px;
text-transform: inherit;
padding: 15px;
cursor: pointer;
border:none;
outline:none;
font-size: 1.1rem;
width: ${({width})=>width};

`
