import styled from 'styled-components';


export const DARK = '#131313';

export const InputField = styled.input`
font-family: 'Inter;
background-color : inherit
outline : none;
border: none;
color : #fff; 
font-size: 18px;
width : 100%;
`;

export const InputContainer = styled.div`
    background-color : DARK;
    padding : 12px 16px; 
    border-radius : 10px;
    width : 100%;
`;

export const InputLabel = styled.label`
    color : #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
    display : block;
`;

export const Button = styled.button`
    width : 100%;
    color : #fff;
    background-color : #2b09ff;
    outline : none;
    border : none; 
    font-family : 'Inter';
    font-size : 18px;
    border-radius : 10px;
    padding : 25px 0;
`;

export const Page = styled.div`
    height : 100%;
    display : flex;
    justify-content : center;
    background-color : #fff;
    align-items : center;
`;

